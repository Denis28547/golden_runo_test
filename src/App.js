import { Navbar } from "./components/Navbar.jsx";
import { FirstBlock } from "./components/FirstBlock.jsx";
import { SecondBlock } from "./components/SecondBlock.jsx";
import { ThirdBlock } from "./components/ThirdBlock.jsx";
import { FourthBlock } from "./components/FourthBlock.jsx";
import { Stripe } from "./components/Stripe.jsx";
import { FifthBlock } from "./components/FifthBlock.jsx";
import { Footer } from "./components/Footer.jsx";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <Stripe />
      <FifthBlock />
      <Footer />
    </div>
  );
}

export default App;
