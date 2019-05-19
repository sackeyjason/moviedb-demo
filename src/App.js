import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import "react-tabs/style/react-tabs.css";
import Api from './api';
import List from './components/List';
import Modal from './components/Modal';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movies: [],
      tv: [],
      people: [],

      modalActive: false,
      modalData: {},

      search: ''
    }
  }
  
  componentDidMount() {
    let api = new Api('d0aea524bd07ed49cbc26dff63f357dd');
    api.request('movie', (response) => {
      this.setState({
        movies: response.results.map(item => Object.assign(
          item, {name: item.title})
        )
      })
    });
    api.request('tv', (response) => {
      this.setState({tv: response.results})
    });
    api.request('people', (response) => {
      this.setState({people: response.results})
    });
  }

  showModal(data) {
    console.log(data);
    this.setState({
      modalData: data,
      modalActive: true
    });
  }

  hideModal() {
    this.setState({
      modalActive: false
    });
  }

  handleSearchChange(event) {
    this.setState({
      search: event.target.value
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
          {['movies', 'tv', 'people'].map((type, index) => (
            <TabPanel key={index}>
              <input
                type="text"
                onChange={this.handleSearchChange.bind(this)}
                value={this.state.search}
              />
              <List
                items={this.state[type]}
                filter={this.state.search}
                clickHandler={this.showModal.bind(this)}
              />
            </TabPanel>
          ))}
        </Tabs>
        <Modal
          isActive={this.state.modalActive}
          data={this.state.modalData}
          reqestCloseHandler={this.hideModal.bind(this)}
          clickHandler={this.showModal.bind(this)}
        />
      </div>
    );
  } 
}

export default App;
