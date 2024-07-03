import React from 'react';

export default function Page({ children, classes }) {
    return (
        <div className={`container mx-auto ${classes}`}>
            <div className='xl:grid xl:grid-cols-12 mt-4 gap-6'>{children}</div>
        </div>
    );
}
