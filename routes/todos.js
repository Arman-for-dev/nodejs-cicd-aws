import express from "express";


const router = express.Router();

router.get("/todos/",(req, res)=>{
    console.log("Hello nodejs")
});
router.post("/todos/",(req, res)=>{
    console.log("Post created!")
});
router.get("/todo/:id",(req, res)=>{
    const id = req.params.id;
    console.log(id)
});
router.put("/todo/:id",(req, res)=>{
    const id = req.params.id;
    console.log(id)
});
router.delete("/todo/:id",(req, res)=>{
    const id = req.params.id;
    console.log(id)
});



export default router;