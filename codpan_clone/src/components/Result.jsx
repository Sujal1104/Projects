import React, { useContext,useState,useEffect } from 'react'

import { Box ,styled} from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Contaner =styled(Box)`

height:41vh;
`





function Result() {


const[src,setSrc]= useState('')

const {html,css ,js}=useContext(DataContext);

const srcCode=`


<html>
<body> ${html}</body>
<style> ${css}</style>
<script> ${js}</script>
</html>
`

useEffect(()=>{

  const time=  setTimeout(()=>{
setSrc(srcCode)
},1000)

return ()=> clearTimeout(time);
},[html,css,js]
)

    return (
    <Contaner>
      <iframe
      srcDoc={src}
      title="Output"
      sandbox='allow-scripts'
      width="100%"
      height="100%"
     />

     
    </Contaner>
  )
}

export default Result
