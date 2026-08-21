const Select = ({id, label, handleSelected, ref, required, value, selectList})=>{
    return (
        <>
            <h3>{label}{required && '*'}</h3>
            <select
                id={id}
                name={label}
                value={value}
                onChange={handleSelected}
            >
                <option value="default">Select a {label}</option>
                {selectList.map((e)=> {
                    return (<option key={e} value={e} ref={ref}>{e}</option>)
                })}
            </select>
        </>
    )
}

export default Select;