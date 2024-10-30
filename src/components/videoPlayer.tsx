'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface VideoPlayerProps {
  videoId: string;
  onReady: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, onReady }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const router = useRouter();

  const videoOptions: YouTubeProps['opts'] = {
    height: '640',
    width: '1032',
    playerVars: {
      autoplay: 1,
    },
  };


  const handleVideoError = () => {
    toast.error('Please provide a valid video link.');
    setHasError(true);
  };

  const handleVideoEnd = () => {
    setIsCompleted(true);
  };

  useEffect(() => {
    if (isCompleted) {
      router.push('/fin');
    }
  }, [isCompleted, router]);

  return (
    <section>
      {hasError ? (
        <div className="flex flex-col items-center w-full pt-4 pb-8">
          <Link
            className="z-80 bg-orange-500 hover:bg-orange-600 text-center text-white font-black text-2xl py-2 px-4 rounded-full min-w-20"
            href="/"
          >
            Back to Home Page
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <YouTube
            videoId={videoId}
            opts={videoOptions}
            className="w-screen h-fit lg:h-full lg:w-full flex justify-center items-center"
            onEnd={handleVideoEnd}
            onError={handleVideoError}
            onReady={onReady}
          />
        </div>
      )}
      <ToastContainer />
    </section>
  );
};

export default VideoPlayer;


