import React, { FC } from 'react';

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
    return (
        <div>
            {message}
        </div>
    )
}

export default Alert;