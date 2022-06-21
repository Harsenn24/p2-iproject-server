const express = require("express")
const router = express.Router()
const {Controller} = require("../Controller/index.js")
const { authentif } = require("../middleware/autentif.js")


router.post('/login', Controller.login)

router.use(authentif)

router.get('/getsong', Controller.getallSong)




module.exports = router