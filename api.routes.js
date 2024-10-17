
module.exports=(server)=>{

    var usersList = [
        {id: 1, name: 'Foulen'},
        {id: 2, name: 'Mohammed'},
        {id: 3, name: 'Rim'},
]
    server.get('/users/:id',(req,res)=>{
        let id = req.params.id;
        let user = usersList.find(u=>u.id==id)
        if(user){
            res.send(user.name)
        }
        else{
            res.status(420).res.send('user doesnt exist')}
            
        })
    server.post('/create-user',(req,res)=>{
        res.send(req.body)
        usersList.push(req.body)
        res.send({ message : 'User added successfully'})
    
    })
    
    server.put('/update-user/:id',(req,res)=>{
            let id = req.params.id;
         
            let userIndex = userIndexsList.findIndex(u=>u.id==id);
            if(user){
            usersList[userIndex] = {...usersList[userIndex],...req.body}
            }else{
                res.status(420).send("user not found");
            }
            res.send("user updated")
    
            
         
    })
    
    server.delete('/delete-user/:id', (req,res)=>{
        let id = req.params.id
        let userIndex = usersList.findIndex(u=>u.id==id);
        if(userIndex!= -1){
            usersList.slice(userIndex , 1);
            res.send({message : "user deleted successfully "})
        }else {
            res.status(420).send('user not found')
        }
    })

}




