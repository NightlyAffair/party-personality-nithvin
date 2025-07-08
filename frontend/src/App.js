import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import PersonalityPage from "./pages/PersonalityPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";

import {AuthContextProvider, withAuth} from "./components/api/AuthContext";




function App() {
    const AuthenticatedHomePage = withAuth(HomePage);
    const AuthenticatedQuizPage = withAuth(QuizPage);
    const AuthenticatedPersonalityPage = withAuth(PersonalityPage);

  return (
      <AuthContextProvider>
          <Router>
              <Routes>
                  <Route path="/" element={<Navigate to="/landing" />} />
                  <Route path="/landing" element={<LandingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="/homepage" element={<AuthenticatedHomePage />} />
                  <Route path="/quiz" element={<AuthenticatedQuizPage />} />
                  <Route path="/quiz/results" element={<AuthenticatedPersonalityPage />} />
              </Routes>
          </Router>
      </AuthContextProvider>
  )
}



export default App;
