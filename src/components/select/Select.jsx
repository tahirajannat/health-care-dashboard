import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { months } from '../../../src/utility/data';
export default function Select({ selectedMonthChange }) {
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('Last 6 months');

    const handleDropdownClick = () => {
        setDropdownState(!dropdownState);
    };

    const handleSetDropdownValue = (value) => {
        setDropdownValue(value);
        setDropdownState(false);
        selectedMonthChange(value);
    };

    return (
        <div className='relative'>
            <button
                onClick={handleDropdownClick}
                className='flex justify-between items-center gap-1 w-50 text-xs text-gray-500 border-none rounded-md px-2 py-1 focus:outline-none focus:ring-0 '
            >
                {dropdownValue}
                <MdOutlineKeyboardArrowDown className='text-lg' />
            </button>
            <div
                className={`absolute bg-white border border-gray-300 mt-1 rounded-md shadow-lg ${
                    dropdownState ? 'block' : 'hidden'
                }`}
            >
                {months.map((month, index) => (
                    <div
                        key={index}
                        className='text-xs py-2 px-3 hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleSetDropdownValue(month.value)}
                    >
                        {month.value}
                    </div>
                ))}
            </div>
        </div>
    );
}
