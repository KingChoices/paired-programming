import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
//import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  // const url="https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion.json";
  const url = "http://localhost:2024/champions";
  const [ChampionContent,setChampionContent]=useState(null);
  const [selectedChampion,setSelectedChampion]=useState(null);
  let arr=[];
  useEffect (() => {
    axios.get(url).then((res)=> {
      console.log(res.data.data);

      const obj = res.data.data;
      for ( const prop in obj){
        console.log(obj[prop]);
        arr.push(obj[prop]);
      }
      console.log(arr[0].image.full);




      // arr= res.data.forEach(element => {
      //   console.log(element);
      //   arr.push(element);
      // });
      // console.log(arr);

      setChampionContent(res);
      //setSelectedChampion(res.data.data[0].id);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);
  return (
<h1> league of legends</h1>


  );
}

export default App;
