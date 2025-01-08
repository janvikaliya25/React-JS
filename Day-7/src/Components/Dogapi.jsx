
import React, { useEffect, useState } from "react";
import "./Dogapi.css"

function Dogapi() {
  const [dogImage, setDogImage] = useState("");

  const fetchDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDogImage(res.message); 
      })
      .catch((err) => {
        console.log("Error fetching dog image:", err);
      });
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div id="main" class="w-50">
      <h1 class="text-center">Dog API</h1>
      <div id="childe">
        {dogImage ? 
          <img src={dogImage} alt="" class=""/>
        : 
          <p class="text-center text-danger fs-1 mt-5">Loading...</p>
        }
      </div>
      <button onClick={fetchDogImage}>
        Click
      </button>
    </div>
  );
}

export default Dogapi;
