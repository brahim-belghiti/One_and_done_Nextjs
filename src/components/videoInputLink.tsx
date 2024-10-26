'use client'

import Link from 'next/link';
import { useState } from 'react'

export const VideoInputLink = () => {

    const [inputValue, setInputValue] = useState<string>("");
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const userInput = e.target.value;
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/i;
    const match = userInput.match(regex);

    if (match) {
      const videoId = match[1];
      setInputValue(videoId);
    }
  }
  return (
    <>
    <input
    className="mt-1 block py-2 px-3 border border-orange-400 bg-white rounded-full shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 w-10/12 font-light text-1xl xl:text-2xl h-16"
    placeholder="past your Youtube video link here: https://www.youtube.com/watch?v=D55ctBYF3AY"
    value={inputValue}
    onChange={handleChangeInput}
  />
  {!inputValue ? (
    ""
  ) : (
    <Link href={{ pathname: `/focus`, query: { id: inputValue } }}>
      {" "}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-10/12 xl:w-4/12">
        Play video
      </button>
    </Link>
  )}
  </>
  )
}
