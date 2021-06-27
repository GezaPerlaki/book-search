import React, { useState } from 'react';
import './App.css';
import { Spinner } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard';
function App() {
  // States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  // Handle Search
  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 50 || maxResults < 1) {
      toast.error('max results must be between 1 and 50');
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}&startIndex=${startIndex}`
        )
        .then(res => {
          if (startIndex >= res.data.totalItems || startIndex < 1) {
            toast.error(
              `max reults must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch(err => {
          setLoading(true);
          console.log(err.response);
        });
    }
  };
  // Main Show Case
  const mainHeader = () => {
    return (
      <header className='d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        <h1
          className='display-2 text-center text-white mb-3'
          style={{ zIndex: 2 }}
        >
          Book Search
        </h1>
        <div style={{ width: '60%', zIndex: 2 }}>
          <div size='lg' className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Book Search'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <div className='input-group-append'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={handleSubmit}
              >
                <i className='fas fa-search'></i>
              </button>
            </div>
          </div>
          <div className='d-flex text-white justify-content-center'>
            <div className='form-group'>
              <label htmlFor='maxResults'>Max Results</label>
              <input
                type='text'
                className='form-control mb-2'
                type='number'
                id='maxResults'
                placeholder='Max Results'
                value={maxResults}
                onChange={e => setMaxResults(e.target.value)}
              />
            </div>
            <div className='form-group ml-5'>
              <label htmlFor='startIndex'>Start Index</label>
              <input
                type='text'
                className='form-control mb-2'
                type='number'
                id='startIndex'
                placeholder='Start Index'
                value={startIndex}
                onChange={e => setStartIndex(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const handleCards = () => {
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
      const items = cards.map(item => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
          <BookCard
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
            infoLink={item.volumeInfo.infoLink}
          />
        );
      });
      return <div className='card-container'>{items}</div>;
    }
  };
  return (
    <div className='w-100 h-100'>
      {mainHeader()}
      {handleCards()}
      <ToastContainer />
    </div>
  );
}

export default App;
