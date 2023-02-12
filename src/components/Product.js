import React from 'react'
import "./Product.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ProductData = [
    {
        id:"1",
        icons_1:<ShoppingCartIcon />,
        icons_2:<FavoriteIcon />,
        icons_3:<VisibilityIcon />,
        pic:"./images/product-1.png",
        h3:"Fresh Coffee",
        rupees:"$15.99",
        star:<StarIcon />, 
        starout: <StarOutlineIcon />
    },
    {
        id:"2",
        icons_1:<ShoppingCartIcon />,
        icons_2:<FavoriteIcon />,
        icons_3:<VisibilityIcon />,
        pic:"./images/product-2.png",
        h3:"Fresh Coffee",
        rupees:"$15.99",
        star:<StarIcon />,
        starout: <StarOutlineIcon />
    },
    {
        id:"3",
        icons_1:<ShoppingCartIcon />,
        icons_2:<FavoriteIcon />,
        icons_3:<VisibilityIcon />,
        pic:"./images/product-3.png",
        h3:"Fresh Coffee",
        rupees:"$15.99",
        star:<StarIcon />,
        starout: <StarOutlineIcon />
    },
];

function Product() {
  return (
    <div className="product">
        <div className="container">
            <h1>OUR <span>PRODUCTS</span></h1>
                <div className="product__row">
                    {ProductData.map((index) => (
                        <div className="product__col">
                            <div className="product__box">
                                <div className="icons__product">
                                    {index.icons_1} 
                                    {index.icons_2}
                                    {index.icons_3}
                                </div>
                                <div className="product__pic">
                                    <img src={index.pic} alt="coffee" />
                                </div>
                                    <div className="product__details">
                                        <h3>{index.h3}</h3>
                                        <h4>{index.rupees} <span>29.99</span></h4>
                                    </div>

                                    <div className="stars">
                                        {index.star}
                                        {index.star}
                                        {index.star}
                                        {index.star}
                                        {index.starout}
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Product