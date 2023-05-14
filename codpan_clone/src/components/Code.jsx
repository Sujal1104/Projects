import React from 'react'
import Editer from './Editer'
import {Box, styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'



const Contane= styled( Box )`
    display: flex;
    background-color:#060606;
    height:50vh;
`

function Code() {

  const {html,setHtml,css,setCss,js,setJs}= useContext(DataContext);

  return (
    <Contane>
      <Editer
        heading="HTML"
        icons="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
      />
      <Editer
          heading="CSS"
          icons="*"
          color="#0EBEFF"
          value={css}
        onChange={setCss}
      />
      <Editer
          heading="JavaScript"
          icons="( )"
          color="#FCD000"
          value={js}
        onChange={setJs}
      />

    </Contane>
  )
}

export default Code
