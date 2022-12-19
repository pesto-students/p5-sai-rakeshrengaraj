
import React,{useEffect, useState} from 'react';
import axios from 'axios';

import UrlContainer from './components/urlContainer/urlContainer';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';


function App() {

  const [url,setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getInputValue = (val) => {
    setUrl(val)
  }

  // Fetching data from shortener api using axios
  const fetchData = async ()=>{
    try{
      setLoading(true)
      setError(false)
      const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      setShortUrl(res.data.result.full_short_link)
    }
    catch(err){
      setError(true)
      setShortUrl('')
    }
    finally{
      setLoading(false)
    }
  }

  // Runs to fetchdata whenever input data is chnaged 
  useEffect(() => {
    if(url.length){
      fetchData()
    }
  },[url])

  return (
    <div className="app">
      <NavBar/>
      <UrlContainer getInputValue={getInputValue} shortUrl={shortUrl} loading={loading} error={error}/>
      <Footer/>
    </div>
  );
}

export default App;
