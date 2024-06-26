import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <Head>
        <title>One and done</title>
        <meta name="description" content="Watch youtube without distraction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <div className="pl-8 pt-16 xl:pl-24 xl:pt-24 flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-3xl xl:text-6xl text-left font-light">
              Escape
            </h3>
            <h3 className="text-3xl xl:text-6xl text-lef font-light">
              the rabbit hole.{" "}
            </h3>
            <h3 className="text-3xl xl:text-6xl text-lef font-black">
              be focused
            </h3>
          </div>
          <div className="flex flex-col justify-around gap-4">
            <Image
              src="/assets/capture.png"
              alt="instruction to where to put the youtube link to watch it on the app"
              className="w-10/12"
              width={380}
              height={20}
            />
            <input
              className="mt-1 block py-2 px-3 border border-orange-400 bg-white rounded-full shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 w-10/12 font-light text-1xl xl:text-2xl h-16"
              placeholder="past your Youtube video link here: https://www.youtube.com/watch?v=D55ctBYF3AY"
              value={inputValue}
              onChange={handleChangeInput}
            />
            {!inputValue ? (
              ""
            ) : (
              <Link href={{ pathname: `/video`, query: { id: inputValue } }}>
                {" "}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-10/12 xl:w-4/12">
                  Play video
                </button>
              </Link>
            )}
          </div>
          <div className="columns-2 w-4/5">
            <p className="text-1xl xl:text-1xl text-lef font-light">
              Sometimes a friend or a coworker sends you a YouTube video to
              watch, while working. And you tell yourself, I'm going to watch it
              and comeback to work. But before you know it, you find yourself
              have spent more than 30 minutes on YouTube (The average mobile
              YouTube session is now 40 minutes).
            </p>
            <p className="text-1xl xl:text-1xl text-lef font-light">
              {" "}
              So If you have to watch that video, then watch it here, and go
              about your work. This could apply to watching a YouTube tutorial
              to get some quick information and then immediatly leave, once the
              video is completed.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
