import { useEffect, useState } from "react";
import '../style.css'
import axios from 'axios'
import NavBar from "./NavBar";
import Loader from "./Loader";
import Modal from "./Modal";
function App() {
  const [currentNews,setNews]=useState([])
  const [loader,setLoader]=useState("none");
  const [modalNews,setModalNews]=useState([])

  function showModal(){
  let news_modal=document.getElementsByClassName("news_modal")[0];
  news_modal.classList.add("open_modal")
  }

  function removeModal(){
    document.getElementsByClassName("news_modal")[0].classList.remove("open_modal");
  }
    async function getNews(type=0){
      setNews([])
      setLoader("flex")
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
          document.getElementsByTagName("input")[0].value=""
        }
        setLoader("none")

      };
      useEffect(() => {
        getNews();
      }, []);
      let all_news=currentNews.map((news,index)=>{
        return <div className="news_box" key={index}>
        <div ><img className="news_image" src={news.urlToImage} alt=""/></div>
        <div className="body">
        <div className="title">{news.title}</div>
        <div className="read_more" onClick={()=>{
          setModalNews(news);
          showModal();
          }}>Read More ...</div>
        <div className="date">{news.publishedAt.split('T')[0]}</div>
        </div>
        </div>
      })
  return (
    <>
    <NavBar getNews={getNews}/>
    <Loader display={loader} />
    <Modal news={modalNews} removeModal={removeModal}/>
      <div id="news">
        {all_news}
      </div>
      </>
  );
}

export default App;
