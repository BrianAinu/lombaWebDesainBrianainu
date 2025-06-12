import React from 'react'

const VideoYt = () => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <div className="absolute inset-0 bg-black/5">
        <iframe
          src="https://www.youtube.com/embed/D-aWJJaSijo"
          title="Pendapa Ageng Hand Asta Sih"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  )
}

// To use this component:
// <VideoYt />

export default VideoYt
