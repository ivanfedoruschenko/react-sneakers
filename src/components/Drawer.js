import React from "react";

function Drawer({onClose, items=[]}) {
  return(
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex mb-30 justify-between">Корзина <img onClick={onClose} className="cu-p" src="/img/cart__btn-remove.svg" alt="close" /></h2>

        <div className="items">

          {items.map((obj) => (
            <div className="cart d-flex align-center mb-20">
              <img className="cart__img mr-20" src={`${obj.imageUrl}`} alt="Sneakers" />
              <div className="mr-20">
                <h3 className="cart__title mb-5">{obj.title}</h3>
                <p className="cart__price">{obj.price} руб.</p>
              </div>
              <img className="cart__btn-remove" src="/img/cart__btn-remove.svg" alt="remove" />
            </div>
          ))}

        </div>

        <div className="total">
          <ul className="total__list">
            <li>
              <span>Итого:</span>
              <div></div>
              <p className="total__result">21 498 руб.</p>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <p className="total__result">1074 руб.</p>
            </li>
          </ul>
          <button className="button-green">Оформить заказ <img src="/img/total__button_arrow.svg" alt="Arrow" /> </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer