import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/intro';
import Landing from './components/landing/landing';
import ReportDoc from './components/ReportDoctor/reportdoc';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Landing/>
      <ReportDoc />
    </div>
  );
}

export default App;
