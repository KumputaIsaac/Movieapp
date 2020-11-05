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
            <div  className='pad'>
                <h3>Title: {data.Title}</h3>
                <p className='bold'>Actors: {data.Actors}</p>
                <p className='bold'>Language : {data.Language}</p>
                <p className='bold'>Year : {data.Year}</p>
                <p className='bold'>ImdbRating : {data.imdbRating}</p>
                {/* <div>
                    {data.Ratings.map((x,i)=>{
                        return(
                        // <p>{x.Source} : {x.value}</p>
                            <p>x</p>
                        )
                    })}
                </div> */}
                
                <p className='bold'>Type :       {data.Type}</p>
                <p className='bold'>Genre :      {data.Genre}</p>
                <p className='bold'>Time :       {data.Runtime}</p>
                <p className='bold'>Released :   {data.Released}</p>
                <div className='button'>
                    <Link to="/">
                        <button type="">Back</button>
                    </Link>
                </div>
            </div>
            
            
        </div>
        
    )
}
