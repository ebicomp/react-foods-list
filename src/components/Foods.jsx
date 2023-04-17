import React from "react"
import Food from "./Food"

const Foods = ({ foods }) => {
  return (
    <section className="foods">
      <h4 className="food-header">
        Our Menu
        <div className="title-underline"></div>
      </h4>
      <div className="button-container">
        <button>all</button>
        <button>breakfast</button>
        <button>lunch</button>
        <button>shake</button>
      </div>
      <div className="food-container">
        {foods.map(f => {
          return <Food key={f.id} {...f} />
        })}
      </div>
    </section>
  )
}

export default Foods
