import './App.css';
import Header from '../src/Components/header';
import Content from '../src/Components/content';
import Mainitem from '../src/Components/Main-item'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <Header/>
   <Content/>
   <Mainitem/>
    </div>
  );
}

export default App;
