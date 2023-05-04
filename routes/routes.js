let express = require("express")
let router = express.Router()

router.get("/", function(req,res,next){
    res.json({
        "message": "Hello,  This is my Azure app  ITEC 2560 web programers"
    })
})

module.exports = router