import React from 'react';
import { BsGenderFemale } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { MdOutlineVerifiedUser } from 'react-icons/md';

export default function PatientInfo({
    classes,
    patientProfilePicture,
    patientName,
    patientDateOfBirth,
    patientGender,
    patientContactInfo,
    patientEmergencyContacts,
    patientInsuranceProvider,
}) {
    return (
        <div className={`py-4 px-8 ${classes}`}>
            <div className='text-center flex flex-col'>
                <img
                    className='rounded-full w-44 object-cover my-4 mx-auto'
                    src={patientProfilePicture}
                    alt={`Portrait of ${patientName}`}
                />
                <p className='text-2xl leading-none font-bold my-5'>
                    {patientName}
                </p>
            </div>

            <div className=''>
                <div className='flex flex-col items-start gap-4 my-4'>
                    <div className='flex gap-4 items-center'>
                        <span className='p-2 bg-gray-50 rounded-full'>
                            <IoCalendarClearOutline className='text-lg' />
                        </span>
                        <div>
                            <p className='text-xs text-gray-600 mb-1'>
                                Date Of Birth
                            </p>
                            <p className='text-xs font-bold text-gray-600'>
                                {patientDateOfBirth}
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <span className='p-2 bg-gray-50 rounded-full'>
                            <BsGenderFemale className='text-lg' />
                        </span>
                        <div>
                            <p className='text-xs text-gray-600 mb-1'>Gender</p>
                            <p className='text-xs font-bold text-gray-600'>
                                {patientGender}
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <span className='p-2 bg-gray-50 rounded-full'>
                            <FiPhone className='text-lg' />
                        </span>
                        <div>
                            <p className='text-xs text-gray-600 mb-1'>
                                Contact Info
                            </p>
                            <p className='text-xs font-bold text-gray-600'>
                                {patientContactInfo}
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <span className='p-2 bg-gray-50 rounded-full'>
                            <FiPhone className='text-lg' />
                        </span>
                        <div>
                            <p className='text-xs text-gray-600 mb-1'>
                                Emergency Contacts
                            </p>
                            <p className='text-xs font-bold text-gray-600'>
                                {patientEmergencyContacts}
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <span className='p-2 bg-gray-50 rounded-full'>
                            <MdOutlineVerifiedUser className='text-lg' />
                        </span>
                        <div>
                            <p className='text-xs text-gray-600 mb-1'>
                                Insurance Provider
                            </p>
                            <p className='text-xs font-bold text-gray-600'>
                                {patientInsuranceProvider}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center my-10'>
                <button>
                    <a
                        href='#'
                        className='rounded-full px-8 py-2.5 text-sm font-medium text-[#072635] bg-[#01F0D0] hover:bg-opacity-75'
                        aria-current='page'
                    >
                        Show All Information
                    </a>
                </button>
            </div>
        </div>
    );
}
