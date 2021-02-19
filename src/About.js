import React from 'react'
class About extends React.Component{
    
    constructor(){
        super();
        this.state={
            name: 'anil',
            age:22
        }
    }
    componentDidMount(){
        console.warn("did mount");
    }
    componentDidUpdate(){
        console.warn("did update");
    }
    render(){
       return( <div>
            <h1>About us Component</h1>
            <h2>{this.state.name}</h2>
            <button onClick={()=>{this.setState({name:'narayan'})}}>Update state</button>
        </div>)
    }
}
export default About;