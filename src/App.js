
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Nav />
      <Profile/>
      <div className='bg-white w-full h-screen'></div>
      <Footer/>
    </>
    
  );
}

export default App;
