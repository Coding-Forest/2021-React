import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

import {books} from './books';
import Book from './Book';
import {catalogueOpening} from './testing/testing';

function Booklist({}) {

    console.log(catalogueOpening);

    return(
        <section className='booklist'>
            {books.map((book, index) => {
                return <Book key={book.id} {...book}></Book>;
            })}
        </section>
    );
}

ReactDom.render(<Booklist />, document.getElementById('root'));