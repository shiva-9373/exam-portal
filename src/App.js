import "./App.css";
import React from "react";
import Home from "./components/Home.js";
import Axios from "axios";
import Question from "./components/Question";
import Finish from "./components/Finish";
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

function App() {
  const [test, setTest] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const loadPost = async () => {
      // Till the data is fetch using API
      // the Loading page will show.
      setLoading(true);
      // Await make wait until that
      // promise settles and return its reult
      const response = await Axios.get(
        "http://interviewapi.stgbuild.com/getQuizData"
      );
      // After fetching data stored it in posts state.
      setTest(response.data);
      // Closed the loading page
      setLoading(false);
    };
    // Call the function
    loadPost();
  }, []);

  console.log(
    test
      ? test.tests.map((prev) => {
          return prev._id;
        })
      : "loading"
  );
  console.log(test);

  return (
    <Router>
      <Routes>
        <Route path="/" element={test && <Home testData={test} />} />
        <Route
          path="/question598e9256cc88456d444e7c0d"
          element={test && <Question testData={test} />}
        />
        <Route
          path="/question598e93a7cc88456d444e7c13"
          element={test && <Question testData={test} />}
        />
        <Route
          path="/question598e941fcc88456d444e7c1a"
          element={test && <Question testData={test} />}
        />
        <Route path="/finish" element={test && <Finish testData={test} />} />
      </Routes>
    </Router>
  );
}

export default App;
