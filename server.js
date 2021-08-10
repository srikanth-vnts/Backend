const express = require('express');

const app = express();

var users = require('./user.json')

app.use(express.json());



app.get("/", function(request, response){
    response.send("Welcome to Home page");
    
})

app.get("/users",function(request, response){
    response.send(users);
    
    
})



app.post("/users", function (request, response) {
    
    let x = request.body;

    users.push(x);

    response.send(users);

    console.log(users);
  
    

    
    
    
})
app.patch("/users/:id", function (request, response) {
    
    let x = request.body.email;
    let y = request.params.id

    for (let i = 0; i < users.length; i++){
  
        if (users[i].id == y) {
            users[i].email = x;
            
        }
    }
    response.send(users);
    
})

app.delete("/users/:id", function (request, response) {
    let y = request.params.id

    for (let i = 0; i < users.length; i++){
  
        if (users[i].id == y) {
            users.splice(i,1)
            
        }
    }
   
    response.send(users);
    console.log(users);
})





app.listen(5000, () => {
    console.log('this is 5000')
})