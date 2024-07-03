import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function LabResults({ classes, selectedPatients }) {
    return (
        <div>
            <div className='flex justify-between p-4'>
                <h4 className='text-xl font-bold'>Lab Results</h4>
            </div>
            <div className=' h-72 overflow-scroll scrollbar-visible mx-4 my-2'>
                {selectedPatients.map((labResult, index) => (
                    <div
                        key={index}
                        className={`flex justify-between items-center py-2 px-4 my-2.5 ${classes}`}
                    >
                        <div className='flex gap-2 items-center'>
                            <div className='text-left'>
                                <p className='text-xs '>{labResult}</p>
                            </div>
                        </div>
                        <div>
                            <FiDownload />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
