import React from "react";
import "./index.scss"
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  const [basketOpened, setBasketOpened] = React.useState(false)
  const [basketItems, setBasketItems] = React.useState([])
  const [items,setItems] = React.useState([])

  React.useEffect(() => {
    fetch("https://642e14e18ca0fe3352c87196.mockapi.io/items")
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    setBasketItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">
      {basketOpened && <Drawer items={basketItems} onClose={() => {setBasketOpened(false)}}/>}
      <Header onClickBasket={()=>{setBasketOpened(true)}}/>
      <div className="p-40 content">

        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="content__search d-flex">
            <img src="/img/content__search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            onPlus={(obj) => {
              onAddToCart(obj)
            }}/>
          ))}
        </div>
      </div>
    </div>
);
}

export default App;
