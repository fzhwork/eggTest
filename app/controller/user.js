exports.info = function*(ctx) {
    const data = this.ctx.params.data;
    console.log("==================此处是传入的数据===================");
    console.log(data);
    const user = yield ctx.service.user.add(data);
    ctx.body = user;
};
