import React from 'react'

function Maparray() {

    const system=["aws","terrafrom","ubntu","kubnitess","git","github"];


  return (
    
    <div>
     <h1>handle array with list</h1>
      {
        system.map((data)=><h1>system is :{data}</h1>)

     }
    </div>
    
  )
}

export default Maparray
