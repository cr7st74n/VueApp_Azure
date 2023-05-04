let express = require("express");
let routers = require("./routes/routes");
let path = require('path');

let app = express()

let pathToVueApp = path.join(__dirname, "hello-vue", "dist")
let vueApp  = express.static(pathToVueApp)
app.use('/', vueApp)

app.use("/api", routers)

let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port ', server.address().port);
    
})