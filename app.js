const express = require('express')
const app = express();

const PORT = 3000;

app.get("/user", (req, res) => {
    console.log('This is a new user app');
    res.send("<h1>User is requesting '/ user url</h1>");
})

app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`);
})
