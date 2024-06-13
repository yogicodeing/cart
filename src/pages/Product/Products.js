import React, { useState } from 'react'
import "./Products.css"

import Data from '../../db/Data';
import { Link} from 'react-router-dom';

function Products() {
  const[data] = useState(Data);
  return (
    <>
    <h1 className='newproducts'>Our Products</h1>
    <div className='productContainer'>
        {
          data.map((item)=>{
            return(
              <Link to={`viewproduct/${item.id}`} className='itemContainer' key={item.id} >
                 <img src={item.img} alt="items-imagsss" />
                 <div className="nams">
                   <p className="name">{item.company}</p>
                   <p className="name">{item.price}</p>
                 </div>
              </Link>
            )
          })
        }
    </div>
    </>
  )
}

export default Products