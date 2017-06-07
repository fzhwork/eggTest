'use strict';

module.exports = app => {
    app.get('/', 'home.index');
    app.get('/register', 'home.registers');
    app.get('/login', 'home.logins');
    app.post('/userReg', app.controller.user.add);
    app.get('/news', app.controller.news.list);
};
