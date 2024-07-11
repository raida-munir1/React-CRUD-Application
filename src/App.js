import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';
import Heading from './components/Body/heading';
import EmplyeeTable from './components/Body/table';
import './App.css';

const App = () => {
  return (
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Heading />     
          <EmplyeeTable />
        </div>
        <Footer />
      </div>
  );
};

export default App;
