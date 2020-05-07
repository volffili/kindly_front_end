import React, {useEffect, useState} from "react"

import ReactLoading from "react-loading";


export default (props) => {
  
  
  
  return (
      <div style={{
        width: '20%',
        height: '20%',
        marginTop: '10%',
        marginLeft: '40%'
      }}>
        <h1>Načítání...</h1>
        <ReactLoading
          type="spin"
          color="black"
          height={"100%"}
          width={"100%"}
        />
      </div>
  )
}

