const express = require('express')
const app = express();

const PORT = 3000;

app.get("/user", (req, res) => {
    console.log('This is a new user app');
    res.send("User is requesting '/ user url");
})

app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`);
})