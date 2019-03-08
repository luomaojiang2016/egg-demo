'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async addUser() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }
  async taskCount(){
    return await this.ctx.service.user.findtaskcount();
  }
}

module.exports = UserController;
