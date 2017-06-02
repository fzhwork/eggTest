'use strict';

module.exports = app => {
    class HomeController extends app.Controller {

        * index() {
            yield this.ctx.render('index.html');
        }

        * registers() {
            yield this.ctx.render('register.html');
        }

        * logins() {
            yield this.ctx.render('login.html');
        }

        * userRegisters() {
            const data = this.ctx.params.data;
            console.log(data);
            // 插入
            const result = yield this.app.mysql.insert('user', { data: data });
            console.log(result);
            // 判断插入成功
            const insertSuccess = result.affectedRows === 1;
            console.log(result);
        }

        * userLogins() {
            const data = this.ctx.params.data;
            const result = yield this.service.mysql.add(data);
            this.ctx.body = "success";
        }
    }
    return HomeController;
};
