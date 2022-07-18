// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter'
import Card from './components/card';
import About from './components/about';
import Socials from './components/socials';
import Footer from './components/footer';
import Skills from './components/interests';


function App() {
  return (
    <div className="App">
       <Card />
       <About />
       <Skills />
       <Socials />
       <Footer />
    </div>
  );
}

export default App;
