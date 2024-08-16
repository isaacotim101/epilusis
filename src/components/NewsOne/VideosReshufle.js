import SingleNews from "./SingleNews";
import React, { useEffect, useState } from 'react';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
} from "swiper";
import youtubeData from "@/data/sermons.json"; // Import the JSON file

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const NewsOne = () => {
  const [videos, setVideos] = useState([]); // Initialize with an empty array
  const [randomVideos, setRandomVideos] = useState([]);

  useEffect(() => {
    // Set initial state with imported data after component mounts
    setVideos(youtubeData.items);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  useEffect(() => {
    if (videos.length > 0) { // Check if videos array is not empty
      const shuffleVideos = () => {
        // Shuffle the videos array
        const shuffledVideos = videos.slice().sort(() => Math.random() - 0.5); // Create a copy using slice()
        // Slice the first three videos
        const randomThreeVideos = shuffledVideos.slice(0, 3);
        setRandomVideos(randomThreeVideos);
      };

      // Shuffle videos every 5 seconds
      const intervalId = setInterval(shuffleVideos, 5000);

      // Clean up function
      return () => clearInterval(intervalId);
    }
  }, [videos]);

  return (
    <div className="news-one__right">
      {randomVideos.map((video) => (
        <SingleNews key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default NewsOne;
