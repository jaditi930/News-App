import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useEffect, useState } from "react";
import ShowAllNews from './ShowAllNews';
import axios from "axios";
import '../style.css'

function App() {
  const [currentNews,setNews]=useState([])
    const getNews = async (type=0) => {
        const API_KEY="3392dd216f9e4ec2ab74b42540932d56"
         let category_types=['general','business','technology','health','science','sports','entertainment']
        let category=category_types[type]
        const response = await axios
          .get(`https://newsapi.org/v2/top-headlines?\
          country=in&category=${category}&language=en&apiKey=${API_KEY}`)
          .catch((err) => {
            console.log("Err: ", err);
          });
          console.log(response.data)
          setNews([...currentNews,response.data])
          console.log(currentNews)
      };
      useEffect(() => {
        getNews();
      }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ShowAllNews currentNews={currentNews}/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
