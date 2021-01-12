
var name = "Nazmul";
var dice = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
var toDay = new Date().getDate();
var monthName=new Date().getMonth();
var year = 2021;

var Card = () => {
  return <div className="card">
            <h3 className="cardTitle">This is Title</h3>
            <p className="cardDec">{dice}</p>
            <p className="cardDate">Date: {toDay +"/" + monthName +"/"+ year}</p>
        </div>
}

export default Card