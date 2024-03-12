import Authentication from "./components/login-page/login-page";
import { HomePage } from "./components/home-page/home-page";
import ProfilePage from "./components/profile-page/profile-page";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/no-match/no-match";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Authentication />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage id={1}/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
