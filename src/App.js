import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/LoginScreen";
import RepoDisplay from "./pages/RepoDisplay";
import MainScreen from "./pages/MainScreen";
function App() {
  return (
    <div>
      {/* <SignIn/> */}
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/repoDisplay' element={<MainScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
