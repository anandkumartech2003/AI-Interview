import express from 'express'
import { signup } from '../controllers/auth/user.js'
const router=express.Router()

router.post('/signup',signup)

router.post('/login',(req,res)=>{
     res.send("server is hitting")
})
export default router
