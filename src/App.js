import './App.css';
import PictureFrame from './PictureFrame';
import NavigationBar from './NavigationBar';


import React, { useState , useEffect } from 'react'

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])
  

  const buttonEvent = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <h1>React Art Gallery</h1>
      <PictureFrame
        title={data.title}
        primaryImage={data.primaryImage}
        culture={data.culture}
        artistDisplayBio={data.artistDisplayBio}
        objectDate={data.objectDate}
        medium={data.medium}
       />
      <NavigationBar
        buttonEvent={buttonEvent}
        />
    </div>
  );
}

export default App;
