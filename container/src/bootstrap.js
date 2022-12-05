import { mount } from 'products/ProductsIndex';
import 'cart/CartDetails';

console.log('Container');

const productList = document.querySelector('#my-products');
mount(productList);