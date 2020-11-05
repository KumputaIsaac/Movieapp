import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Try({data}) {
    return (
        <div className='try'>
            {console.log(data)}
            <div className='picture'>
                <img src={data.Poster} alt=""/>
            </div>
            <h3>Title: {data.Title}</h3>
            <p>Actors: {data.Actors}</p>
            <p>Language : {data.Language}</p>
            <p>Year : {data.Year}</p>
            <p>ImbdRating : {data.imbdRating}</p>
            {/* <div>
                {data.Ratings.map((x,i)=>{
                    return(
                    // <p>{x.Source} : {x.value}</p>
                        <p>x</p>
                    )
                })}
            </div> */}
            
            <p>Type : {data.Type}</p>
            <p>Genre : {data.Genre}</p>
            <p>Time : {data.Runtime}</p>
            <p>Released : {data.Released}</p>
            <Link to="/">
                <button type="">Back</button>
            </Link>
        </div>
        
    )
}
