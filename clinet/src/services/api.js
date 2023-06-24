import axios from 'axios'
 
const API_URL="http://localhost:8000";


export const  UplodadFile = async (data)=>{


try{

     let respon= await axios.post(`${API_URL}/upload`,data);
      return respon.data;

}
catch(error){
    console.error("Enter while calling the api",error.messages)
}


}