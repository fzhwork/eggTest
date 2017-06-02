module.exports = function(app) {
    app.beforeStart(function*() {
        // 从配置中心获取 MySQL 的配置
        // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
        const mysqlConfig = yield app.configCenter.fetch('mysql');
        app.database = app.mysql.createInstance(mysqlConfig);
    });
};
