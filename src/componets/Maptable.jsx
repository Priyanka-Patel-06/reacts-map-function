import React from 'react'

function Maptable() {

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
      <h3>handel table</h3>
      <table>
        <tr>
            <td><h1>name</h1></td>
            <td><h1>email</h1></td>
            <td><h1>contact</h1></td>
        </tr>

        
       { students.map((table)=>
       <tr>
         <td>{table.name}</td>
         <td>{table.email}</td>
         <td>{table.contact}</td>
       </tr>)
       }
      </table>
    </div>
  )
}

export default Maptable
