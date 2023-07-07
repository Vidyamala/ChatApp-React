import "./Badges.css"
function Badges({ setSelectedPersons, selectedPersons }) {
    console.log(selectedPersons)
    const removePerson=(item)=>{
        console.log("hello")
      const newselected=  selectedPersons.filter((i)=>{
           return i!=item
        })
        setSelectedPersons(newselected)
    }
    return (
        <div className="badge-container">
            {selectedPersons.map((item) => {
                return <div className="badges">
                    <div>{item}</div>
                    <div className={"close"} onClick={()=>{removePerson(item)}}> <i class="bi bi-x"></i></div>
                </div>
            })}
        </div>
    )
}
export default Badges;






