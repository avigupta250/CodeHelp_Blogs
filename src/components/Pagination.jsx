import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Pagination=()=>{
    const {page,handlePageChange ,totalPages}=useContext(AppContext);

    return(
        <div className="fixed bottom-0 w-full flex justify-center items-center bg-white border-2 ">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2  ">
           <div className="flex gap-x-2">
           {page>1 && 
                <button className="border border-sky-300 rounded-md px-4 py-1" onClick={()=>handlePageChange(page-1)}>
                    Previous
                </button>
            }
            {page<totalPages &&
                <button className="border border-sky-300 rounded-md  px-4 py-1" onClick={()=>handlePageChange(page+1)}>
                    Next
                </button>
            }
           </div>

            <p className="font-bold  text-sm py-1">
                Page {page} of{totalPages}
            </p>
            </div>

            
        </div>
    )
}


export default Pagination