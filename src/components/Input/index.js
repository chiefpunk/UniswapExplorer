import React from 'react'

function Input(props) {
  return (
    <div className="mb-4 w-full">
      <label
        className="block text-white-100 text-sm font-bold mb-2"
        for="label"
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  )
}

export default Input
