import React from 'react'
import Book from './Book'
import data from './data'

const BookList = () => {
  return (
      <>
          <section className='section'>
              <h1>Book List</h1> 
              <div className="booklist">    
                   {data.map((item) => {
                      return <Book key={item.id} {...item}/>
                    })}
              </div>
          </section>
    </>
  )
}

export default BookList
   