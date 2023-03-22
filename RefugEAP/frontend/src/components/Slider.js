import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { aims } from "../data";
import './Slider.css'

const Slider = () => {
  const [data, setData] = useState(aims);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="slider-section">
      <div className="slider-title">
        <h2>
          <span>/</span>Our Aims
        </h2>
      </div>
      <div className="slider-section-center">
        {data.map((aim, dataIndex) => {
          const { id, text } = aim;

          let position = "nextSlide";
          if (dataIndex === index) {
            position = "activeSlide";
          }
          if (
            dataIndex === index - 1 ||
            (index === 0 && dataIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <p className="title">{id}</p>
              <p className="text">{text}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
