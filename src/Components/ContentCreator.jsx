import React from 'react'
import { useParams } from 'react-router-dom'
import Video from './Video'

export default function ContentCreator({ videos }) {
  const { creatorId } = useParams();

  const  creatorVideos = videos.filter(video => video.creatorId === creatorId)

  return (
    <div>
      <div className="content-creator-container">
          {creatorVideos.map((video, index) => (
            <Video key={index} video={video} />
          ))}
        </div>
    </div>
  )
}

