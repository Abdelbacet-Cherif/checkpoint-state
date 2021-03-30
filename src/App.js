import React, { Component } from 'react';
import './App.css';
import Photo from "./messi.jpg";
import Profile from './Profile'

class App extends Component  {
  constructor(props){
    super(props)
    this.state={person:{
    fullName :"Lionnel Messi" ,
    bio :"Lionel Messi, parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin évoluant au poste d'attaquant au FC Barcelone. Seul footballeur sextuple Ballon d'or et Soulier d'or européen, Messi est considéré comme l'un des meilleurs joueurs de football de l'histoire.",
    profession : "Footballeur",
    photo:<img src ={Photo} alt=''></img>},
    show:false
    }  }  
  render() {
  return (
    <div className="App-header">
             {
      this.state.show?
      <div className="App-header">
         <h1>{this.state.person.fullName}</h1>
        <div>{this.state.person.photo}</div>
        <h2>{this.state.person.profession}</h2>
        <p>{this.state.person.bio}</p>
        <Profile>
    </Profile>
      </div>
      :null
  }
    <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>
      Show
    </button>
     
   </div> 
  );
}
}
export default App;