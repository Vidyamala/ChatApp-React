import "./ModalUserRender.css"
import { userData } from "../../DummyData/userData";
function ModalUserRender() {
    return (
        <div className="User-render-container">
          {
            userData.map((data)=>{
                return(
                    <div className="User-render">
                    <div className="User-render-img">
                        <img src={data.pic}></img>
                    </div>
                    <div className="User-render-description">
                        <p className="User-render-description-name">{data.name}</p>
                        <p>{data.email}</p>
                    </div>
                </div>
                )
            })
          }
        </div>
    )
}
export default ModalUserRender;







