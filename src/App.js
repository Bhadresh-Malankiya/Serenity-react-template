import React from 'react'
import BlogList from './components/BlogList'
import PodCastList from './components/PodCastList'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <main >
          <Route path='/'  exact component={LandingPage}/>
          <Route path='/blogs'  component={BlogList}/>
          <Route path='/podcasts' component={PodCastList}/>
          </main>
        </Switch>
        <Footer />
    </Router>
    </>
  );
}

export default App;
