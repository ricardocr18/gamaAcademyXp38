import { Component } from 'react';
import Headers from './components/Header';
import Banner from './components/Banner';
import Footer from './Footer';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Headers />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default App;
