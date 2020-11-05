import React, { useState,useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import Result from './components/Result'
import Try from './components/Try'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
    



export default function App() {
  const [search, setsearch] = useState('')
  const [query, setquery] = useState('batman')
  const [id, setid] = useState('')
  const [Movie, setMovie] = useState([])
  const [moviedetails, setmoviedetails] = useState([])



  useEffect(()=>{
    async function getMovie() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=fcc5ed45&s=${query}`)
    const data = await response.json()
    setMovie(data.Search)
  }
    getMovie();
    async function getMovieDetails() {
      const response = await fetch(`http://www.omdbapi.com/?apikey=fcc5ed45&i=${id}`)
      const data = await response.json()
      setmoviedetails(data)
    }
      getMovieDetails()
  },[query,id])




  const getsearch=(e)=>{
    setsearch(e.target.value)
    
  }


  const putquery=(e)=>{
    e.preventDefault()
    setquery(search)
  }
  return (
    
    <div>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <header>
              <h1>Movie Database</h1>
            </header>
            <main>
              <Search getsearch={getsearch} putquery={putquery}/>
              <Result Movie={Movie} setid={setid}/>
            </main>
          </Route>
          <Route path="/try">
            <Try data={moviedetails}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  )
}

