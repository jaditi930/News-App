import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase,faMicrochip,faBaseballBatBall,faFlask,faVirusCovid,faFaceLaughWink, faSearch } from "@fortawesome/free-solid-svg-icons";
import '../style.css'
import axios from 'axios'
function App() {
  const [currentNews,setNews]=useState([])

    async function getNews(type=0){
        const API_KEY="3392dd216f9e4ec2ab74b42540932d56"
        let query=document.getElementsByTagName("input")[0].value;
        if (query==""){
         let category_types=['general','business','technology','health','science','sports','entertainment']
        let category=category_types[type]
        let response=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=en&apiKey=${API_KEY}`)
        setNews(response.data.articles)
        }
        else{
          console.log(query)
          let response=await axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`)
          setNews(response.data.articles)
        }
      };
      useEffect(() => {
        getNews();
      }, []);
      let all_news=currentNews.map((news,index)=>{
        return <div className="news_box" key={index}>
        <div ><img className="news_image" src={news.urlToImage} alt=""/></div>
        <div className="body">
        <div className="title">{news.title}</div>
        <div className="read_more">Read More ...</div>
        <div className="date">{news.publishedAt.split('T')[0]}</div>
        </div>
        </div>
      })
  return (
    <>
    <nav>
        <ul>
            <li onClick={()=>{getNews(0)}}>News Point <FontAwesomeIcon icon={faNewspaper}/></li>
            <li onClick={()=>{getNews(1)}}>Business <FontAwesomeIcon icon={faBriefcase} /></li>
            <li onClick={()=>{getNews(2)}}>Technnology <FontAwesomeIcon icon={faMicrochip}/></li>
            <li onClick={()=>{getNews(5)}}>Sports <FontAwesomeIcon icon={faBaseballBatBall}/></li>
            <li onClick={()=>{getNews(4)}}>Science <FontAwesomeIcon icon={faFlask}/></li>
            <li onClick={()=>{getNews(3)}}>Health <FontAwesomeIcon icon={faVirusCovid}/></li>
            <li onClick={()=>{getNews(6)}}>Entertainment <FontAwesomeIcon icon={faFaceLaughWink}/></li>
            <li id="search"><input type="text" placeholder="Search News"/>
                 <FontAwesomeIcon id="query" icon={faSearch}  onClick={getNews}/>
            </li>
        </ul>
    </nav>
      <div className="news">
        {all_news}
      </div>
      </>
  );
}

export default App;
