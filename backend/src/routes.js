const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//Tipos de parametros no express
//QUery params: request.query (filtros, ordenacao, paginacao...)  GET
//Route params: request.params (identificar um recurso na alteracao ou na remocao)  PUT, DELETE
//Body: request.body (dados para criação ou alteracao de um registro) POST, PUT

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.put('/devs/:username', DevController.update);

routes.get('/search', SearchController.index);

module.exports = routes;
