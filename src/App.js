import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
    return(
      <div className="lab">
        <h1>Kalvium Gallery</h1>
        <div className="image">
          {imageData().map((e)=>{
            return <img src={e.img}/>
          })}
        </div>
      </div>
    )
    
  }


export default App;
