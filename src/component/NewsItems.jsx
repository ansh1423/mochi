import React from 'react'

const NewsItems=(props)=> {
  
    let {title,description,imageUrl,newsUrl, date,author}=props;
    return (
      <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
       <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="class-text"><small class="text-muted">By {!author?"unkown":author} update {date} ago </small> </p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItems
