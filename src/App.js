import './App.css';
import PictureFrame from './PictureFrame';
import NavigationBar from './NavigationBar';

function App() {
  return (
    <div className="App">
      <h1>React Art Gallery</h1>
      <PictureFrame
        title="Sunset"
        src="sunset.jpg"
        alt="sunset"
      ></PictureFrame>
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
