import HomePage from "./pages/HomePage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavigationBar />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
