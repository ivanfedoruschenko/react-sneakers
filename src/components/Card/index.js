import React from "react";
import classes from "./Card.module.scss";

function Card({title,imageUrl,price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    onPlus({title,imageUrl,price})
    setIsAdded(!isAdded)
  }

  return(
    <div className={classes.card}>
      <img className={classes.card__like} src="/img/header__heart_inactive.svg" alt="Heart"/>
      <img className={classes.card__img_sneakers} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
          <img
            className={classes.card__button_img}
            src={isAdded ? '/img/content__card_button_selected.svg' : "/img/content__card_button.svg"}
            alt="plus"
            onClick={onClickPlus}/>
      </div>
    </div>
  )
}

export default Card