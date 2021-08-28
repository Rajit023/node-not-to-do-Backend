import TaskListSchema from './TaskList.schema.js'

const newTask ={
    task: "watching TV",
    hr:5,
}
export const insertTicket =(newTask)=>{
    return new Promise((resolve,reject))
    try{
        TaskListSchema(newTask)
        .save()
        .then((data) => {
            console.log(data)
        })
        .catch((error) =>{
            reject(error)
        })
    } catch (error){
        reject(error)
    }

}



//get sinle ticket
export const getAtask =(_id) =>{

    return new Promise((resolve, reject) =>{
    TicketListSchema.findById(_id)
    .then((data)=> resolve(data))
    .catch((error) => reject(error))
})
}

export const getTasks =() =>{

    return new Promise((resolve, reject) =>{
    TicketListSchema.find()
    .then((data)=> resolve(data))
    .catch((error) => reject(error))
})
}

//delete single document
//export const deleteTask = (_id) => {
  //  return new Promise((resolve, reject) =>{
      //  TicketListSchema.findByIdAndDelete(_id)
        //.then((data)=> resolve(data))
       // .catch((error) => reject(error))
    //})
   // }



    //deleting multiple document
    export const deleteTasks = ids => {
        return new Promise((resolve, reject) =>{
            TicketListSchema.deleteMany({
                _id: {
                $in: ids,
            },
            })
            .then((data)=> resolve(data))
            .catch((error) => reject(error))
        })
        }




        export const updateTodo = (id,todo) => {
            return new Promise((resolve, reject) =>{
                TicketListSchema.findByIdAndUpdate(
                id, 
                { todo,
                } )
                .then((result) => resolve(result))
                .catch((eror) => reject(error))
            })
        }