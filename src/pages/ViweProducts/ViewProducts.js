import React, { useEffect, useState } from 'react'
import "./ViewProducts.css"
import { useParams } from 'react-router-dom'
import Data from "../../db/Data"

function ViewProducts() {
  const {id} = useParams();
  const[myData,setMyData] = useState({});
   
  useEffect(()=>{
   const newData =  Data.filter((item)=>{
      return item.id.toString() === id
    })
    setMyData(newData[0]);
  },[id])

  console.log(myData);

  return (
    <div>
      <img src={myData.img} alt='items' style={{
        width:"200px",
        height:"260px"
      }}/>
      <p>{myData.company}</p>
      <p>{myData.price}</p>
      <p>{myData.description}</p>

    </div>
  )
}

export default ViewProducts 