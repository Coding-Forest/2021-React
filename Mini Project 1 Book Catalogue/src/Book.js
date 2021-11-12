import React from 'react';

const Book = ({ img, title, author, link }) => {
    // attribute, eventHandler
    
    // onClick functions
    const alertPopUP = () => {
      alert('Move to the book page');
    }
    
    const printAuthorName = (e) => {
      console.log(e);
      console.log(e.target);
      console.log(author);
    }
  
  
    return (
      <article className='book' onMouseOver={() => {console.log(title)}}>
        
        <img src={img} alt='' />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
      
        <a href={link} rel="noreferrer" target="_blank">
          <button type="button" onClick={alertPopUP}>
            Learn more
          </button>
        </a>
  
          <button type="button" onClick={printAuthorName}>anothoer example</button>
      </article>
    );
  };

export default Book