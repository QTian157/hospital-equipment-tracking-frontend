const Button = ({id, label, type="button", classes, handleClick})=>{
    return(
        <button id={id ? `${id}-button` : undefined} type={type} onClick={handleClick} className={classes}>
            {label}
        </ button>
    )
}

export default Button;