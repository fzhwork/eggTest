exports.add = function*(ctx) {
    const data = ctx.request.body;
    const user = yield ctx.service.user.add(data);
    if (user == "success") {
        ctx.render("login.html");
    }
};
