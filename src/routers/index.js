import express from "express"
const route = express.Router()
import {taskList} from '../assets/ticket.js'
import {insertTicket, getAtask, getTasks, deleteTasks,updateTodo} from '../modules/TaskList.Model.js'

//add new ticket
route.all("/", async(req, res,)=>{
    console.log("we got hit")
    
    //res.json({message:"you got hit"})
})




//return all the ticket
route.get("/:id?",async (req, res)=>{
    try{
        const {id} =req.params
    console.log(id)

    if(id){
        const result = await getAtasks(id)
        res.json(result)

    }else{
    const taskLists = await getTasks()
    console.log(taskList,)
    res.json({result:taskLists})
}
    }catch(error){
        console.log(error)
        res.json({
            message:"we are unable to process your req, plz try again later"
        })
    }
    
})


// add new ticket
route.post("/", async (req, res)=>{
    try {
    //store data in the database
   const result = await insertTicket(req.body)
//console.log(result)
    res.json(req.body)
}catch(error) {
    console.log(error)

}
})



// update ticket
route.patch("/", async (req, res)=>{
    try{
    console.log(req.body)
    if(!req.body.id){
        return res.jsson({status:'error', message:'invalid id req'})
    }
    const result = await updateTodo(req.body)
    const msg = result ? "Selected data deleted" :"Nothing is updated"
    
    res.json(req.body)
 } catch (error) {
    console.log(error)
 }
})



//delete ticket
route.delete("/", async(req, res)=>{
    const {id} =req.body
    if(!id){
        return res.json({status:'error',mesage:'invalid id request'})
    }

    const result = await deleteTasks(id)
    const msg =result ? result : "Collectin doesnot exist"
    console.log(result)
    res.json(msg)
})
    


//bad practice
//route.get("/Add",(req res)=>{
    //
   // res.json({message:'you are req all the ticket'})
//})


export default route