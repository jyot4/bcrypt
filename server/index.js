import express from 'express'
import cors from 'cors'
import connection from './Connection.js'
import detail from './Model.js'
import bcrypt from 'bcrypt'



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({origin:'http://localhost:3001'}))

///.....................Resigter.....................//
app.post('/formdata' , async(req,res)=>{
    console.log(req.body)


    const {name,email,username,password} = req.body

const hashPassword = await bcrypt.hash(password , 10 )


    const savedata = new detail({
        name,
        email,
        username,
        password : hashPassword
        
    })

    
     res.status(200).send('data is reciving')
     await savedata.save()
})

//.............................Login....................//

app.post('/login', async(req ,res)=>{
    console.log(req.body)
    const  {username , password} = req.body

    const findUser = await detail.findOne({username})

    if(detail){

        if(findUser && bcrypt.compareSync(password,findUser.password)){
            res.status(200).send(findUser.email)
        }
        else{ 
            res.status(400).send("not able to login")
        }
    }


   
})


connection.then(()=>{
app.listen(8000,()=>{
    console.log('server is learning')
})
})