import express from 'express';
import type { Router } from 'express';
import type { Infras } from '../_common/infras';
import type { Config } from '../_common/configs/server';
import { wrapAsync } from '../_common/errors';
import { createMiddlewares } from './middlewares';
import { createControllers } from './controllers';

export function createRoutes(config: Config, infras: Infras): Router {
  const router = express.Router();

  const { isLoggedIn } = createMiddlewares(config);
  const controllers = createControllers(config, infras);

  router.get(
    '/profile',
    wrapAsync(isLoggedIn),
    wrapAsync(controllers.getProfile),
  );
  router.post('/register', wrapAsync(controllers.registerUser));
  router.post('/login', wrapAsync(controllers.login));
  router.post('/logout', wrapAsync(controllers.logout));
  router.patch(
    '/password',
    wrapAsync(isLoggedIn),
    wrapAsync(controllers.changePassword),
  );

  return router;
}
