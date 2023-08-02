import { useEffect, useState } from "react";
import '../style.css'
import axios from 'axios'
function App() {
  const [currentNews,setNews]=useState([])

    async function getNews(type=0){
        const API_KEY="3392dd216f9e4ec2ab74b42540932d56"
         let category_types=['general','business','technology','health','science','sports','entertainment']
        let category=category_types[type]
        let response=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=en&apiKey=${API_KEY}`)
        setNews(response.data.articles)
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
            <li onClick="getNews(0)">News Point <i className="fa-regular fa-newspaper icons"></i></li>
            <li onClick="getNews(1)">Business <i className="fa-solid fa-briefcase icons"></i></li>
            <li onClick="getNews(2)">Technnology <i className="fa-solid fa-microchip icons"></i></li>
            <li onClick="getNews(5)">Sports <i className="fa-solid fa-baseball-bat-ball icons"></i></li>
            <li onClick="getNews(4)">Science <i className="fa-solid fa-flask icons"></i></li>
            <li onClick="getNews(3)">Health <i className="fa-solid fa-virus-covid icons"></i></li>
            <li onClick="getNews(6)">Entertainment <i className="fa-solid fa-face-laugh-wink icons"></i></li>
            <li id="search"><input type="text" placeholder="Search News"/>
                 <i id="query" className="fa-solid fa-magnifying-glass icons" onClick="getNews()"></i>
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
