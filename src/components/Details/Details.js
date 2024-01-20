import React from "react";
import { Link } from "react-router-dom";
import "./Details.scss";

const Details = (props) => {
    const link = "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/";
    return (
        <Link className="card__container">
            <div className="card__container--title">
            <h2>{props.title}</h2>
            </div>
        <div className="card__container--grid">
            <div className="card__container--image">
            <img className="" src={link + props.image} alt="champion icon" />
            </div>
            <div className="card__container--info">
            <h3>{props.name}</h3>
            <p>{props.blurb}</p>
            </div>
        </div>
        </Link>
    );
};

export default Details;
