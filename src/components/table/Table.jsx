import React from "react";

export default function Table() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-2xl">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto pt-4">
          <h4 className="text-xl font-bold">Diagnostic List</h4>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-y-auto h-[12.7rem]">
              <table className="min-w-full">
                <thead className="sticky top-0">
                  <tr className="bg-gray-100">
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-sm bold tracking-wide text-[#072635] rounded-l-full"
                    >
                      Problem/Diagnosis
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-bold tracking-wide text-[#072635]"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-sm font-bold tracking-wide text-[#072635] rounded-r-full"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Hypertension
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Chronic high blood pressure
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Under Observation
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Type 2 Diabetes
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Insulin resistance and elevated blood sugar
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Cured
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Asthma
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Recurrent episodes of bronchial constriction
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Inactive
                    </td>
                  </tr>
                  {/* Additional rows */}
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Asthma
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Recurrent episodes of bronchial constriction
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Inactive
                    </td>
                  </tr>
                  {/* Additional rows */}
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Asthma
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Recurrent episodes of bronchial constriction
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Inactive
                    </td>
                  </tr>
                  {/* Additional rows */}
                  <tr>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Asthma
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Recurrent episodes of bronchial constriction
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-[#072635]">
                      Inactive
                    </td>
                  </tr>
                  {/* Additional rows */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
