import React from 'react';
import './App.css';
import IdCard from './IdCard/IdCard';

const userOne = {
  lastName: 'Doe',
  firstName: 'John',
  gender: 'Male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
};
const userTwo = {
  lastName: 'Geller',
  firstName: 'Monica',
  gender: 'Female',
  height: 165,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/women/44.jpg"
};

function App() {
  return (
    <div className="App">
      <IdCard user={userOne} />
      <IdCard user={userTwo} />
    </div>
  );
}

export default App;
