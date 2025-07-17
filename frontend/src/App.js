import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/host/HomePage";
import FormPage from "./pages/FormPage";
import PersonalityPage from "./pages/PersonalityPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";

import {AuthContextProvider, withAuth} from "./components/context/AuthContext";
import {DataProvider} from "./components/context/DataContext";




function App() {
    const AuthenticatedHomePage = withAuth(HomePage);
    const AuthenticatedFormPage = withAuth(FormPage);
    const AuthenticatedPersonalityPage = withAuth(PersonalityPage);

  return (
      <AuthContextProvider>
          <DataProvider>
              <Router>
                  <Routes>
                      <Route path="/" element={<Navigate to="/landing" />} />
                      <Route path="/landing" element={<LandingPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/signup" element={<SignupPage />} />
                      <Route path="/homepage" element={<AuthenticatedHomePage />} />
                      <Route path="/quiz" element={<AuthenticatedFormPage />} />
                      <Route path="/quiz/results" element={<AuthenticatedPersonalityPage />} />
                  </Routes>
              </Router>
          </DataProvider>
      </AuthContextProvider>
  )
}



export default App;
