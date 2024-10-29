import { VideoInputLink } from '@/components/videoInputLink';
import Image from 'next/image';

export default function page() {
  return (
    <>
      <main>
        <div className="pl-8 pt-16 xl:pl-24 xl:pt-24 flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-3xl xl:text-6xl text-left font-light">
              Escape
            </h3>
            <h3 className="text-3xl xl:text-6xl text-lef font-light">
              the rabbit hole.{' '}
            </h3>
            <h3 className="text-3xl xl:text-6xl text-lef font-black">
              be focused
            </h3>
          </div>
          <div className="flex flex-col justify-around gap-4">
            <Image
              src="/capture.png"
              alt="instruction to where to put the youtube link to watch it on the app"
              className="w-10/12"
              width={380}
              height={20}
            />
            <VideoInputLink />
          </div>
          <div className="columns-2 w-4/5">
            <p className="text-1xl xl:text-1xl text-lef font-light">
              Sometimes a friend or a coworker sends you a YouTube video to
              watch, while working. And you tell yourself, I&apos;m going to watch it
              and comeback to work. But before you know it, you find yourself
              have spent more than 30 minutes on YouTube (The average mobile
              YouTube session is now 40 minutes).
            </p>
            <p className="text-1xl xl:text-1xl text-lef font-light">
              {' '}
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
