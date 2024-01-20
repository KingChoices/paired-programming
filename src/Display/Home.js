import React from "react";
import Card from "../components/Card/Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import './pages.scss'

const Home = ({ data, championContent, handleChampionSelect }) => {
  const { champId } = useParams();

  useEffect(() => {
    if (champId) {
      console.log(champId);
    } else {
      console.log("No video id found.");
    }
  }, [champId]);

  return (
    <>
      <section className="ChampContainer">
        <div className="ChampContainer__Cards-champion">
          {data.splice(0, 166).map((items) => (
            <Card
              key={items.key}
              name={items.name}
              title={items.title}
              blurb={items.blurb}
              image={items.image.full}
              handleChampionSelect = {handleChampionSelect}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
