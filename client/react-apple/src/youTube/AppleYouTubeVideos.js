import React, { useState, useEffect } from "react";
import "./youTubeVideos.css";

function AppleYouTubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAIHr0uMvO8sbFlio__QLCq1nhg8o6mAM0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=09"
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items;
        // console.log(videos);
        setYouTubeVideos(videos);
      });
  }, []);
  // console.log(youTubeVideos);

  return (
    <section>
      <div className="container-fluid text-center">
        <div className="row mx-md-3">
          <div className="col-12">
            <div className="title-wraper bold">
              <h3>Latest Videos</h3>
              <br />
              <br />
            </div>
          </div>
          {youTubeVideos?.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                  <div className="publishDate">
                    {singleVideo.snippet.publishedAt}
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </section>
  );
}

export default AppleYouTubeVideos;
