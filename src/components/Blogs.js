import React from 'react'
import "./Blogs.css"

const BlogsData = [
    {
        id:"1",
        pic:"./images/blog-1.jpeg",
        h2:"Tasty And Refreshing Coffee",
        h3:"By Admin / 21st May, 2021",
        p:"Lorem ipsum dolor sit amet adipisicing elit. Cupiditate eaque quos sit autem medit datga efmdngd framework.",
        button:"Read More"
    },
    {
        id:"2",
        pic:"./images/blog-2.jpeg",
        h2:"Tasty And Refreshing Coffee",
        h3:"By Admin / 21st May, 2022",
        p:"Lorem ipsum dolor sit amet adipisicing elit. Cupiditate eaque quos sit autem medit datga efmdngd framework.",
        button:"Read More"
    },
    {
        id:"3",
        pic:"./images/blog-3.jpeg",
        h2:"Tasty And Refreshing Coffee",
        h3:"By Admin / 21st May, 2023",
        p:"Lorem ipsum dolor sit amet adipisicing elit. Cupiditate eaque quos sit autem medit datga efmdngd framework.",
        button:"Read More"
    },
]

function Blogs() {
  return (
    <div className="blogs">
        <div className="container">
            <h1>OUR <span>BLOGS</span></h1>
            <div className="blogs__row">
                {BlogsData.map((index) => (
                    <div className="blogs__col">
                        <div className="Blogs__box">
                            <img src={index.pic} alt="pic" className='coffee__pic' />
                            <h2>{index.h2}</h2>
                            <h3>{index.h3}</h3>
                            <p>{index.p}</p>
                            <button>{index.button}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Blogs