import React from 'react'

import { useState } from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditer} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'


const Containe= styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px 8px;

`

const Heading = styled(Box)`
background: #1d1e22;
display: flex;
padding: 9px 12px;
` 
const Righths = styled(Box)` 
display: flex; 
background:#060606;
color: #AAAEBC;
justify-content: space-between;
font-weight:700;
`



const Editer=( {heading, icons,color,value,onChange} ) => {

const [open,setOpen]= useState(true);


const handleChange =(editer,data,value)=>{
onChange(value);
}

    return (
        <>
            {/* header */}

            <Containe style={open ? null : {flexGrow: 0}}>
                <Righths>
                    <Heading>
                       <Box component="span"
                       style={{background:color,
                                display:'flex',
                                height:20,
                                width:20,
                                placeContent: 'center',
                                borderRadius:"5px",
                                marginRight:5,
                                paddingBottom:2,
                                color:"#000"
                                
                       
                       
                       }}
                       >
                       {icons}
                         </Box> 
                         {heading}

                           </Heading>
                           <CloseFullscreenIcon
                           fontSize='small'
                           style={{alignSelf:'center'}}
                                onClick={()=> setOpen(prevState => !prevState )}

                           />
                           </Righths>
                          <ControlledEditer
                               className='controlled-editor'
                               value={value}
                               onBeforeChange={handleChange}
                               options={{
                              
                                theme:'material',
                                lineNumbers:true
                            
                               }}
                          />
            </Containe>


            {/* body */}
            <Box>

            </Box>
        
</>


    )
}

export default Editer
