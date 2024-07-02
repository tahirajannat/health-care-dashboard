import React from 'react';
import Table from '../table/Table';

export default function DiagnosticList({ classes, selectedPatient }) {
    return (
        <div className={`mt-8 ${classes}`}>
            <Table selectedPatients={selectedPatient} />
        </div>
    );
}
