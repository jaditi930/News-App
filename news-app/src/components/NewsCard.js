export default function NewsCard(props){
    let news=props.news;
    return (
        <div>
        <div className="news_box">
        <div ><img className="news_image" src={news.urlToImage} alt=""/></div>
        <div className="body">
        <div className="title">{news.title}</div>
        <div className="read_more">Read More ...</div>
        <div className="date">{news.publishedAt.split('T')[0]}</div>
        </div>
        </div>
        </div>
    )
}