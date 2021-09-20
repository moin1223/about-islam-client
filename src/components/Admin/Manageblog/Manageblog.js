import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Manageblog = () => {
    const [blogs,setBlogs] = useState([])
    const history = useHistory();


    useEffect(() => {
        fetch('https://powerful-lowlands-88671.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data =>{
                
               setBlogs(data)
               
            })
    }, [])



    const handleDelete = (_id) => {
       
        fetch(`https://powerful-lowlands-88671.herokuapp.com/deleteblog/${_id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                
            }

            alert('blog is successfully deleted');
            history.replace('/');
        });
    }



    return (

<div className="col-md-8 col-sm-8 col-6 container">
<table className="table">
  <thead>
    <tr>
   
      <th scope="col">blog</th>
      <th scope="col">Description</th>
      <th></th>
    </tr>
    </thead>

    <tbody >
    {blogs.map((blog) => (
    <tr  key={blog._id}>
  
      <td>{blog.title}</td>
      <td>{blog.description}</td>
      
      <td>
      <button className="btn btn-danger" variant="contained" onClick={() =>  handleDelete(blog._id)}>Delete</button>
      </td>
    </tr>
         ))}
    </tbody>
    </table>
    </div>
    );
};

export default Manageblog;