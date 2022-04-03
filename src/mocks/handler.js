import { rest } from 'msw';

export const handler = [
  rest.get('http://localhost:3030/patentes', (req, res, ctx) => {
    return res(
      ctx.json([
          {abstract_en:"el abstract_en",claims_en:"el claim"}
        ])
    );
  })
];