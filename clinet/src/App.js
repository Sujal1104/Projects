import  { useRef ,useState , useEffect } from 'react'
import './App.css';
import {UplodadFile} from './services/api.js'





function App() {
const FileInputRef= useRef();
const  [file ,setFile] =useState("");
const [result, setResult]=useState("");



  const logo ="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"; 

  useEffect((
  )=>{
 const getImg =  async () =>
 {
  if(file)
  {
  
    const data =new FormData();
    data.append("name",file.name)
    data.append("file",file)

    let response = await UplodadFile(data);
    setResult(response.path)
  }
 }
 getImg();
  }, [file])

const onunloadClick= ()=>{

FileInputRef.current.click();

}


console.log(file)

  return (
 
    
<>

<div className='container'> 
 <img src={logo} alt="banner"/>
 <div className=' wrapper'> 
 
 <h1> File shering</h1>

 <h2>
  Upload File 
 </h2> 
 
 <button onClick={() =>onunloadClick()}> Upload</button>
<input type="file" placeholder='hii'  ref={FileInputRef} style={{display: 'none'}}  

onChange={(e)=>setFile(e.target.files[0])}

/>
 <a href={result} target='_blank'>{result}</a>

 </div>
 </div>

</>





);




}

export default App;
