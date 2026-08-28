const Input = ({id, label, type, value, ref, required, handleChange, min, disabled})=>{
    return (
        <div className="input">
        
            <label htmlFor={id}>
                {label}
                {required && '*'}
            </label>
            <input
                id={id}
                type={ type || 'text'}
                value={value}
                ref={ref}
                min={min}
                onChange={handleChange}
                disabled={disabled}
            />
        </div>
    )
}

export default Input;