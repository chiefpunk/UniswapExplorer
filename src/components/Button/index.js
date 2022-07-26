import React from 'react'

export default function Button(props) {
  return (
    <button
      className={`flex items-center justify-center px-10 py-4 border-2 rounded-full border-pink-primary ${
        props.disabled ? 'hover:bg-gray-200' : 'hover:bg-pink-primary'
      } ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.icon && <img src={props.icon} alt="icon" width={30} />}
      <p className="ml-3 text-xl text-white-100">{props.title}</p>
    </button>
  )
}
