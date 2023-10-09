import React from 'react'

function Maparray2() {

    const students=[
        {name:"parth",email:'parth@gmail.com',contact:98765431},
        {name:"rishi",email:'rishi@gmail.com',contact:98765431},
        {name:"rakesh",email:'rakesh@gmail.com',contact:98765431},
        {name:"neel",email:'neel@gmail.com',contact:98765431},
        {name:"jeel",email:'jeel@gmail.com',contact:98765431},
        {name:"parth",email:'parth@gmail.com',contact:98765431},

    ]
  return (
    <div>
      <h1>handle with arrey with list</h1>
      {
        students.map((data)=><h4>students is :{data.name},{data.email},{data.contact}</h4>)
      }
    </div>
  )
}

export default Maparray2
