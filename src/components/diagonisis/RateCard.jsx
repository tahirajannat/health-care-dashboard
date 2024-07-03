import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

export default function RateCard({
    classes,
    src,
    rateTitle,
    rateData,
    status,
}) {
    return (
        <div className={`shadow-xl rounded-md px-4 ${classes}`}>
            <img
                className='rounded-full w-20 object-cover my-4 '
                src={src}
                alt='Jessica Taylor'
            />
            <p className='text-base text-[#072635] mb-1 font-light'>
                {rateTitle}
            </p>
            <p className='text-3xl font-bold text-[#072635]'>{rateData}</p>
            <p className='text-xs my-5 font-light flex items-center'>
                <span>
                    {status === 'Lower than Average' ? (
                        <TiArrowSortedDown className='text-sm text-gray-600 mr-1' />
                    ) : status === 'Normal' ? null : (
                        <TiArrowSortedUp className='text-sm text-gray-600 mr-1' />
                    )}
                </span>
                {status}
            </p>
        </div>
    );
}
