
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const  Sidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://powerful-lowlands-88671.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    },[user.email])
    

   
    return (

        <>

        {
            isAdmin &&
            <div className="m-5 p-5">
          
            <Link className="text-decoration-none text-dark m-2" to="/manageBlog"><h3>ManageBlog</h3></Link>
            <Link  className="text-decoration-none text-dark m-2" to='/addblog'><h3>AddBlog</h3></Link>
        
        </div>
    
        }
        {
            !isAdmin &&

        <p className="text-center text-Success">please login as a Admin</p>

        }
       
      
        </>




    );
};

export default Sidebar;