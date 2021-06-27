import React, { useState } from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';
const BookCard = ({
  thumbnail,
  title,
  pageCount,
  language,
  description,
  authors,
  publisher,
  previewLink,
  infoLink,
}) => {
  // States
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <button onClick={toggle} className='card m-3 '>
      <img className='image' src={thumbnail} alt={title} />
      <div>
        <div className='card-title'>{title}</div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <div className='modal-header d-flex justify-content-center'>
          <h5 className='modal-title text-center' id='exampleModalLabel'>
            {title}
          </h5>
          <button
            aria-label='Close'
            className='close'
            type='button'
            onClick={toggle}
          >
            <span aria-hidden={true}>X</span>
          </button>
        </div>
        <div className='modal-body'>
          <div className='d-flex justify-content-between ml-3'>
            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language : {language}</p>
              <p>Authors : {authors}</p>
              <p>Publisher : {publisher}</p>
            </div>
          </div>
          <div className='mt-3'>{description}</div>
        </div>
        <div className='modal-footer'>
          <div className='left-silde'>
            <a
              href={previewLink}
              className='btn-link'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Preview Link
            </a>
          </div>
          <div className='divider'></div>
          <div className='right-silde'>
            <a
              href={infoLink}
              className='btn-link'
              color='default'
              type='button'
              target='_blank'
              rel='noopener noreferrer'
            >
              Info Link
            </a>
          </div>
        </div>
      </Modal>
    </button>
    /*
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal card m-3 ">
      Launch demo modal
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    */
  );
};

export default BookCard;
