import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import ExamInstruntions from "./components/exam/ExamInstruntions";
import Exam from "./components/exam/Exam";
import ExamSummary from "./components/exam/ExamSummary";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/exam/instructions" exact component={ExamInstruntions} />
      <Route path="/exam/start" exact component={Exam} />
      <Route path="/exam/summary" exact component={ExamSummary} />
    </Router>
  );
}

export default App;
