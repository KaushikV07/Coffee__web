import React from 'react'
import "./Menu.css"

const MenuData =[
    {
        id:"1",
        pic:"./images/menu-1.png",
        h2:"Tasty And Healty",
        rupees:" $ 15.99",
        button:"Add To Cart"
    },
    {
        id:"2",
        pic:"./images/menu-2.png",
        h2:"Tasty And Healty",
        rupees:" $ 15.99",
        button:"Add To Cart"
    },
    {
        id:"3",
        pic:"./images/menu-3.png",
        h2:"Tasty And Healty",
        rupees:" $ 15.99",
        button:"Add To Cart"
    },
    {
        id:"4",
        pic:"./images/menu-4.png",
        h2:"Tasty And Healty",
        rupees:" $ 15.99",
        button:"Add To Cart"
    },
    {
        id:"5",
        pic:"./images/menu-5.png",
        h2:"Tasty And Healty",
        rupees:" $ 15.99",
        button:"Add To Cart"
    },
    {
        id:"6",
        pic:"./images/menu-6.png",
        h2:"Tasty And Healty",
        rupees:" $ 15.99",
        button:"Add To Cart"
    }
];

function Menu() {
  return (
   <div className="menu">
    <div className="container">
        <h1>OUR <span>MENU</span></h1>

        <div className="menu__row">
            {MenuData.map((index) => (
                <div className="menu__col">
                    <div className="box">
                        <img src={index.pic} alt="pic" />
                        <div className="menu__details">
                            <h2>{index.h2}</h2>
                            <h4>{index.rupees} <span>20.99</span></h4>
                            <button>{index.button}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
   </div>
  )
}

export default Menu