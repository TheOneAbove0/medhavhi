import React from 'react'
import IntroPage from './IntroPage';
import AlgorithmPage from './AlgorithmPage.jsx';
import ResourcesPage from './ResourcesPage';
import CommunityPage from './CommunityPage';
import Discover from './Discover';

export default function Main() {
  return (
    <div className=' bg-backGroundColor '>
        <IntroPage />
        <AlgorithmPage />
        <ResourcesPage />
        <CommunityPage />
        <Discover />
    </div>
  )
}
