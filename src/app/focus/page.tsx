'use client'

import { useState } from 'react';
import { X } from 'lucide-react';
import VideoPlayer from '@/components/videoPlayer';
import { useSearchParams } from 'next/navigation';
import VideoSkeleton from '@/components/videoSkeleton';
import MdxEditor from '@/components/takeNotesEditor';





export default function Page() {
  const [showEditor, setShowEditor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div
        className={`w-full h-full transition-all duration-300 ease-in-out
        ${showEditor ? 'grid grid-cols-5 gap-4 p-4' : 'block'}`}
      >
        {/* Video section */}
        <section
          className={`relative h-full ${showEditor ? 'col-span-3' : 'w-full'}`}
        >
          {/* Loading skeleton */}
          {isLoading && (
            <div className="absolute inset-0 z-40">
              <VideoSkeleton />
            </div>
          )}

          <div
            className={`w-full h-full ${isLoading ? 'invisible' : 'visible'}`}
          >
            <VideoPlayer videoId={id ?? ''} onReady={handleVideoReady} />
          </div>

          {/* Take notes button */}
          <button
            onClick={() => setShowEditor(true)}
            className={`absolute top-4 right-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-lg 
              shadow-lg hover:bg-blue-700 transition-colors
              ${showEditor ? 'hidden' : 'block'}`}
          >
            Take Notes
          </button>
        </section>

        {/* Notes section */}
        {showEditor && (
          <div className="col-span-2 bg-white rounded-lg shadow-lg h-full flex flex-col">
            {/* Notes header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Notes</h2>
              <button
                onClick={() => setShowEditor(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* Notes content */}
            <section className="flex-1 p-4 overflow-y-auto">
                <MdxEditor />
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
