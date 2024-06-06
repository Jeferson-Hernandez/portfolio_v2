import hoobank from '../assets/hoobank-img.jpg'
import music_app from '../assets/music-app-img.jpg'
import space_tourism from '../assets/space-tourism.jpg'
import sunnyside from '../assets/sunnyside-img.jpg'
import portfolio from '../assets/portafolio-banner.jpg'

export interface Project {
  name: string,
  website: string,
  github: string,
  figma?: string,
  img: ImageMetadata,
  tech: string[],
}

export const PROJECTS: Project[] = [
  {
    name: 'Sunnyside',
    website: 'https://sunnyside-2707.netlify.app/',
    github: 'https://github.com/Jeferson-Hernandez/SunnySide-FrontEndMentor',
    img: sunnyside,
    tech: ['html', 'javascript', 'tailwind']
  },
  {
    name: 'Space-Tourism',
    website: 'https://space-tourism-0720.netlify.app/',
    github: 'https://github.com/Jeferson-Hernandez/space-tourism',
    img: space_tourism,
    tech: ['react', 'tailwind', 'react router dom']
  },
  {
    name: 'Music-App',
    website: 'https://music-app-next.vercel.app/',
    github: 'https://github.com/Jeferson-Hernandez/music_app_next',
    img: music_app,
    tech: ['nextjs', 'typescript', 'css', 'zustand', 'postgresql']
  },
  {
    name: 'Hoobank',
    website: 'https://hoobank-2707.netlify.app/',
    github: 'https://github.com/Jeferson-Hernandez/bank-modern-app/tree/main',
    img: hoobank,
    tech: ['react', 'tailwind']
  },
  {
    name: 'Portafolio_v1',
    website: 'https://portafolio-jefer-hernandez.netlify.app/',
    github: 'https://github.com/Jeferson-Hernandez/portfolio',
    img: portfolio,
    tech: ['react', 'tailwind']
  },
] as const