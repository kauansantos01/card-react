
function Button({ children, onClick  }) {  // variant = "primary"


    // function getVariantClasses () {
    //     switch (variant) {

    //         case "primary" :
    //             return "flex flex-row gap-5 border bg-white hover:bg-gray-300"
         

    //         case "secondary" : 

    //         return "bg-red-300 text-white"


    //         default: 
    //         return "bg-yellow-400 text-black"
    //     }
           
    

    // }

    return(
        <button 
        onClick={onClick}
        className="flex flex-row gap-5 border bg-white hover:bg-gray-300 shadow
         hover:shadow-lg border-gray-300 items-center justify-center 
         cursor-pointer px-4 py-2 rounded-lg min-w-3xs" >
            {/* Classname={getVariantClasses()} */}
            {children}
        </button>
    )

}



export default Button;