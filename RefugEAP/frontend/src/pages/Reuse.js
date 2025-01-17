import React, { useState, useEffect } from "react";
import "./Reuse.css";
import Hero from "../components/Hero";
import moment from "moment";
import axios from 'axios'

const url = "http://127.0.0.1:8000/api/donations";

const Reuse = () => {
  let [items, setitems] = useState([]);

  useEffect(() => {
    getitems();
  }, []);

  let getitems = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/donations");
    let formattedResponse = await response.json();
    console.log("DATA:", formattedResponse.data);
    setitems(formattedResponse);
  };

  const reuseHero = {
    title: "Reuse Bank",
    subtitle:
      "This is the resuse bank for refugee background students...",
    btn: "START",
    url: '/',
    style: 'reuse-hero',
  };
  
  return (
    <>
      <Hero props={reuseHero} img=""/>
      <div className="space">
      </div>
      <div className="container">
        <div className="items ">
          <div className="items-header">
            <h2 className="items-title">&#9782; Items</h2>
            <p className="items-count">{items.length}</p>
          </div>

          <div className="items-list">
            {items.map((item, i) => {
              return (
                <div className="items-list div" key={i}>
                  <h3>{item.title}</h3>
                  <h6>Description</h6>
                  <p>{item.description}</p>
                  <h6>Uploaded: </h6>
                  <p>{moment(item.Created).calendar()}</p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Reuse;