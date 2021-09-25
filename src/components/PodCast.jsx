import React from 'react'

export default function PodCast({link,size}) {
  return (
      <div className={size}>
      <iframe class="podcast-frame" src={link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
  );
  }
