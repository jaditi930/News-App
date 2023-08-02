import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase,faMicrochip,faBaseballBatBall,faFlask,faVirusCovid,faFaceLaughWink, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props){
    return (<ul>
    <li onClick={()=>{props.getNews(0)}}>News Point <FontAwesomeIcon icon={faNewspaper}/></li>
    <li onClick={()=>{props.getNews(1)}}>Business <FontAwesomeIcon icon={faBriefcase} /></li>
    <li onClick={()=>{props.getNews(2)}}>Technnology <FontAwesomeIcon icon={faMicrochip}/></li>
    <li onClick={()=>{props.getNews(5)}}>Sports <FontAwesomeIcon icon={faBaseballBatBall}/></li>
    <li onClick={()=>{props.getNews(4)}}>Science <FontAwesomeIcon icon={faFlask}/></li>
    <li onClick={()=>{props.getNews(3)}}>Health <FontAwesomeIcon icon={faVirusCovid}/></li>
    <li onClick={()=>{props.getNews(6)}}>Entertainment <FontAwesomeIcon icon={faFaceLaughWink}/></li>
    <li id="search"><input type="text" placeholder="Search News"/>
         <FontAwesomeIcon id="query" icon={faSearch}  onClick={props.getNews}/>
    </li>
</ul>);
}