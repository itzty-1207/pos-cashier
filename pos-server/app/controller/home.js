'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getOftenGoods() {
    const { ctx } = this;
    const sql = `SELECT goods.goodsId as id,
                    goods.goodsName as goodsName,
                    goods.price as price
                    FROM oftengoods AS goods 
                    `;
    const results = await this.app.mysql.query(sql);
    ctx.body = { data: results };
  }
  async getTypeGoods() {
    const { ctx } = this;
    const sql1 = `SELECT goods.goodsId as id,
                  goods.goodsImg as goodsImg,
                  goods.goodsName as goodsName,
                  goods.price as price
                  FROM typegoods AS goods WHERE typeId=typeHamburgs`;
    const sql2 = `SELECT goods.goodsId as id,
                  goods.goodsImg as goodsImg,
                  goods.goodsName as goodsName,
                  goods.price as price
                  FROM typegoods AS goods WHERE typeId=typeSnacks`;
    const sql3 = `SELECT goods.goodsId as id,
                  goods.goodsImg as goodsImg,
                  goods.goodsName as goodsName,
                  goods.price as price
                  FROM typegoods AS goods WHERE typeId=typeDrinks`;
    const sql4 = `SELECT goods.goodsId as id,
                  goods.goodsImg as goodsImg,
                  goods.goodsName as goodsName,
                  goods.price as price
                  FROM typegoods AS goods WHERE typeId=typePackages`;
    const results1 = await this.app.mysql.query(sql1);
    const results2 = await this.app.mysql.query(sql2);
    const results3 = await this.app.mysql.query(sql3);
    const results4 = await this.app.mysql.query(sql4);
    ctx.body = { typeHamburgs: results1, typeSnacks: results2, typeDrinks: results3, typePackages: results4 };
  }
}

module.exports = HomeController;
