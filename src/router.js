const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.get("/", controller.renderFace)
router.get("/login", controller.renderLoginPage)
router.post("/login", controller.LogIn)
router.get("/home", controller.renderHome)
router.get("/courts", controller.getCourts)
router.get("/users",controller.getUsers)
router.get("/adresses",controller.getAdress)

router.get("/adduser", controller.renderAddUser)
router.post("/adduser", controller.AddUser)

router.get("/addcourt", controller.renderAddCourt)
router.post("/addcourt", controller.AddCourt)

router.get("/addevent", controller.renderAddEvent)
router.post("/addedevent", controller.AddEvent)

router.get("/showevents", controller.showEvent)
router.post("/chooseevent", controller.ChooseEvent)
router.post("/becomeparticipant", controller.becomeParticipant)
router.get("/logout", controller.LogOut)


module.exports = router