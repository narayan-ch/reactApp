import React,{useState, useEffect,Fragment} from 'react'
import {Table} from 'react-bootstrap'
function User(){
    const[user,setUser]=useState([
        {name:'anil',age:'26',address: 'noida'},
        {name: 'narayan',age:'22',address:'punjab'},
        {name: 'narayan',age:'22',address:'punjab'},
        {name: 'narayan',age:'22',address:'punjab'},
        {name: 'narayan',age:'22',address:'punjab'},
        {name: 'narayan',age:'22',address:'punjab'}

    ])

    return (
        <Fragment>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
      {
          user.map((item,index)=><tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>

          </tr>)
      }
  </tbody>
</Table>
            
        </Fragment>
    )




}
export default User