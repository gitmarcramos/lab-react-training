import React from 'react';
import './App.css';
// import IdCard from './IdCard/IdCard';
import Random from './Random/Random';
import ColoredBox from './ColoredBox/ColoredBox.jsx'


// const userOne = {
//   lastName: 'Doe',
//   firstName: 'John',
//   gender: 'Male',
//   height: 178,
//   birth: new Date('1992-07-14'),
//   picture: 'https://randomuser.me/api/portraits/men/44.jpg',
// };
// const userTwo = {
//   lastName: 'Geller',
//   firstName: 'Monica',
//   gender: 'Female',
//   height: 165,
//   birth: new Date('1992-07-14'),
//   picture: 'https://randomuser.me/api/portraits/women/44.jpg',
// };

const creditCard = {
  type: "Visa",
  number: "0123456789018845",
  expirationMonth: "February"
};


function App() {
  return (
    <div className="App">
      {/* <IdCard user={userOne} />
      <IdCard user={userTwo} /> */}

    
    <Random min={1} max={100}/>

    <ColoredBox r={255} g={0} b={0}/>
    </div>
  );
}

export default App;
