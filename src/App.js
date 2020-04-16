import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import Modal from './Modal.js';
import { Alert } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';



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
    <Alert color="primary">
      Due to Covid-19, Updates to Daily Images will only appear by <a href="#">Donating Now</a>
      </Alert>

      <Breadcrumb className = "bc">
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>

    <div className="Title">
    <h1>NASA's Photo of The Day</h1>
    </div>
    

    <div className ="ImageTitle">
    {nasaData &&<p>"{nasaData.title}"</p>} 
    </div>

    <div className = "Description">
    <h2>Nasa's Photo of The Day Description</h2>
    {nasaData &&<p>{nasaData.explanation}</p>}

    </div>

    <div className = "Image">

    {nasaData && <img src = {nasaData.url}></img>}
    </div>

    <div className = "Copyright">
    {nasaData &&<p>Photo by : {nasaData.copyright}</p>}
    </div>
    </div>
    
  );
}

export default App;
