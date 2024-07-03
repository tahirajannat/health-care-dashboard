import React from 'react';

export default function PageLeft({ children, classes }) {
    return (
        <div className={`col-span-3 mt-4 xl:py-0 ${classes}`}>{children}</div>
    );
}
