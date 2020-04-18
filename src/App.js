import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import QuizInstruntions from './components/quiz/QuizInstruntions';

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/play/instructions" exact component={QuizInstruntions} />
    </Router>
  );
}

export default App;
