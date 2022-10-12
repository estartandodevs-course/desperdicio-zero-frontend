import { rest } from 'msw';

export const handlers = [
  rest.get('meuendpoint.com.br/usuario', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nome: 'Marcela Fernanda',
        idade: 35,
        imagem: 'https://cdn.mindminers.com/blog/uploads/2021/05/Dani-Almeida_auto_x1.png',
      })
    );
  }),

  rest.get('meuendpoint.com.br/valordesperdicado', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        valor: 124.99,
      })
    );
  }),
];
