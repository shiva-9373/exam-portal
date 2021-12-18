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



function Home(props) {
  
  const navigate = useNavigate();
 
function renderTestName(){

   const array = props.testData.tests.map(prev=>
    <tr>
    <td>{prev.name}</td>
    <td>{prev.questions.length}</td>
    <td><button class="btn btn-warning" onClick={() => {
          navigate(`/question${prev._id}`, { state: prev._id });
        }} >Start Test</button></td>
    </tr>
    )

  return array
}



  return (
    <div className="container">
    <div className="row">
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>My Interview Portal</h1>
        <hr/>
        <div className="col-md-12">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Test</th>
                        <th>No of Questions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   {renderTestName()}
                </tbody>
            </table>
        </div>
    </div>

    API Url: <a href="http://interviewapi.stagging.in/getQuizData" target="_blank">http://interviewapi.stagging.in/getQuizData</a>
</div>
  );
}

export default Home;
