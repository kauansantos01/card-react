
function Button({ children }) {

    return(
        <button className="flex flex-row gap-5 border bg-white hover:bg-gray-300 shadow hover:shadow-lg border-gray-300 items-center justify-center cursor-pointer px-4 py-2 rounded-lg min-w-3xs" >
            {children}
        </button>

            
    )

}



export default Button;