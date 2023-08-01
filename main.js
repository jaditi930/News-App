const API_KEY="3392dd216f9e4ec2ab74b42540932d56";
var current_news=[]
function removeModal(){
  document.getElementById("news_modal").style.display="none";
}
function getNewsDetail(event){
  let id=event.currentTarget.id;
  let news=current_news[id];
  console.log(news.description);
  document.getElementById("news_modal").innerHTML=`
  <div><i class="fa-solid fa-xmark" id="modal_cross" onclick="removeModal()"></i></div>
  <div id="modal_title">${news.title}</div>
  <img id="modal_image" src=${news.urlToImage}>
  <div id="modal_description">${news.description}</div>
  <div >Source: <u id="modal_link"><a href="${news.url}">${news.url}</a></u></div>
  `
  document.getElementById("news_modal").style.display="block";
}
function setNews(news_articles){
  current_news=news_articles;
  let news_container=document.getElementById("news")
  news_container.innerHTML=""
    for(let i=0;i<news_articles.length;i++)
    {  
        let news=news_articles[i];
        news.description=(news.description==null)?" ":news.description;
        console.log(typeof news.description)
        news_container.innerHTML+=`<div class="news_box">
        <div ><img class="news_image" src=${news.urlToImage} alt=""></div>
        <div class="body">
        <div class="title">${news.title}</div>
        <div class="read_more" id="${i}">Read More ...</div>
        <div class="date">${news.publishedAt.split('T')[0]}</div>
        </div>
        </div>` 
        document.querySelectorAll(".read_more")
    .forEach((e) => e.addEventListener("click", getNewsDetail));
    }

}
window.onload=getNews();
function getNews(type=0){
  let news_container=document.getElementById("news")
  news_container.innerHTML=`
  <div class="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
</div>
  `
  let query=document.getElementsByTagName("input")[0].value;
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
else{
  console.log(query)
  fetch(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`)
  .then((response) => response.json())
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
}
