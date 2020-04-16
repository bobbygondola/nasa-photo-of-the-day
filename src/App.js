import React, {useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// function app(){
  //set your states const [xyz,setxyz] = useState()

  //set your useEfects.. axios.get("").then(response => { setNasaDailyData(response.data)}) .catch(error {console.log(error)})

  // use your RETURNS classes classNames ontop of classes with names putting your images in.
//}



function App() {

  //VARIABLES/ States AND URL
  const [nasaData, setNasaData] = useState(null);

  const url = "https://api.nasa.gov/planetary/apod?api_key=PD7NNnG6RckiIxO3JjBI0GqAGLqcPhl4izVHEfMP";

  
//USE EFFECT
  useEffect(() => {
    axios.get(url).then((response) => {
      setNasaData(response.data)
      console.log(response.data)
      const data = (response.data)
      console.log(data.title)
    })
  },[])


  //Return Data in App Funtion
  return (
    // const data = (response.data)

    <div className="App">

    <div className="Title">
      <p>
        {/* {nasaData && {data.title}} */}
      </p>
    </div>

    <div className ="ImageTitle">
      
    </div>

    <div className = "Description">

    {nasaData &&<p>{nasaData.explanation}</p>}

    </div>

    <div className = "Image">


    </div>

    <div className = "Nav">

    </div>
    </div>
    
  );
}

export default App;
