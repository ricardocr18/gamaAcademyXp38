import { Component } from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';


class App extends Component{
  render(){
    return (
      <div className="App">
        <Headers />
        <Article />
        <Footer />
      </div>
    );
  }
}

export default App;
