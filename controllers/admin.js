const Product = require('../models/product');
const { getProducts } = require('./shop');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
    // formsCSS: true,
    // productCSS: true,
    // activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(null, title, imageUrl, description, price);
  req.user.createProduct({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description
  }).then(result => {
    console.log(result);
    res.redirect('/admin/products')
  })
    .catch(err => {
      console.log(err);
    })

};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;

  // Product.findAll({ where: { id: prodId } })
  req.user
    .getProducts({ where: { id: prodId } })
    .then(products => {
      if (!products) {
        const product = products[0];
        return res.redirect('/')
      }
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: products[0]
      });
    })
    .catch(err => console.log(err));

};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findAll({ where: { id: prodId } })
    .then(product => {
      product[0].title = updatedTitle;
      product[0].price = updatedPrice;
      product[0].description = updatedDesc;
      product[0].imageUrl = updatedImageUrl;
      return product[0].save()
    })
    .then(result => {
      console.log(result)
      res.redirect('/admin/products')
    })
    .catch(err => {
      console.log(err)
    });

}

exports.getProducts = (req, res, next) => {
  // Product.findAll()
  req.user
    .getProducts()
    .then(products => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));

};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findAll({ where: { id: prodId } })
    .then(product => {
      return product[0].destroy();
    })
    .then(result => {
      console.log("DEstoryed Product");
      res.redirect('/admin/products');
    })
    .catch(err => console.log(err));


}