'use strict';

module.exports = app => {
    class User extends app.Service {
        constructor(ctx) {
            super(ctx);
            this.root = 'https://cnodejs.org/api/v1';
        }

        * add(params) {
            // 调用 CNode V1 版本 API
            const result = yield this.ctx.curl(`${this.root}/topics`, {
                method: 'post',
                data: params,
                dataType: 'json',
                contentType: 'json',
            });
            // 检查调用是否成功，如果调用失败会抛出异常
            this.checkSuccess(result);
            // 返回创建的 topic 的 id
            return result.data.topic_id;
            // 插入
            // const result = yield this.app.mysql.insert('user', { "uid": 0, "username": data.username, "password": data.password, "email": data.email, "tel": '18883188480' });
            // // 判断插入成功
            // if (result.serverStatus == 2) {
            //     return "success";
            // } else {
            //     return "fail";
            // }
        };
        // 封装统一的调用检查函数，可以在查询、创建和更新等 service 中复用
        checkSuccess(result) {
            if (result.status !== 200) {
                const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
                this.ctx.throw(result.status, errorMsg);
            }
            if (!result.data.success) {
                // 远程调用返回格式错误
                this.ctx.throw(500, 'remote response error', { data: result.data });
            }
        }
    }
    return User;
};
