const InputErrorMessage = ({hasError, msg})=>{
    return(
        <>
            {hasError && <p classNme="error">{msg}</p>}
        </>
    )
}

export default InputErrorMessage;