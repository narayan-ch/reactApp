import React,{useEffect,useState} from 'react'
function Contact(){

    const [name,setName]=useState("anil");

    useEffect(()=> {
        console.warn("hello");
    })
    let data="contact us component"


    return(
        <div>
            <h1>{data}</h1>
            <h2>{name}</h2>
            <button onClick={()=>setName("narayan")}>Update name</button>
        </div>
    )
}
export default Contact;