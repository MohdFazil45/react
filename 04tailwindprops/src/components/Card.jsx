import React from 'react'

function Card({username}) {
  return (
    <>
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-5">
        <img
          src="https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsfGVufDB8fDB8fHww"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">I Am Groot</h2>
        </div>
        <p className="text-gray-300">
          Groot is a character from Marvel Comics and the Marvel Cinematic Universe, a tree-like humanoid known as a Flora Colossus.
        </p>
      </div>
    </>
  )
}

export default Card