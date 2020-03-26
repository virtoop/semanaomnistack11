const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Métodos HTTP:
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */
/**
 * Tipos de parâmetros:
 * 
 * Query: Parâmetros nomeados enviados na rota após o simbolo "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */


