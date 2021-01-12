var toDay = new Date().getDate();
var monthName=new Date().getMonth();
var year = 2021;


var Card = (props) => {
  var{title,decs} = props
  return <div className="card">
            <h3 className="cardTitle">{title}</h3>
            <p className="cardDec">{decs}</p>
            <p className="cardDate">Date: {toDay +"/" + (monthName+1) +"/"+ year}</p>
        </div>
}

export default Card