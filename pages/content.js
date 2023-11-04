import React from 'react'
import Trending from '../components/Trending'
import NewRelease from '../components/NewRelease'
import Retro from '../components/Retro'
import GallerySlider from '../components/GallerySlider'

const content = () => {
  return (
    <>
    <GallerySlider/>
    <GallerySlider/>
    <Trending/>
    <NewRelease/>
    <Retro/>
    </>
  )
}

export default content 