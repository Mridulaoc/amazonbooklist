import React from 'react'

const Book = (book) => {

    const showDetails = () => {
            console.log(book.title,book.author)
        }
   
  return (
    <div className='book'>
          <img src={book.imgUrl} alt={book.title} />
          <div className="book-details">
          <h2>{book.title}</h2>
              <p>{book.author}</p>
              <button className='btn' onClick={showDetails}>click me</button>
          </div>   
    </div>
  )
}

export default Book
