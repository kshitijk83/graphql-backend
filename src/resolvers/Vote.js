function link(parent, args, ctx, info){
    return ctx.prisma.vote({id: parent.id}).link();
}

function user(parent, args, ctx, info){
    return ctx.prisma.vote({id: parent.id}).user();
}

module.exports={
    link,
    user,
}