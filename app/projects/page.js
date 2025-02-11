import Navbar from '@/components/Navbar'
import React from 'react'
import ProjectBanner from './components/ProjectBanner'
import HowItStarted from './components/HowItStarted'
import DifferentStages from './components/DifferentStages'
import CustomerSays from './components/CustomerSays'
import ViewProjects from './components/ViewProjects'
import Faqs from '@/components/Faqs'
import GetInTouch from '@/components/GetInTouch'
import ProjectForm from '@/components/ProjectForm'
import { CollabsSection } from '@/components/CollabSection'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <div>
        <Navbar isWhite={true}/>
        <div className='pt-12'>
<ProjectBanner/>
<HowItStarted/>
<DifferentStages/>
<CustomerSays/>
<ViewProjects/>
<Faqs/>
<GetInTouch/>
<ProjectForm/>
<CollabsSection/>
<Footer/>
        </div>
    </div>
  )
}
