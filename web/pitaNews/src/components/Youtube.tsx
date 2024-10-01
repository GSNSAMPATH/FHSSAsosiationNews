import React from 'react';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

const YouTubePlayer: React.FC = () => {
  const onPlayerReady = (event: YouTubeEvent) => {
    // Access the YouTube player instance
    console.log('Player is ready', event.target);
    event.target.playVideo(); // Optionally, you can play the video
  };

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-play the video when it loads
    },
  };

  return (
    <div>
      {/* <h1>React YouTube Player</h1> */}
      <YouTube videoId="yCLTATpizkg" opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default YouTubePlayer;
