import React from 'react';
import './end.scss';

const End = ({text}) => {
    return (
        <div className="comp-end">
            <span className="line">
                ({text})
            </span>
        </div>
    );
};

export default End;
