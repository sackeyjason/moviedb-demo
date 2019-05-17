import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import List from './components/List';
import Api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      tv: [],
      people: []
    }
  }
  
  componentDidMount() {
    this.Api = new Api('d0aea524bd07ed49cbc26dff63f357dd');
    this.Api.request('movie', (response) => {
      this.setState({
        movies: response.results
      })
    });
    this.Api.request('tv', (response) => {
      this.setState({
        tv: response.results.map(item => Object.assign(item, {
          title: item.name
        }))
      })
    });
    this.Api.request('people', (response) => {
      this.setState({
        people: response.results.map(item => Object.assign(item, {
          title: item.name
        }))
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>That's entertainment</h1>
        <Tabs>
          <TabList>
            <Tab>Movies</Tab>
            <Tab>TV Shows</Tab>
            <Tab>People</Tab>
          </TabList>
          <TabPanel>
            <List items={this.state.movies} />
          </TabPanel>
          <TabPanel>
          <List items={this.state.tv} />
          </TabPanel>
          <TabPanel>
            <List items={this.state.people} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
