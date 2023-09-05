import { useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Main from './Component/Main';
import { DarkContext } from'./Context/DarkContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  const darkToggle=()=>{
    setIsDark(!isDark);
  }
  return (
    <div className='App'>
      <DarkContext.Provider value={{isDark: isDark, darkToggle:darkToggle}}>
        <Header/>
        <Main/>
        <Footer />
      </DarkContext.Provider>
    </div>
  );
}
export default App;
