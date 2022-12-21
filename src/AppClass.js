import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }
  render(){
    return(
      <div className="lab">
        <h1>Kalvium Gallery</h1>
        <div className="image">
          {this.imageData().map((e)=>{
            return <img src={e.img}/>
          })}
        </div>
      </div>
    )  
  }
}

  // code here



