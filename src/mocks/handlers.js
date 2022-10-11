import { rest } from "msw";

export const handlers = [
  rest.get('meuendpoint.com.br/usuario', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nome: "Marcela Fernanda",
        idade: 35
      })
    )
  })

]