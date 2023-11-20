
import './Button.css';

interface Props {
    textButton: string;
    className?: string;
    btnLink?: string;
};

const Button = (props: Props) => {
    const { textButton = '', className ,btnLink ='#'} = props;

    return (
        <a href={btnLink} className={`btn-custom btn btn btn-light ms-2 text-color-primary bg-primary-btn fw-bolder ${className}`}>
            {textButton}
        </a>
    );
};

export default Button;
