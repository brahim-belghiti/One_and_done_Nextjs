import VideoPlayer from '@/components/videoPlayer';

export default async function Page({
  searchParams: { id },
}: {
  searchParams: { id?: string }
}) {
  return (
    <section>
      <VideoPlayer videoId={id ?? ''} />
    </section>
  );
}
