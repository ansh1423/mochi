
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsItems from './component/NewsItems';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
   state = {
    progress:0
   }
   setProgress(progress){
    this.setState({progress: progress})
   }
  render() {
    return ( 
      <div>
            <Router>
         <Navbar/>
         <LoadingBar
        color='#f11946'
        progress={10}
       
      />

          <News/>
      <Routes>
        
          {/* <Route index element={<Home />} /> */}
          <Route exact path='/' element={<News />} />
          <Route exact path='/newsitem' element={<NewsItems />} />

        
      </Routes>
    </Router>

      </div>
    )
  }
}
