// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter'
import Card from './components/card';
import About from './components/about';
import Interests from './components/interests';
import Socials from './components/socials';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
       <Card />
       <About />
       <Interests />
       <Socials />
       <Footer />
    </div>
  );
}

export default App;
