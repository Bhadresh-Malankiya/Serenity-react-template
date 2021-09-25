import React ,{useState} from 'react'
import {blogs} from '../data/blogs'
import BlogPost from './BlogPost'
import BlogPostPopup from './BlogPostPopup'
import PageButton from './PageButton'

export default function BlogList() { 
  

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelectorAll(".popup")[e.target.id-1].classList.remove("hidden")
  }

  const blogComponent = blogs.map((blog,i) => {
    
    return (
      <>
      <BlogPostPopup blogid={blogs[i].blogid} title={blogs[i].title} body={blogs[i].body} image={require("../images/blog" + blogs[i].blogid +".jpg").default} author={blogs[i].author} display="popup hidden"/>
      <BlogPost blogid={blogs[i].blogid} title={blogs[i].title} body={blogs[i].body} image={require("../images/blog" + blogs[i].blogid +".jpg").default} author={blogs[i].author} handleClick={handleClick}/>
      </>
    )
  })
  
  return (
    <div>
      <section id="blog" className="container flex flex-wrap py-1">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 m-2 content-between">
        {blogComponent}
        </div>
      </section>
      <PageButton />
    </div>
  );
}
