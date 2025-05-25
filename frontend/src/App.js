import {HashRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";




function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} />
          </Routes>
      </Router>
  )
}



export default App;
