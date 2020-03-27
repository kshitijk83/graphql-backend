function links(parent, args, context) {
    return context.prisma.user({ id: parent.id }).links()
}

function votes(parent, _, context){
  return context.prisma.user({id: parent.id}).votes();
}
  
module.exports = {
  links,
  votes
}