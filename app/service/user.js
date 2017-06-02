'use strict';

module.exports = app => {
    class User extends app.Service {

        * add(data) {

            // 插入
            const result = yield this.app.mysql.insert('user', { data: data });
            console.log(result);
            // 判断插入成功
            const insertSuccess = result.affectedRows === 1;
            console.log(result);
            return insertSuccess;

        }
    }
    return User;
};
