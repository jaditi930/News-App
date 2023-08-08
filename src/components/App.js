import { useEffect, useState } from "react";
import '../style.css'
import axios from 'axios'
import NavBar from "./NavBar";
import Loader from "./Loader";
import Modal from "./Modal";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [currentNews,setNews]=useState([])
  const [loader,setLoader]=useState("none");
  const [modalNews,setModalNews]=useState([])
  const [currentPage,setPage]=useState(1);
  const [currentCategory,setCategory]=useState(0);
  const [totalLength,setTotalLength]=useState(0)

  function showModal(){
  let news_modal=document.getElementsByClassName("news_modal")[0];
  news_modal.classList.add("open_modal")
  }

  function removeModal(){
    document.getElementsByClassName("news_modal")[0].classList.remove("open_modal");
  }
    async function getNews(type=0,currentPage=1){
      if(type!==currentCategory)
      {
        setPage(1);
        setNews([])
      }
      console.log(currentPage)
      setLoader("flex")
        const API_KEY="2c519025f30f4bcfb751d542b79d9ebf"
        let query=document.getElementsByTagName("input")[0].value;
        if (query===""){
         let category_types=['general','business','technology','health','science','sports','entertainment']
        let category=category_types[type]
        let response=await axios.post("https://apiinvoker.pythonanywhere.com/api/",{
          "api":`https://newsapi.org/v2/top-headlines?country=in&category=${category}&language=en&apiKey=${API_KEY}&page=${currentPage}`
        })
        console.log(response)
        if(type===currentCategory)
        {
          setNews([...currentNews,...response.data.articles])
        console.log(response.data.articles)
        }
        else{
          setNews([...response.data.articles])
          setCategory(type);
          setTotalLength(response.data.totalResults)

        }
        // console.log(response.data.totalResults)
        // console.log(response.data.articles.length)
        // console.log(currentNews.length)
        }
        else{
          console.log(query)
          let response=await axios.post("https://apiinvoker.pythonanywhere.com/api/",{
            'api':`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}&page=${currentPage}`
          })
          setNews(response.data.articles)
          document.getElementsByTagName("input")[0].value=""
          if(currentPage===1)
          {
            setTotalLength(response.data.totalResults)
          }
        }
        setLoader("none");
      };
      function fetchMoreNews(category){
        setPage(currentPage+1);
        console.log(currentPage)
        getNews(category,currentPage+1);
      }
      useEffect(() => {
        getNews();
      }, []);
      console.log(currentNews)
  return (
    <>
    <NavBar getNews={getNews}/>
    <Loader display={loader} />
    <Modal news={modalNews} removeModal={removeModal}/>
      <div id="news">
      <InfiniteScroll
          style={{minWidth:"100vw",textAlign:"center"}}
          dataLength={currentNews.length}
          next={()=>fetchMoreNews(currentCategory)}
          hasMore={currentNews.length!==totalLength}
          loader={<Loader display={loader} />}
          
        >
      { currentNews.map((news,index)=>{
        return <div className="news_box" key={index} style={{display:"inline-block"}}>
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
    }
      </InfiniteScroll>
      </div>
      </>
  );
}

export default App;
