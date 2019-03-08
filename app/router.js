'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/addUser', controller.user.addUser);
  router.get('/taskcount', controller.user.taskCount);
};
