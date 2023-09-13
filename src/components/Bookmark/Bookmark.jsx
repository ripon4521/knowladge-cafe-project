import React from 'react';

const Bookmark = ({booked}) => {
    return (
        <div className='bg-slate-200 p-4 m-4 rounded'>
            <h1 className='w-[400px]'>{booked.title}</h1>
        </div>
    );
};

export default Bookmark;