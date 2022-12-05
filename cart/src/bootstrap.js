import faker from 'faker';

const mount = (el) => {
  const cartText = `<p>You have ${faker.datatype.number(10)} items in your cart<p>`;
  
  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const cartDetails = document.querySelector('#dev-cart');

  if (cartDetails) {
    mount(cartDetails);
  }
}

export { mount };
