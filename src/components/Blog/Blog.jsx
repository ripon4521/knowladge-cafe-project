import React from 'react';
import { useEffect, useState } from "react";
import {  FaBookmark } from 'react-icons/fa';
import Bookmarks from '../Bookmark/Bookmarks';

const Blog = () => {
    const [cafes, setcafes] = useState([]);
    const [bookmark, setbookmark] = useState([]);
    const [readingtime, setreadingtime] = useState(0);
    const [readBooks, setReadBooks]=useState([]);
    useEffect( ()=>{
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setcafes(data))
    },[]);

   

    const handleBookmark =blog =>{
        // console.log(blog);
        const isexist = bookmark.find(item => item.id==blog.id)
        if (isexist) {
            return alert('already marked')
        }
        const newBokkmark = [...bookmark, blog];
        setbookmark(newBokkmark);
        // console.log(setbookmark);
    }

    const handlemarkasRead = book =>{
    //     const remaining = bookmark.filter(book => book.id!== time.id)
    //     // console.log('addded time',time.reading_time);
    //    console.log(remaining);
    //     setreadingtime(readingtime+time.reading_time)
    //     // console.log(time.id);
        
       
    //    setbookmark(remaining)
    const totalReadTimes = readBooks.reduce((total, item) => item.reading_time + total, 0)
    const isexist = readBooks.find(item => item.id===book.id)
   
    console.log(isexist, book);
        if (isexist) {
            return alert('already marked')
        }
     
            setReadBooks([...readBooks, book])
            
            // console.log(setReadBooks);
            setreadingtime(totalReadTimes+book.reading_time)
            
       
    
    

    }

    const handleRemoveMarked =remove =>{
            const remaining = bookmark.filter(book => book.id!== remove.id)
           
            // console.log(remove);
            const isexist = readBooks.find(item => item.id===remove.id)
            

          if (isexist) {
            setreadingtime(readingtime-remove.reading_time)
          }
          const reamingbooks = readBooks.filter(b=>b.id!==remove.id)
          setReadBooks(reamingbooks)
    
    
    setbookmark(remaining)
    }



    return (
        <div>
              <div className="flex gap-5  mt-24">
            <div className="">
            {
                cafes.map((caffe)=> 
               
                         <div className=" grid grid-cols-1 mb-20">
                
                <div className="card  bg-base-100 shadow-xl ">
      <figure><img src={caffe.cover} alt="Shoes" /></figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
       <div className="flex gap-2 items-center">
        <img className="w-12" src={caffe.author_img} alt="" />
        <div>
        <h1 className='font-bold'>{caffe.author}</h1>
        <p>{caffe.posted_date}</p>
        </div>
       </div>
          <div className="flex items-center gap-1">
          <p>{caffe.reading_time} min read 
          
          </p>
         <button onClick={()=>handleBookmark(caffe)} className='text-2xl'><FaBookmark></FaBookmark></button>
          </div>
        
        </div>
        <p className='text-xl font-bold'>{caffe.title}</p>
        <div className="card-actions justify-start">
          <div className="">#{caffe.hashtags[0]}</div> 
          <div className="">#{caffe.hashtags[1]}</div>
        </div>
        <button onClick={()=>handlemarkasRead(caffe)} className='border-b w-[100px] text-blue-500' >Mark as read</button>
        <button onClick={()=>handleRemoveMarked(caffe)} className='btn btn-primary'>Remove Marke As Read</button>
      </div>
    </div>
                </div>
                
                
                    
                )
               
            }
            </div>
                <div className="text-2xl font-bold">
                    {/* <Bookamrks bookmark={bookmark}></Bookamrks> */}
                    <Bookmarks readingtime={readingtime}  bookmark={bookmark}></Bookmarks>
                </div> 
            </div>
        </div>
    );
};

export default Blog;