import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

//GET: Buscar ou listar uma informação
//POST: Criar alguma nova informação
//PUT: Atualizar uma informação existente
//DELETE: Deletar uma informação existente

//route params: identificar recurso dentro da nossa rota eu quero atualizar ou deletar
//query params: usamos para paginação , filtros, ordenação
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);