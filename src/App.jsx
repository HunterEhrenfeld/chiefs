import React from 'react';
import './App.css';
import axios from 'axios';
function f(a,b){
    if(a.id == "12" && a.winner == false){
      return true;
    }
    else if(b.id == "12" && b.winner == false){
      return true
    }
    else{
      return false;
    }
    
  }
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  componentDidMount(){
    let year = new Date().getFullYear();
    console.log(year)
    for(let i = 1966; i < year; i++){
      axios.get("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/12/schedule?season="+i).then(res => {
        this.setState({data:[...this.state.data.flat(), res.data.events.flat()]});
        console.log(this.state.data);
        
    })
    }
    console.log(this.state.data)
  }
  render(){
    return <main><img src={"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"}/></main>
  }
}

export default App;