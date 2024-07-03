import React from 'react';
import Page from '../pages/Page';

export default function MessageMain() {
    return (
        <Page classes={'border outline-dotted	h-screen '}>
            <div className='col-span-12 flex flex-col items-center text-center mx-auto'>
                <h2 className='font-bold text-base my-6'>Message Page</h2>
            </div>
        </Page>
    );
}
