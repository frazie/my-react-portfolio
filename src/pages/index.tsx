import Head from 'next/head'
import { GetStaticProps} from 'next'
import Link from 'next/link'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

import { Experience, PageInfo, Project, Skill, Social } from '../../typings'

import  { fetchExperiences }  from '../utils/fetchExperiences'
import  { fetchSkill }  from '../utils/fetchSkills'
import  { fetchProject } from '../utils/fetchProjects'
import  { fetchSocial }  from '../utils/fetchSocials'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { urlFor } from '../../sanity'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, skills, projects, socials } : Props) => {
  return (
    <div className='bg-[rgb(54,54,54)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
    <Head>
      <title> Frazier&apos;s Portfolio</title>
    </Head>

    <Header socials={socials} />
    
    <section id="hero" className='snap-start'>
      <Hero pageInfo={ pageInfo } />
    </section>

    
    <section id='about' className='snap-center'>
      <About pageInfo={ pageInfo } />
    </section>
    
    <section id='experience' className='snap-center'>
      <WorkExperience experiences={ experiences } />
    </section>

    <section id='skills' className='snap-start'>
      <Skills skills={ skills } />
    </section>

    <section id='projects' className='snap-start'>
      <Projects projects={ projects } />
    </section>
  
    <section id='contact' className='snap-start'>
      <ContactMe pageInfo={pageInfo} />
    </section>

    <Link href='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>
              <div className='flex items-center justify-center'>
                <img 
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                  src={urlFor(pageInfo?.heroImage).url()} alt="let's head home" />
              </div>
          </footer>    
    </Link>
  
    </div>
    
  )
}

export default Home


export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const socials: Social[] = await fetchSocial();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkill();
  const projects: Project[] = await fetchProject();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },
    revalidate: 20,
  }
}