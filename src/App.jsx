import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import{ Search } from '/functions/function.js'
import  ClassComponent from './CourseComponents/Components/ClassComponent.jsx'
import FunctionalComponent from './CourseComponents/Components/FunctionalComponent.jsx'

function App() {
  const [count, setCount] = useState(0)
  let somme = (a, b) => a + b;
  console.log(somme(5,5))

  const tab=[1,2,3,4];
  const newTab= tab.map((e)=>e*2)
  console.log(newTab);
  

  const words = ['spray','elite','dfghjkldfghjkghn','exuberant','dfghjkldfghjkghn','spray','spray']
  const res=  words.filter((e)=>e.length>6);
  console.log(res);

  const findLongestWord=(x)=>{
    let newTab = x.map(e=>{
      return {"mot":e,"longeur":e.length}
    })

return newTab.reduce((acc,curr)=>{
    return acc.longeur>curr.longeur? acc:curr
})
  }
  console.log(findLongestWord(words));


  ////////////////////////////////////////////

  var initialValue=0;
  const sommeTab= tab.reduce((acc,curr)=>acc+curr,initialValue);

  console.log(sommeTab);

    var p={
      name:'Jhon',
      lastname:'Don',
      email:'jhon@example.com',
      age:25
    }

    p={...p, classe:'4TWIN2'};
    console.log(p);


/////////////////////////////////////////////

const countOccurrences = (arr) => {
  return arr.flat().reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};

console.log(countOccurrences(words));

////////////////////////////////////////////

const etudiants = [
  { name: 'John', id: 100, marks: 98 },
  { name: 'Baba', id: 101, marks: 23 },
  { name: 'John', id: 200, marks: 45 },
  { name: 'Wick', id: 115, marks: 75 }
];

const totalNotes = etudiants
  .map(etudiant => ({
    ...etudiant,
    marks: etudiant.marks < 50 ? etudiant.marks + 15 : etudiant.marks
  }))
  .filter(etudiant => etudiant.marks > 50)
  .reduce((acc, etudiant) => acc + etudiant.marks, 0);

console.log("Total des notes:", totalNotes); 

//////////////////////////////////

let lastId = 0;

const Tab = [
    {
        id: ++lastId, nom: "iPhone 14", prix: 999,
        categorie: "smartphone"
    },
    {
        id: ++lastId, nom: "MacBook Pro", prix: 1299,
        categorie: "pc"
    }
];

Tab.push({
    id: ++lastId, nom: "AirPods Pro",prix: 249,
    categorie: "Audio"
});

//const elementRecherche = Search(2, Tab);
//console.log(elementRecherche);



const tab1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const name="4TWIN2"
    return (
    <>
    <ClassComponent name="oumaima"/>
    <FunctionalComponent name="oumaima"/>

      <h1>hello from {name }</h1>
      {tab1.map((e) => ( <p>{e}</p>))}
    </>
  )
}

export default App
