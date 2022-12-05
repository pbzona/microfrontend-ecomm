import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartDetails';

console.log('Container');

const productList = document.querySelector('#my-products');
mountProducts(productList);

const cartDetails = document.querySelector('#my-cart');
mountCart(cartDetails);