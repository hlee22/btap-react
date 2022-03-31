import logo from './logo.svg';
import './App.css';
import ClassComponent from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import HomeComponent from './Component/BTComponent/HomeComponent';
import NavComponent from './Component/BTComponent/NavComponent';
import HeaderComponent from './Component/BTComponent/HeaderComponent';
import FooterComponent from './Component/BTComponent/FooterComponent';
import ContentCoponent from './Component/BTComponent/ContentCoponent';
import BindingData from './BindingData/BindingData';
import HandleEvent from './HandleEvent/HandleEvent';

// các thẻ html của react js là đối tương JSX
// App là component chính của dự án 

function App() {
  return (
    <div className="App">
     {/* hello dn02
    
    <ClassComponent/>
    <ClassComponent/>
     <FunctionComponent/>  */}

     <HomeComponent/> 
     <BindingData/>
     <HandleEvent/>
     
    </div>
  );
}

export default App;
