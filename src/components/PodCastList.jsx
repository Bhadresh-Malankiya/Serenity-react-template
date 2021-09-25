import React, { Component , useState ,useEffect} from 'react'
import PodCast from './PodCast'
import {podcasts} from '../data/podcasts'
import PageButton from '../components/PageButton'


export default function PodCastList() {
  const [size,setSize] = useState(["podcast-small","podcast-big","podcast-small","podcast-small","podcast-small","podcast-small","podcast-big","podcast-small","podcast-small"])

  const podCastComponent = podcasts.map((podcast,i) => {
    return <PodCast size={size[i]} link={podcasts[i].link} />
  })
  
  return (
    <div>
      <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:m-20 mt-20">
        {podCastComponent}
      </div>
      <PageButton />
    </div>
  )
}
