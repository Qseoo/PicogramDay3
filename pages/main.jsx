import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class Main extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header">
          <Icon/>
          <Logo name="Mikelis"/>
        </header>
        <nav className="navigation">
          <Menu/>
          <Like/>
        </nav>
        <main className="content">
          <img className="image homeimage" src="https://source.unsplash.com/random" alt="unsplash" />
      </main>
        <footer className="footer">
          <p>&copy; 2017 Mikelis</p>
        </footer>
      </div>
    );
  }
}

export default Main;