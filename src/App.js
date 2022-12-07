import Cards from './Cards';
import './App.css';
import Nav from './Nav';
import Item from './Item';
import Cart from './Cart'
import { useState } from 'react';
import('../node_modules/bootstrap/dist/css/bootstrap.min.css')

function App() {
  let product = [
    {
      id:1,
      FLAVIOURS: "MITE",
      img: "https://www.listchallenges.com/f/items/17dcc38c-9352-474b-b489-0205c59076b1.jpg",
      price:120
    }, {
      id:2,
      FLAVIOURS: "Vanilla",
      img: "https://www.listchallenges.com/f/items/9fdec8ce-03a4-4329-9d03-ad4e4572bc1f.jpg",
      price:120
    }, {
      id:3,
      FLAVIOURS: "Avocado",
      img: "https://www.listchallenges.com/f/items/30fea802-a932-4300-a45b-1f14d2aafbb0.jpg",
      price:157
     }, {
      id:4,
      FLAVIOURS: "Mango",
      img: "https://www.listchallenges.com/f/items/7e8d2f2d-a09b-49a3-b5a6-422477ee075a.jpg",
      price:220
    }, {
      id:5,
      FLAVIOURS: "Cookies Cream",
      img: "https://www.listchallenges.com/f/items/65d986f1-953a-40a4-8be9-663086e31f96.jpg",
      price:154
    }, {
      id:6,
      FLAVIOURS: "Chocalate",
      img: "https://www.listchallenges.com/f/items/de726d9a-41bf-44eb-a79d-b71c359d314f.jpg",
      price:100
    }, {
      id:7,
      FLAVIOURS: "Strawberry",
      img: "https://www.listchallenges.com/f/items/9e6368d3-cf23-4bc0-9192-73f112378c1d.jpg",
      price:222
    },
    {
      id:8,
      FLAVIOURS: "Cotto candy",
      img: "https://www.listchallenges.com/f/items/800d2f3f-3e1e-4545-a1dc-e7a12c068725.jpg",
      price: "241"
    },
  ];
  const [cartList,setCart]=useState ([]);
  const [totel ,setTotel]=useState (0);


  let addToCart=(product)=>{
    setCart([...cartList,product])
    setTotel(totel+product.price)
   
  };
let removeCart=(product) => {
  let itemIndex=cartList.findIndex(item=> product.id === item.id)
  console.log(product )
  cartList.splice(itemIndex, 1)
  setCart([...cartList])
  setTotel(totel-product.price)
  

} ;
  

  return <div>
    <Nav />
    <Cards />

    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            {product.map((product) => {
              return <Item product={product} addToCart={addToCart} />
            }

            )}

          </div>
        </div>

        <div className="col-lg-3">
          <div className="row">
            <h3>Cart</h3>
            <Cart cartList={cartList} removeCart={removeCart}/>
            
            <h3>TOTAL:{totel}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>


}

export default App;
