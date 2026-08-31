const Select = ({id, label, handleSelected, ref, required, value, selectList, disabled})=>{
    return (
        <div className="select">
            <h2>{label}{required && '*'}</h2>
            <select
                id={id}
                name={label}
                value={value}
                onChange={handleSelected}
                ref={ref} 
                disabled={disabled}
            >
                <option value="">Select a {label}</option>
                {selectList.map((e)=> {
                    return (<option key={e} value={e} >{e}</option>)
                })}
            </select>
        </div>
    )
}

export default Select;