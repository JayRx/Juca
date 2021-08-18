let products = [
  { name: 'Alqueva', price: 50.00, image: 'img/alqueva2.jpg'},
  { name: 'Odemira', price: 50.00, image: 'img/odemira1.jpg'},
  { name: 'Setúbal', price: 50.00, image: 'img/setubal1.jpg'},
  { name: 'Nisa', price: 50.00, image: 'img/nisa1.jpg'}
];

let unfeatured_products = products.slice();

var featured_html = document.querySelectorAll('.products-holder .product-holder');

featured_html.forEach(function(el) {
  var randomNumber = Math.floor(Math.random() * unfeatured_products.length);

  var imageNode = el.children[0].children[0];
  var nameNode = el.children[1].children[0];
  var priceNode = el.children[1].children[1];

  var product = unfeatured_products[randomNumber];
  imageNode.style.backgroundImage = `url("${product.image}")`;
  nameNode.innerHTML = product.name;
  priceNode.innerHTML = '€' + product.price.toFixed(2);

  unfeatured_products.splice(randomNumber, 1);
});
