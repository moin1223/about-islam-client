import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const DetailBlog = () => {
    const [blog,setBlog] = useState()
    const {id} = useParams ();

    useEffect(() => {
        fetch(`https://powerful-lowlands-88671.herokuapp.com/blog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])
    
  

    return (
        <> 
   
        <div className="card mb-3">
            
  <img src={blog?.imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{blog?.title}</h5>
    <p className="card-text">{blog?.description}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
         
         </>
    );
};

export default DetailBlog;