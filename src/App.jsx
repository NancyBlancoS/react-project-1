import './App.css';

import Avatar from './components/avatar/avatar';
import Badge from './components/bagde/badge';
import Card from './components/card/card';
import Footer from './components/footer/footer';
import Header from './components/header/header';

import dandelion from './components/avatar/dandelion.jpg'

function App() {
  return (
    <div className = "App">
        <Header title = "React Beginner's Quiz"/>

        <Card title = "Card Title 1" content = "Card Conntent 1"/>
        <Card title = "Card Title 2" content = "Card Conntent 2"/>
        <Card title = "Card Title 3" content = "Card Conntent 3"/>

        <Avatar imageSrc = {dandelion} content = "dandelion"/>
        
        <Footer content="Created with ❤️ by Nancy Blanco"/>
        <Badge label = "New!"/>
    </div>
  );
}

export default App;
