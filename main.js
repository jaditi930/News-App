const API_KEY="3392dd216f9e4ec2ab74b42540932d56";
function setNews(news_articles){
  let news_container=document.getElementById("news")
  news_container.innerHTML=""
    for(let i=0;i<news_articles.length;i++)
    {  
        let news=news_articles[i];
        news.description=(news.description==null)?" ":news.description;
        console.log(typeof news.description)
        news_container.innerHTML+=`<div class="news_box">
        <div class="news_image"><img src=${news.urlToImage} alt=""></div>
        <div class="body">
        <div class="title">${news.title}</div>
        <a class="read_more" href=${news.url}>Read More ...</a>
        <div class="date">${news.publishedAt.split('T')[0]}</div>
        </div>
        </div>`   
    }
}
window.onload=getNews();
function getNews(type=0,query=""){
  category_types=['general','business','technology','health','science','sports','entertainment']
  category=category_types[type]
    if(query=="")
    fetch(`https://newsapi.org/v2/top-headlines?\
    country=in&category=${category}&language=en&apiKey=${API_KEY}`).then((response) => response.json())
    .then((data) =>  {
      console.log(data);
      setNews(data.articles)

    if(data.status!='ok')
    {
      news_container.innerHTML+="Could fetch News. Please try again later."
      return;  
    }
  })

    
}