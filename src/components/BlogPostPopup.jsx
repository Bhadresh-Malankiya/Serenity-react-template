import React,{useEffect} from 'react'

export default function BlogPostPopup({blogid,title,body,image,author}) {
  function closeEvent(e){
    e.preventDefault();
    document.querySelectorAll(".popup")[blogid-1].classList.add("hidden")
  }  
  useEffect(() => {
    document.querySelector("#body"+blogid).innerHTML = body.full;
  },[])
  
  return (
  <div id={blogid} className="popup hidden" >
  <div  className="blog-post-full" data-aos="fade-up">
    <article className="grid-rows-2">
      <div>
      <button id="blog1button" onClick={closeEvent} className="blog-btn">
        &times;
      </button>
      </div>
      <div className="sm:grid sm:grid-cols-5 mt-4 ">
        <div></div>
          <div className="sm:gap-4 sm:col-span-3">
            <img className="sm:blog-post-img" src={image} alt="" />
            <h2 className="blog-post-title">
          <a href="">{title}</a>
            </h2>
            <div className="blog-post-author">
          <ul>
            <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="file:///C:/Users/Hp/AppData/Local/Temp/Rar$EXa9092.7934/Serenity/blog-single.html">{author.name}</a></li>
            <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="file:///C:/Users/Hp/AppData/Local/Temp/Rar$EXa9092.7934/Serenity/blog-single.html"><time datetime="2020-01-01">{author.date}</time></a></li>
          </ul>
            </div>
            <div id={"body"+blogid} className="blog-post-text">
            </div>
          </div>
        <div></div>
      </div>      
    </article>
  </div>
  </div>
  )
}
