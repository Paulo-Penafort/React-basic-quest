import React from 'react';
import Textcolor from './components/textcolor/textcolor';
import Button from './components/button/button';
import'./App.css'
function App() {
  return (
    <div className='center'>
    <Textcolor color="red"/>
    <Button label="BAIXAR CV"/>
    </div>
  );
}
export default App;
