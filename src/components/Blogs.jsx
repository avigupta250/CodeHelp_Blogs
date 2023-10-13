import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner"


const Blogs=()=>{
    // consume

    const {posts,loading}=useContext(AppContext);
    console.log("printint inside blog component")
    console.log(posts);

 
    


    return (
        <div className="w-11/12 max-w-[670px] py-8  flex flex-col gap-y-7 mt-[200px] mb-[200px] h-screen justify-center  items-center">
           {
                loading?
                (<Spinner/>):
                (
                    posts.length===0 ?
                    (<div> 
                        <p>No Post Fount</p>
                    </div>) :

                    (posts.map((post)=>(
                        <div key={post.id}>
                            <p className="font-bold text-lg">{post.title}</p>
                            <p className="text-sm">
                                By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-[10px]">Posted On {post.date}</p>
                            <p className="text-md mt-[10px]">{post.content}</p>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map( (tag,index)=>(
                                    <span  className="underline text-blue-600  text-xs font-bold mt-[3px]" key={index}>{` #${tag}`}</span>
                                ))}
                            </div>
                        </div>
                    )))
                )
           }
        </div>
    )

    
}


export default Blogs;