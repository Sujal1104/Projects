import mongoose from 'mongoose'

const DBconnection =  async  () =>{

const DB_URL= `mongodb://sujal:SUJAL.2004@ac-bexd1wu-shard-00-00.ofnseh4.mongodb.net:27017,ac-bexd1wu-shard-00-01.ofnseh4.mongodb.net:27017,ac-bexd1wu-shard-00-02.ofnseh4.mongodb.net:27017/?ssl=true&replicaSet=atlas-bl4xmd-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{

 
       await mongoose.connect(DB_URL,{useNewUrlParser:true})
        console.log("Db connected")
    }
    catch(error){

        console.log('Error while connectiong database',error.message)

    }


}

export default DBconnection;