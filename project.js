const express = require("express");
const rateLimitMiddleware = require("./rateLimit");
const app = express();

app.use(rateLimitMiddleware);
app.get('/api/users',(req,res) =>{
    res.send({
        success:true,
        message:'Welcome To User Rate-Limit API',
    });

});

app.get('/api/users/projects',(req,res) =>{
    res.send({
        success:true,
        author:'Krish Soni',
        'title':'flask-wiz',
        'date': 'Feb 14, 2024'
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
