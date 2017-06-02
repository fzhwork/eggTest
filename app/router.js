'use strict';

module.exports = app => {
    app.get('/', 'home.index');
    app.get('/register', 'home.registers');
    app.get('/login', 'home.logins');
    app.get('/userReg:data', app.controller.user.info);
    app.get('/news', app.controller.news.list);
};
