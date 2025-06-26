import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import PersonalityPage from "./pages/PersonalityPage";
import LoginPage from "./pages/LoginPage";




function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/results" element={<PersonalityPage />} />
          </Routes>
      </Router>
  )
}



export default App;
