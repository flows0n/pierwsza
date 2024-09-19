import './App.css';
import Button from './components/Button/Button';
import  InfoBox  from './components/InfoBox/InfoBox';
import List from './components/List/List';

function App() {

  function handleClick() {
    console.info('Kliknięcie przycisku')
}

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <InfoBox name="Bartek" showDate={false}/>
      <Button onClick={handleClick}/>
      <List/>
    </div>
  );
}

export default App;
