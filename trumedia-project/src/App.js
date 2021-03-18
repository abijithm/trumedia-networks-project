import React from 'react';
import './App.css';
import JoshBell from './components/joshbell';
import BrandonCrawford from './components/brandoncrawford';
import BryceHarper from './components/bryceharper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function App() {

  const [alignment, setAlignment] = React.useState('left');
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  function renderPlayerSwitch(alignment){
    switch(alignment){
      case 'left':
        return <JoshBell></JoshBell>
      case 'center':
        return <BrandonCrawford></BrandonCrawford>
      case 'right':
        return <BryceHarper></BryceHarper>
      default:
        return <JoshBell></JoshBell>
    };
  }

  return (
    <div className="App">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >            
      <ToggleButton value="left" >
        <a>Josh Bell</a>
      </ToggleButton>
      <ToggleButton value="center">
        <a>Brandon Crawford</a>
      </ToggleButton>
      <ToggleButton value="right">
        <a>Bryce Harper</a>
      </ToggleButton>
      </ToggleButtonGroup>
      {renderPlayerSwitch(alignment)}
    </div>
  );
}
export default App;