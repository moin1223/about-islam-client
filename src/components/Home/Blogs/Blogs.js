import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../../App';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs,setBlogs] = useContext(UserContext);
   
    useEffect(()=>{
        fetch('https://powerful-lowlands-88671.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[setBlogs])
    return (
        <div>  
            <h1 className="text-center text-dabger my-3 py-3">Recent Blogs</h1>

         
               {
                   blogs.map(blog=><Blog blog={blog} key={blog._id}></Blog>)
              
               }
          

        </div>
    );
};

export default Blogs;