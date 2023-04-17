const {resolve} = require("path")

const web = (app,express)=>{
    app.use(express.static(resolve('./home')))

    app.get('/',(req,res)=>{
        const homePath = resolve('./home/index.html')
        res.sendFile(homePath)
    })

    app.get('/otp',(req,res)=>{
        const homePath = resolve('./home/otp.html')
        res.sendFile(homePath)
    })

}

module.exports = web