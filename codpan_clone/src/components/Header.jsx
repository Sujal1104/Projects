import React from 'react'
import {AppBar,Toolbar,styled} from "@mui/material";
 

const Contaner =styled(AppBar)`
background: #060606;
hight: 9vh;

`

const logo="codepen.png";

const Header = () => {
  return (
    <div>
<Contaner position='static' >
<Toolbar>
<img src={logo} alt="logo"  style={{width:150}} />

</Toolbar>

</Contaner>

 
    </div>
  )
}

export default Header;
