const Select = ({id, label, handleSelected, value, selectList})=>{
    return (
        <>
            <h3>{label}</h3>
            <select
                id={id}
                name={label}
                value={value}
                onChange={handleSelected}
            >
                <option value="default">Select a {label}</option>
                {selectList.map((e)=> {
                    return (<option key={e} value={e}>{e}</option>)
                })}
            </select>
        </>
    )
}

export default Select;