import React , {useState} from 'react';


export default function BlogPost({blogid,title,body,image,author,handleClick}) {

  return (<>
    <div>
      <div className="blog-post" >
              <div className="blog-post-img">
                <img src={image} alt="" ></img>
              </div>
              <h2 className="blog-post-title">
                <a href="">{title}</a>
              </h2>
              
                <ul className="blog-post-author">
                  <li >{author.name}</li>
                  <li ><time dateTime="2020-01-01">{author.date}</time></li>
                </ul>

              <div className="blog-post-text">
                
                  {body.head}
                
                <div className="blog-post-link">
                  <button id={blogid}  onClick={handleClick} className="btn-transparent-blue text-sm float-right mr-0">
                    Read more
                  </button>
                </div>
              </div>
          </div>
    </div>
  </>
  )
}
