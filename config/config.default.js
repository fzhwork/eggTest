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
        'robot'
    ];
    config.robot = {
        ua: [
            /Baiduspider/i,
        ]
    };
    // add your config here

    return config;
};
