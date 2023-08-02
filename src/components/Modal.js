import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal(props){

    let news=props.news;
    return ( 
    <div className="news_modal">
    <div id="modal_top">
  <FontAwesomeIcon icon={faXmark} id="modal_cross" size='xl' onClick={()=>{props.removeModal()}}/>
  </div>
  <div id="modal_title">{news.title}</div>
  <img id="modal_image" src={news.urlToImage}/>
  <div id="modal_description">{news.description}</div>
  <div id="modal_source">Source: <u id="modal_link"><a href={news.url}>{news.url}</a></u></div>
  </div>
  );
}