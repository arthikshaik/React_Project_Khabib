import './App.css'
import Arthik from './images/Photo.jpg'        
import Shaik from './images/Voice.mp3'   

function App() {
  return (
    <>
      <div className="container">
        <img 
          className="image" 
          style={{width:"300px", height:"500px"}} 
          src={Arthik} 
          alt="Khabib..!" 
        />
        <br />
        
        <audio controls>
          <source src={Shaik}></source>  {}
        </audio>
        <br />
        
        <video 
          className="video" 
          style={{width:"500px", height:"500px"}} 
          controls
        >
          <source src="/Video.mp4" />
        </video>
      </div>
    </>
  )
}

export default App