import FrequentlyAsked from "./component/FrequentlyAsked";
import Nav from "./component/Nav";
import Reasons from "./component/Reasons";
import Subscription from "./component/subscription";
import Trends from "./component/Trends";
import Footer from "./component/Footer"
//import './App.css'


const App = () => {
  return(
    <>
      <div className="bg-black min-h-screen px-12 text-white">
        {/* <Nav />
        
        <Reasons />
        <FrequentlyAsked />
        <Subscription />
        <Footer /> */}
        <Trends />
      </div>
    </>
  )
}

export default App;