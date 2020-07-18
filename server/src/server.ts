import express from 'express';
import cros from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cros());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);

// Rota: Endereço completo da requisição 
// Recurso : Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais info do back-end
// POST: Criar uma nova info no back-end
// PUT: att uma info existente no back-end 
// DELETE: Remover uma info do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 =  Buscar dados do usuário

// Request Param : Parâmetro que vem na própria rota que identificam um recurso
// Query  Param : Parâmetro que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações