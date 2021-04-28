import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  componentDidMount(){
    let year = new Date().getFullYear();
    console.log(year)
    axios.get("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/12/schedule").then(res => {
      console.log(res.data)
    });
  }
  render(){
    return <main><img src={"https://a.espncdn.com/i/teamlogos/nfl/500/kc.png"}/></main>
  }
}

export default App;