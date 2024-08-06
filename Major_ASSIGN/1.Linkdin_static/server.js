const express= require("express");
const app= express();

app.use(express.json());

const port=2345;

const server =app.listen(port,()=>{
    console.log(`severver running on port ${port}`)
});
