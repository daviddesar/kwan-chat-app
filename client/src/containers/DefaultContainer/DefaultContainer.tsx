import React, { FC } from 'react';
import './default-container.style.scss';

interface IDefaultChildren {
    children: React.ReactNode
}

const DefaultContainer: FC<IDefaultChildren> = ({children}) => {
    return (
        <div className="default-container">
            {children}
        </div>
    )
}

export default DefaultContainer;