import faker from 'faker';

const cartText = `<p>You have ${faker.datatype.number(10)} items in your cart<p>`;

document.querySelector('#dev-cart').innerHTML = cartText;