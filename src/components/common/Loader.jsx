import React from 'react';
import Page from '../pages/Page';
import PageLeft from '../pages/PageLeft';

export default function Loader() {
    return (
        <Page classes={'h-screen rounded-lg'}>
            <PageLeft classes='h-screen bg-gray-200 mt-4 rounded-lg' />
            <div className='col-span-6 h-screen bg-gray-200 mt-4 rounded-lg'></div>
            <PageLeft classes='h-screen bg-gray-200 mt-4 rounded-lg' />
        </Page>
    );
}
