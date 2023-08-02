export default function Loader(props){
    return (
        <div className="loader" style={{display:props.display}}>
        <div className="loading-wave" >
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
      </div>
    )
}