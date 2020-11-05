import React from 'react'
import Box from './Box'

export default function Result({Movie,setid}) {
    return (
        <div>
            <div className='flex'>
                {Movie.map((result,i)=>{
                    return(<Box title={result.Title} image={result.Poster} id={result.imdbID} setid={setid}/>) 
                })}
            </div>
            
        </div>
    )
}
