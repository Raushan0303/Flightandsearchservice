const express = require("express");

const setupAndStartServer = () =>{

    const app = express();
    const PORT = 5047;

    app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);
    })
}


setupAndStartServer();