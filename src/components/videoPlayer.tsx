'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import YouTube from 'react-youtube';
import { useRouter } from 'next/navigation'

type Topts = {
  height: string;
  width: string;
  playerVars: {
    autoplay: number;
  };
};
const VideoPlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
    const [isItDone, setisItDone] = useState<boolean>(false);
    const [haveError, sethaveError] = useState<boolean>(false);
    const router = useRouter();
  
    const opts: Topts = {
      height: '640',
      width: '1032',
      playerVars: {
        autoplay: 1,
      },
    };
  
    function onVideoError(e) {
      alert('make sure to past the correct link');
      sethaveError(true);
    }
    function onVideoOnEnd(e) {
      setisItDone(true);
    }
    useEffect(() => {
      if (isItDone) {
        router.push('/fin');
      }
    }, [isItDone]);
  return (
    <section>
            <div>
        {haveError ? (
          <div className="flex flex-col items-center w-full pt-4 pb-16">
            <Link href="/">
              {' '}
              <button className="z-80 bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-full">
                back to home
              </button>
            </Link>{' '}
          </div>
        ) : (
          ''
        )}

        <div className="flex items-center justify-center h-screen">
          <YouTube
            videoId={videoId}
            opts={opts}
            className={'youtubeContainer'}
            onEnd={onVideoOnEnd}
            onError={onVideoError}
          />
        </div>
      </div>
    </section>
  )
}

export default VideoPlayer;