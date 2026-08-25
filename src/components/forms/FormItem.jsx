const FormItem = ({children, classes}) => {
    return (
        <div className={`form-item ${classes}`}>
            {children}
        </div>
    )
}

export default FormItem;