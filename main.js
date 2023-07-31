window.onload=getNews();

function getNews(){
    let news_container=document.getElementById("news")
    // let response=await fetch("https://newsapi.org/v2/top-headlines?\
    // country=india&category=business&apiKey=3392dd216f9e4ec2ab74b42540932d56")
    // let data=await response.json()
    fetch("https://newsapi.org/v2/top-headlines?\
    country=in&language=en&apiKey=3392dd216f9e4ec2ab74b42540932d56").then((response) => response.json())
    .then((data) =>  {
    console.log(data)


    if(data.status!='ok')
    {
      news_container.innerHTML+="Could fetch News. Please try again later."
      return;  
    }
    for(let i=0;i<data.articles.length;i++)
    {  
        let news=data.articles[i];
        news.description=(news.description==null)?" ":news.description;
        console.log(typeof news.description)
        news_container.innerHTML+=`<div class="news_box">
        <div class="news_image"><img src=${news.urlToImage}></div>
        <div class="body">
        <div class="title">${news.title}</div>
        <div class="description">${news.description}</div>
        <div class="remarks">
        ${news.publishedAt}
        </div>
        </div>
        </div>`   
    }
  })

    
}