import React, {useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import NewsItems from './NewsItems'
import LoadingBar from 'react-top-loading-bar'
const News=(props)=> {
  const [articles,setarticles]=useState([])
  const [loading , setloading]=useState(true)
  const [page, setpage]=useState(1)
  const [totalresult, settotalresult]=useState(0)
    
    
   
    const updateNews =async()=>{
      let url='https://newsapi.org/v2/everything?q=keyword&apiKey=9b2ea15ef9ff4054b49da5e321c03ef9';

      let data=await fetch(url);
      let parsedData=await data.json()
       console.log(parsedData);
        setState({articles:parsedData.articles,
      totalresult:parsedData.totalresult,
      loading:false
    })
      
    }
    
  const componentDidMount = async()=>{
     let url='https://newsapi.org/v2/everything?q=keyword&apiKey=9b2ea15ef9ff4054b49da5e321c03ef9';

      let data=await fetch(url);
      let parsedData=await data.json()
       console.log(parsedData);
        setState({articles:parsedData.articles})
       console.log(state.articles)
    }
    const handlePrevClick =async ()=>{
      console.log("Previous");
   //    setState({page:  state.page-1}),
       updateNews();
    }
    const handleNextClick =async ()=>{
      console.log("Next")
  //     setState({page:  state.page+1}),
       updateNews();
    }
    const fetchMoreData = () => {
      // a fake async api call like which sends
      // 20 more records in 1.5 secs
   
   
    
    }
    // console.log( state.articles.articles)

    return (
      <div className='container  my-3'>
        <h2>NewsMonkey - Top headlines</h2>
        <InfiniteScroll
          dataLength={ state.articles.length}
          next={ fetchMoreData}
          hasMore={ state.articles.length !=  state.totalresult}
          loader={<h4>Loading...</h4>}
        >
        <div className="row">
               {  state.articles.map((element)=>{
                 
                 return  <div className="col-md-4">
                 <NewsItems title={!element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,48):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                  </div>
               })}
        
       

        </div> 
        </InfiniteScroll> 
        <div className='container d-flex justify-content-between'>
        <button disabled={ state.page<=1} type="button" className="btn btn-dark" onClick={ handlePrevClick}> &#8592 & Previous</button>
        <button type="button" className="btn btn-dark" onClick={ handleNextClick}>Next</button>
        </div>
    
      </div>
    )
  }


export default News
