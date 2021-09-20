import React from 'react';
import { Link } from 'react-router-dom';


const Blog = (props) => {
  
  const {_id,title,imageURL} = props.blog

  return (
   <>
  <div className="container">
  <div className="card mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={imageURL} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link className="text-decoration-none mt-1 mb-5" to={`/blogDetail/${_id}`}>
        <button type="button" class="btn btn-danger e mt-1 mb-5">See more</button>
        </Link>
      
        <p className="card-text"><small className="text-muted mt-5">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

  </div>
   
   </>
  );
};

export default Blog;