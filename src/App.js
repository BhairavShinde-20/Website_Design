import './App.css';
import Faq from './component/Faq';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Uidesign from './component/Uidesign';

function App() {
  return (
    <>
    <Navbar/>
      <Uidesign/>
      <Services/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
