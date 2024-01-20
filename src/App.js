import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/global.scss";
import Home from "./Display/Home.js";
//import data from "./data/test.json";

function App() {
  const [data, setData] = useState([]);
  const [championContent, setChampionContent] = useState(data[1]);
  const [selectedChampion, setSelectedChampion] = useState();

  const url =
    "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion.json";

  const dataArr = [];

  useEffect(() => {
    //fetch data from url
    if (dataArr.length) return;
    axios.get(url).then((res) => {
      //logging data in console
      //console.log(res.data.data);
      //re-arranging data
      const objects = res.data.data;
      for (const prop in objects) {
        //console.log(objects[prop]);
        dataArr.push(objects[prop]);
        //console.log(dataArr);
      }
      setData(dataArr);
      console.log(typeof dataArr);
      console.log(data.length);
      setChampionContent(data[1]);
      console.log(data.length > 0 ? data : "loading");
    });
    console.log(championContent);
  }, []);

  // if (championContent) {
  //   setChampionContent(data.splice(0, 166)[0]);
  // }
  console.log(championContent);
  //data.splice(0, 166);
  console.log(data[0]);

  //console.log(dataArr[0].image.full);
  //console.log(dataArr);

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/"
          element={<Home championContent={championContent} data={data} />}
        />
        <Route
          path="/:champId"
          element={<Home championContent={championContent} data={data} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
