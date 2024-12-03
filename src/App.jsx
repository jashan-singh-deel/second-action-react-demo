import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo}r />
        </div>
        <h1>Leaedrn & Master GitHub Actions1</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
