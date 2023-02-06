import React, { useState, useEffect } from "react";

function Event() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/ReactEventView/")
      .then((response) => response.json())
      .then((response) => setData(response.data));
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          Name :{item.name}
          Date :{item.date}
          Time :{item.time}
          Link :{item.more}
        </li>
      ))}
    </ul>
  );
}

export default Event;
