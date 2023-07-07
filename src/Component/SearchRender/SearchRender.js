import "./SearchRender.css"
import { userData } from "../../DummyData/userData";
function SearchRender() {
    return (
        <div className="Search-render-container">
          {
            userData.map((data)=>{
                return(
                    <div className="Search-render">
                    <div className="Search-render-img">
                        <img src={data.pic}></img>
                    </div>
                    <div className="search-render-content">
                        <p >{data.name}</p>
                        <p>{data.email}</p>
                    </div>
                </div>
                )
            })
          }
        </div>
    )
}
export default SearchRender;