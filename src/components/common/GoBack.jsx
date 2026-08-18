import IconWithLabel from './IconWithLabel';

const GoBack = ({ text, handleClick }) => {
    return (
        <button type="button" className="link-like-button" onClick={handleClick}>
            <IconWithLabel id="go-back" classes="fa-solid fa-circle-arrow-left">
                {text}
            </IconWithLabel>
        </button>
    );
};

export default GoBack;