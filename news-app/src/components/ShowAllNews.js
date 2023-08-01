import NewsCard from "./NewsCard";

export default function ShowAllNews(props){
    let news_articles=props.currentNews;
      let news_cards=news_articles.map((news)=>{
        <NewsCard news={news}/>
      })
    return(
        <div className="news">
            {news_cards}
        </div>
    );
}