import {HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import PersonalityPage from "./pages/PersonalityPage";




function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/results" element={<PersonalityPage />} />
          </Routes>
      </Router>
  )
}



export default App;
