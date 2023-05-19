
import ReactDOM from 'react-dom/client';
import React, { Component } from 'react'



// you can define a react compoent using 2 technique

// 1 functional compoent

function A(props){ // pass the argumnet in props 

  let name='KUMAR' // deta is avialbale withing compoent 
  let surname2='KUMARI'
  // every function return something 
  return <h1>A-- {props.suruname} {name}--- <B  suruname={surname2}/></h1>
}


// 2 calss compoent

// class Child extend parent{}

export default class B extends Component {



  // 1. properties/ variable

  name ='Riya' 
   
  // address=''; //   

  // 2. Constructor

  constructor(){
    super()
    this.address='Bihar'
  }


  // 3. methods
  
  render() {
    return (
      <>
      {
      // in order to acces any member of a class you have to use this.member
      // this.member
      }
      <span>B-- {this.name} {this.props.suruname} <C /></span>
      
      </>
      )
    }
  }

  
const root = ReactDOM.createRoot(document.getElementById('root'));

let sn='CHANDAN'

let C =(props)=>{
  let name='Kumari'

  return <span> C {props.children} {name}</span>
}

root.render(
 <>
    <A suruname={sn}/>

 
 
 </>
);


