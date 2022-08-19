import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Products = () => {
  return (
    <div>
        <input type="text" placeholder='Search Products...'/><br/>
        <Link to="newproducts">NewProduct</Link><span> </span>
        <Link to="featuredproducts">FeaturedProduct</Link><br/><br/>
        <Link to="/product/newproducts">NewProduct</Link><span> </span>
        <Link to="/product/featuredproducts">FeaturedProduct</Link>
        <Outlet/>
    </div>
  )
}

export default Products