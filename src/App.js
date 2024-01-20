import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Home from "./Display/Home.js";
//import data from "./data/test.json";

function App() {
  const [data, setData] = useState([]);
  const [championContent, setChampionContent] = useState();
  const [selectedChampion, setSelectedChampion] = useState();

  const url =
    "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion.json";

  const dataArr = [];

  useEffect(() => {
    //fetch data from url
    axios.get(url).then((res) => {
      //logging data in console
      //console.log(res.data.data);
      //re-arranging data
      const objects = res.data.data;
      for (const prop in objects) {
        //console.log(objects[prop]);
        dataArr.push(objects[prop]);
        setData(dataArr);
        //console.log(dataArr);
      }
    });
  }, []);

  console.log(data);
  //data.splice(0, 166);

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
