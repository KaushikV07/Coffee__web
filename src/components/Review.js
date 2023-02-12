import React from 'react'
import "./Review.css"
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const ReviewData =[
    {
        id:"1",
        pic:"./images/quote-img.png",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptatem quia nulla vitae harum corporis fugit excepturi quos illo molestiae, eligendi animi nihil perferendis ratione placeat assumenda! Aliquam, mollitia enim.",
        face:"./images/pic-1.png",
        h2:"SAM",
        star:<StarIcon />,
        star_out:<StarOutlineIcon />
    },
    {
        id:"2",
        pic:"./images/quote-img.png",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptatem quia nulla vitae harum corporis fugit excepturi quos illo molestiae, eligendi animi nihil perferendis ratione placeat assumenda! Aliquam, mollitia enim.",
        face:"./images/pic-2.png",
        h2:"NAGA",
        star:<StarIcon />,
        star_out:<StarOutlineIcon />
    },
    {
        id:"3",
        pic:"./images/quote-img.png",
        p:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptatem quia nulla vitae harum corporis fugit excepturi quos illo molestiae, eligendi animi nihil perferendis ratione placeat assumenda! Aliquam, mollitia enim.",
        face:"./images/pic-3.png",
        h2:"KAUSHIK V",
        star:<StarIcon />,
        star_out:<StarOutlineIcon />
    }
]

function Review() {
  return (
    <div className="review">
        <div className="container">
            <h1>CUSTOMER'S <span>REVIEW</span></h1>
            <div className="review__row">
                {ReviewData.map((index) => (
                    <div className="review__col">
                        <div className="review__box">
                            <img src={index.pic} alt="quote" className='quote__img' />
                            <p>{index.p}</p>
                            <div className="review__face">
                                <img src={index.face} alt="face" />
                            </div>
                            <div className="review__name">
                                <h2>{index.h2}</h2>
                            </div>
                            <div className="review__stars">
                                {index.star}
                                {index.star}
                                {index.star}
                                {index.star}
                                {index.star_out}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Review