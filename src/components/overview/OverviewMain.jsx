import React from 'react';
import Page from '../../components/pages/Page';

const OverviewMain = () => {
    return (
        <Page classes={'border outline-dotted	h-screen '}>
            <div className='col-span-12 flex flex-col items-center text-center mx-auto'>
                <h2 className='font-bold text-base my-6'>Overview Page</h2>
            </div>
        </Page>
    );
};

export default OverviewMain;
