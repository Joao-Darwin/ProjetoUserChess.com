import React from 'react'

import Form from '../../components/form/Form'
import SearchHistory from '../../components/searchHistory/SearchHistory'
import "./Home.css"

const Home = () => {
  return (
    <div className='containerHome'>
      <h1>Find User Chess.com</h1>
      <Form />
      <SearchHistory />
    </div>
  )
}

export default Home