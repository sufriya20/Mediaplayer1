//importing json-server library
const jsonServer=require('json-server')

//creating server instance
const mpServer=jsonServer.create()

//getting default middleware
const middleware=jsonServer.defaults()

//setting routes for resources
const routes=jsonServer.router('db.json')

mpServer.use(middleware)
mpServer.use(routes)

const PORT=3000 || process.env.PORT
mpServer.listen(PORT,()=>{
    console.log('Server running ar:'+PORT    )
})