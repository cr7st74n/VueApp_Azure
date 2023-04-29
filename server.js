let express = require("express");
let routers = require("./routes/routes");

let app = express()

app.use("/api", routers)

let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port ', server.address().port);
    
})