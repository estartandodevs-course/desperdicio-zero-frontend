import { API_URL } from './../constants/index';

export async function GetAllProducts() {
  const products = await fetch(API_URL)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });

  return products;
}

export async function GetProductsByCategory(category) {
  const products = await fetch(`${API_URL}/search?categorias=${category}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.log(error);
    });

  return products;
}

export async function AddProduct(product) {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      data: [
        {
          nome: product.nome,
          'data-de-validade': product['data-de-validade'],
          'prazo-para-consumo': product['data-de-validade'],
          local: product.local,
          preço: product.preço,
          'unidade-de-medida': product['data-de-validade'],
          categorias: product.categorias,
          quantidade: product.quantidade,
          usuario: 'mauri',
        },
      ],
    }),
  })
    .then(() => true)
    .catch(error => {
      console.log(error);
      return false;
    });
}
