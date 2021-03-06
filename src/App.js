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
    console.log(process.env);
    let api = new Api(process.env.REACT_APP_API_KEY);
    api.request('configuration', (response) => this.setState({imgConfig: response.images}));
    api.request('movie', (response) => {
      this.setState({
        movies: response.results.map(item => Object.assign(
          item, {name: item.title})
        )
      })
    });
    api.request('tv', (response) => this.setState({tv: response.results}));
    api.request('people', (response) => this.setState({people: response.results}));
  }

  showModal(data) {
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
        <h1>Media explorer</h1>
        <Tabs>
          <TabList>
            <Tab>Movies</Tab>
            <Tab>TV Shows</Tab>
            <Tab>People</Tab>
          </TabList>
          <label>
            Search
            <input
              type="text"
              onChange={this.handleSearchChange.bind(this)}
              value={this.state.search}
              style={{marginLeft: 10}}
            />
          </label>
          {['movies', 'tv', 'people'].map((type) => (
            <TabPanel key={type}>
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
          requestCloseHandler={this.hideModal.bind(this)}
          clickHandler={this.showModal.bind(this)}
          imgConfig={this.state.imgConfig}
        />
      </div>
    );
  } 
}

export default App;
