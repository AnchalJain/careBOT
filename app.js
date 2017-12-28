var restify=require('restify');
var builder=require('botbuilder');


//setup restify server

var server=restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
  console.log('%s listening to %s', server.name, server.url);
});

//chat connector for comunicating with the Bot framework service
// var connector =  new builder.ChatConnector({
//   appId: process.env.MICROSOFT
// })
