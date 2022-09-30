import {Router} from "express";

import auth from "./middlewares/auth.js"
import UsersController from "./controllers/UsersController.js"
import SessionsController from "./controllers/SessionsController.js";

const routes = new Router();

routes.post('/sessions', SessionsController.create);

routes.use(auth);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.delete)

export default routes;