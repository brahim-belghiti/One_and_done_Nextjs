'use client'
import { useState, Suspense } from 'react';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import VideoSkeleton from '@/components/videoSkeleton';

const MdxEditor = dynamic(() => import('../../components/takeNotesEditor'), {
  ssr: false,
});

const VideoPlayer = dynamic(() => import('../../components/videoPlayer'), {
  ssr: false,
});

// Interface for VideoSection props
interface VideoSectionProps {
  showEditor: boolean;
  setShowEditor: (show: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

// VideoSection component with typed props
function VideoSection({ 
  showEditor, 
  setShowEditor, 
  isLoading, 
  setIsLoading 
}: VideoSectionProps) {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const handleVideoReady = (): void => {
    setIsLoading(false);
  };

  return (
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
  );
}

// Loading section component
function LoadingSection(): JSX.Element {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <VideoSkeleton />
    </div>
  );
}

// Main page component
export default function Page(): JSX.Element {
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div
        className={`w-full h-full transition-all duration-300 ease-in-out
          ${showEditor ? 'grid grid-cols-5 gap-4 p-4' : 'block'}`}
      >
        {/* Wrap the section that uses useSearchParams in Suspense */}
        <Suspense fallback={<LoadingSection />}>
          <VideoSection
            showEditor={showEditor}
            setShowEditor={setShowEditor}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Suspense>

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