import React from 'react';

import './Button.css';

interface Props {
    textButton: string;
    className?: string;
};

const Button = (props: Props) => {
    const { textButton = '', className } = props;

    return (
        <a href="#" className={`btn-custom btn btn btn-light ms-2 text-color-primary bg-primary-btn fw-bolder ${className}`}>
            {textButton}
        </a>
    );
};

export default Button;
