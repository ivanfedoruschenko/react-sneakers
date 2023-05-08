import React from "react";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img className="mr-15 header__logo" src="/img/header__logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li onClick={props.onClickBasket} className="mr-30 cu-p">
          <img className="mr-10 header__img-basket" src="/img/header__basket.svg" alt="basket"/>
          <span>1205 руб.</span>
        </li>
        <li className="mr-30"><img src="/img/header__heart_inactive.svg" alt="heart" /></li>
        <li><img className="header__img-user" src="/img/header__user.svg" alt="user" /></li>
      </ul>
    </header>
  )
}

export default Header