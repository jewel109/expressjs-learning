const express = require("express")

const router = express.Router()

router.route("/")
  .all((req, res, next) => {
    console.log("i will alaways be called")
    next()
  })
  .post((req, res, next) => {
    req.user = req.body.user
    console.log(req.body.user)
    // console.log(req.user)
    res.status(200).json({
      data:req.user
    })
    next()
  })
  .get((req, res, next) =>{
    console.log(` get req ${req.user}`)
    res.status(200).json({
      user:req.user
    })
    next()
  } )

module.exports = router
