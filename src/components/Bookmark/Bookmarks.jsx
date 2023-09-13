import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmark, readingtime}) => {
    return (
        <div className=''>
            <div className='bg-slate-200 text-[#6047EC] p-3 m-3 rounded'>
            <h1 className='mb-5 text-center'>Reading Time:{readingtime} min</h1>
            </div>
            <div className='bg-gray-100 h-[1500px] p-4 m-4'>
            <h1 className='ml-5 text-center'>Bookmarked Blog:{bookmark.length}</h1>
            {/* <Bookmark bookmark={bookmark}></Bookmark> */}
            {
                bookmark.map(booked =><Bookmark booked={booked}></Bookmark>)
            }
            </div>
        </div>
    );
};

export default Bookmarks;