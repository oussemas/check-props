// import logo from './logo.svg';
import './App.css';
import Btn from './Btn';
import Profile from './profile/Profile';



function App() {
  let Persons = {
    name:"Oussema",
    email:"oussema@yahoo.fr",
    phone:23564}

    
  
  return (



    <div className="App">
      
      <Btn Persons={Persons}> </Btn>
      <Profile Persons={Persons}  >
        <img src='./hello.jpg' />
      </Profile>
    </div>
  );
}

export default App;
