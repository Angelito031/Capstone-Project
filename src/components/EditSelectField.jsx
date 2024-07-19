import React from 'react'

const EditSelectField = ({label, options}) => {
  return (
    <div className="w-full mt-8">
      <select className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 text-gray-800 border-gray-600 bg-gray-50">
        <option disabled value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}

export default EditSelectField