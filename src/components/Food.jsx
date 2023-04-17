import React from "react"

const Food = ({ img, price, desc, category, title }) => {
  return (
    <article className="food">
      <img className="img" src={img}></img>
      <div className="info">
        <div>{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="text">{desc}</div>
    </article>
  )
}

export default Food
