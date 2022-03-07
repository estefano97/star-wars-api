import './App.css';
import Main from './components/Main';
import video from "./assets/video.mp4";

function App() {
  return (
    <div className="App">
      <header className='headerContainer'>
        <h2>The Star Wars Characters</h2>
        <video autoPlay muted loop className="videoBackground" src={video}></video>
      </header>
      <Main/>
    </div>
  );
}

export default App;
