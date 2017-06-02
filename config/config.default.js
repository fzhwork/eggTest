'use strict';
module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1496302886253_9175';
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };
    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    };
    config.middleware = [
        'robot',
    ];
    config.robot = {
        ua: [
            /Baiduspider/i,
        ],
    };
    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'So456789',
            database: 'test',
        },
        app: true,
        agent: false,
    };
    // add your config here

    return config;
};
