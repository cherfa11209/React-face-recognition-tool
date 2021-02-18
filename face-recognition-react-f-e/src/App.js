import react, {Component} from 'react'
import Header from './components/header/Header'
import Logo from './components/logo/Logo'
import Footer from './components/footer/Footer'
import ImageFinder from './components/image-finder/ImageFinder'
import Particles from 'react-particles-js';
import './App.css';
import SignOut from './components/sign-out/SignOut';

const particleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5,
      }
    }
  }
}

export default class App extends Component{

  constructor(){
    super();
    this.state = {

    }
  }

  expand = () => {
    
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Particles className="particles" params={{ particleOptions }} />
        <SignOut />
        <Logo />
        <ImageFinder />
        <Footer />
      </div>
    );
  }
}


