import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

function Question(props) {
     //states of routing 
     const navigate = useNavigate();
     const [index, setIndex] = React.useState(0);
     const location = useLocation();


     //to know length of array
     let lenghtOfQuestion;
  const array1 = props.testData.tests.map((prev) => {
    if (prev._id === location.state) {
      lenghtOfQuestion = prev.questions.length;
    }
  });

    //states to save answers
let anwersArray=[Array(lenghtOfQuestion).fill(null)]
console.log(anwersArray)
const [answers,setAnswer]=React.useState([])





   

 

  //use to render Question
  function renderQuestion() {
    let exactArray;
    const array = props.testData.tests.map((prev) => {
      if (prev._id === location.state) {
        exactArray = prev.questions;
      }

      return "dnneicnei";
    });

    console.log(exactArray);
    console.log("bhfjhb")

    return exactArray[index].type
      ? checkButton(exactArray)
      : radioButton(exactArray);
  }

//buttons on page

  const prevoiusButton = () => {
    return <button  onClick={() => setIndex((prev) => prev - 1)} className="btn btn-primary">Previous</button>;
  };
  const nextButton = () => {
    return (
      <button
        href="test.html"
        className="btn btn-success"
        onClick={() => setIndex((prev) => prev + 1)}
      >
        Next
      </button>
    );
  };
  const finishButton = () => {
    return (
      <button onClick={() => {
        navigate(`/finish`, { state: 2 });
      }} className="pull-right btn btn-danger">
        Finish
      </button>
    );
  };
  console.log(anwersArray)

  //input radio buttons
  const checkButton = (exactArray) => {

 
    return (
      <form>
        <label>{exactArray[index].questionText}</label>
        {exactArray[index].options.map((prev) => {
          return (
            <div className="radio">
              <label>
                <input onChange={(event)=>{ }} type="checkbox" name={prev} value={prev} /> {prev}
              </label>
            </div>
          );
        })}
      </form>
    );
  };

  //input check boxs
  const radioButton = (exactArray) => {
    return (
      <form>
        <label>{exactArray[index].questionText}</label>
        {exactArray[index].options.map((prev) => {
          return (
            <div className="radio">
              <label>
                <input onClick={(event)=>{ console.log(event.target.value)}} type="radio" name="option" value={prev} /> {prev}
              </label>
            </div>
          );
        })}
      </form>
    );
  };


  return (
    <div class="container">
      <div class="row">
        <h1>My Interview Portal</h1>
        <hr />
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading">AngularJS Test</div>
            <div className="panel-body">{renderQuestion()}</div>
            <div className="panel-footer">
              {index === 0 ? "" : prevoiusButton()}
              {index === lenghtOfQuestion - 1 ? "" : nextButton()}
              {index === lenghtOfQuestion - 1 ? finishButton() : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
