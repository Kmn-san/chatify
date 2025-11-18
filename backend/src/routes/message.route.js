import express from "express";

const router = express();

router.get("/send",(req,res) =>{
    res.send("Send message endpoint");
})

export default router;