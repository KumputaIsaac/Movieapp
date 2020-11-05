import React from 'react'

export default function Search({getsearch,putquery}) {
    return (
        <div className='searchbox-wrapper'>
            <form onSubmit={putquery}>
                <input type='text' onChange={getsearch}  placeholder='search for a movie' className='searchbox' />
            </form>
            
        </div>
    )
}
