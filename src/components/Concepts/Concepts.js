import React from "react";
import './Concepts.css'
import Card from "../Card/Card";

const Concepts = (props) => {
  const classes = "concepts " + props.className

  return (
    <ul className={classes}>
      {props.concepts.map((content, index) => {
        return (
          <Card
            key={index}
            title={content.title}
            description={content.description}
            image={content.image}
          />
        )
      })}
    </ul>
  )
}

export default Concepts