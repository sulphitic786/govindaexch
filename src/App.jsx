import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";



function App() {
  return (
    <>
      <Routes>
        
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
// Custom button function
export const useNavigateButton = () => {
  const navigate = useNavigate();

  // The function to call for navigation
  const navigateTo = (path) => {
    navigate(path); // Navigate to the given path
  };

  return { navigateTo };
};