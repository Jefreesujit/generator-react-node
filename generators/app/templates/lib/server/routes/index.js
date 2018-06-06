'use strict';
import { Router as routerFactory } from 'express';
import { appCntrls, homeCntrls } from '../controllers';

let router = routerFactory();

router.route('/api/get-page-details')
  .get(homeCntrls.getPageData);

router.route('/api/is-alive')
  .get(appCntrls.isAlive);

router.route('/api/*')
  .get(appCntrls.notFound);

export default function attachRoutes (app) {
  app.use(router);
}
