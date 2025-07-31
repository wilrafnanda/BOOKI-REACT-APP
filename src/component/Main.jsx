import React, { useState } from 'react'
import books from '../../books.js'




export default function () {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = (book) => {
        setSelectedItem(book);
        setIsModalOpen(true);
    };
     const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };
    
    

    return (
        <div >
            
            <button
                className="fixed bottom-[50px] right-4 z-30 px-4 py-3 bg-orange-500 text-white rounded-4xl shadow-lg"
                onClick={() => setShowModal(true)}
            >
                Open
            </button>
           

            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity flex items-center justify-center z-40"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-lg shadow-xl p-8 min-w-[300px] min-h-[150px] flex flex-col items-center justify-center relative"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>
                        <h2 className="font-bold text-2xl mb-4 text-black">Build By</h2>
                        <p className='font-black text-blue-950 text-xl'>William Raphael Using ReactJs</p>
                    </div>
                </div>
            )}

            <div className="mt-8 books-grid">
                {books.map((book, bookIndex) => {
                    return (
                        <div className='book-card' key={bookIndex} onClick={() => handleClick(book)}>
                            <div>
                                <img src={book.cover} alt={book.title} className='w-full mb-2' onClick={() => handleClick(book)}/>
                            </div>
                            <div>
                                <h1 className='font-black text-blue-950 text-lg leading-[1.25]'>{book.title}</h1>
                                <small className='font-semibold'>{book.releaseDate}</small>
                            </div>
                        </div>
                    )
                })}
                
              
   
            </div>
 { isModalOpen && selectedItem &&<div className='modal-underlay fix fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-1000 ' onClick={closeModal}>
                    <div className='modal-container '>
                        <div className='flex gap-3 mb-[1.6rem] md:p-6 ' > 
                            <div>
                                <img src={selectedItem.cover} alt="" className='w-[120px] md:w-[220px]' />
                            </div>
                            <div >
                                <h1 className='text-blue-950 font-black mb-[30px] text-[1.2rem] md:text-[3rem] '>{selectedItem.originalTitle}</h1>
                                <small className='text-red-700 font-black md:text-lg' >{selectedItem.releaseDate}</small>
                            </div>
                           
                        </div >
                            <div className='md:px-6'>
                                <p className='text-blue-950 font-bold mb-3'>Description:</p>
                                <p className='text-[0.85rem] text-gray-600 mb-3 md:text-xl'>{selectedItem.description}</p>
                                <p className='text-blue-950 font-bold'>pages: {selectedItem.pages}</p>
                            </div>

                    </div>
                </div>
}

        </div>
    )
}
