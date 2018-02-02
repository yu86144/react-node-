// 这里是用来写业务逻辑

//获取用户
export const getUser = (ctx, next) => {
    ctx.body = [
        '新闻',
        '美俄米',
        '美俄米2',
        '美俄米3',
        '美俄米4',
        '美俄米5',
    ]
}

//用户注册
export const registerUser = (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}