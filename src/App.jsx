import FrequentlyAsked from "./component/FrequentlyAsked";
import Nav from "./component/Nav";
import Reasons from "./component/Reasons";
import Subscription from "./component/Subscription";
import Trends from "./component/Trends";
import Footer from "./component/Footer"
//import './App.css'


const App = () => {
  return(
    <>
      <div className="bg-black min-h-screen px-12 text-white">
        <Nav />
        <Trends />
        <Reasons />
        <FrequentlyAsked />
        <Subscription />
        <Footer />
      </div>
    </>
  )
}

export default App;