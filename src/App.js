import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div className="App">
      <h1>That's entertainment</h1>
      <Tabs>
        <TabList>
          <Tab>Movies</Tab>
          <Tab>TV Shows</Tab>
          <Tab>People</Tab>
        </TabList>
        <TabPanel>M</TabPanel>
        <TabPanel>T</TabPanel>
        <TabPanel>P</TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
