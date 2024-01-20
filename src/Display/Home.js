import React from "react";
import Card from "../components/Card/Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ChampDetails from "../components/ChampDetails/ChampDetails";

const Home = ({ data, championContent }) => {
  const { champId } = useParams();

  useEffect(() => {
    if (champId) {
      console.log(champId);
    } else {
      console.log("No video id found.");
    }
  }, [champId]);
  console.log(championContent, data);
  return (
    <>
      <section className="content__section">
        <div className='"content__container'>
          <ChampDetails name={championContent} />
        </div>
      </section>
      <section className="champ__section">
        <div className="champ__container">
          {data.splice(0, 166).map((items) => (
            <Card
              key={items.key}
              name={items.name}
              title={items.title}
              blurb={items.blurb}
              image={items.image.full}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
