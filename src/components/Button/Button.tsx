import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button {...props} className="px-4 py-2 bg-blue-500 text-white rounded">
            {children}
        </button>
    );
};

export default Button;