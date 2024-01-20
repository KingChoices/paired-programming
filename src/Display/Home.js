import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ data, championContent }) => {
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
      <section className="content__section">
        <div className='"content__container'>
          <p>here</p>
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
