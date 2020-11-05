import React from 'react'
import './box.css'
import {
    Link
  } from "react-router-dom";

export default function Box({image,title,setid,id}) {
    
    return (
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/try">
            <div className='box'  onClick={()=>{
                setid(id);
            }}>
            <div className='image'>
            <img src={image} alt="No JPEGs to display Oloun, NO VEX"/>
            </div>
            <div>
                {title}
            </div>
        </div>
        </Link>
        
    )
}
