import React from 'react'

export default function Card(props) {
  return (
    <div
      className={`p-3 bg-blue-secondary rounded-lg border-pink-primary border shadow-xl ${props.className}`}
    >
      <h1 className="pb-3 text-2xl border-b border-white-100 text-white-100">
        {props.title || 'Title'}
      </h1>
      <div className="flex justify-center p-5 mt-2 flex-col">
        {props.children}
      </div>
    </div>
  )
}
