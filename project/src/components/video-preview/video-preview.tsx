import { useEffect, useRef } from 'react';
import { TIME_TO_SHOW_PREVIEW_VIDEO } from '../../const';

type VideoPreviewProps = {
  src: string;
  poster: string;
};

function VideoPreview({src, poster}: VideoPreviewProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      videoRef.current?.play();
    }, TIME_TO_SHOW_PREVIEW_VIDEO);
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <video ref={videoRef} src={src} poster={poster} width="280" height="175" muted loop/>
  );
}

export default VideoPreview;
