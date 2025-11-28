interface toast {
    message: String
}
const Toast : React.FC<toast> = ({message}) => {
    return(
        <div className="bg-violet-300 mb-2 ml-1 rounded-2xl text-violet-900 border-l-4 border-violet-400 p-1 w-110 h-12 text-xs text-center justify-center items-center flex">
            <h5><b>Nota: </b>{message} </h5>
        </div>
    )
}

export default Toast