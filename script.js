// * 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade
// e retorne o preço total
const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 78,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 78,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];
const totalPrice = (id, quantidade,array) => {
  console.log( 'teste');
  const encontraElemento = array.find((elemento) => {
    return elemento.id === id;
  })
 const precoTotal = encontraElemento.price * quantidade;
 return precoTotal;

}
console.log(totalPrice(1, 2, techProducts));