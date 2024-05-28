export interface Project {
  name: string,
  website: string,
  github: string,
  figma?: string,
  img: string,
}

export const PROJECTS: Project[] = [
  {
    name: 'Space-Tourism',
    website: 'url',
    github: 'url',
    figma: 'url',
    img: 'url',
  },
  // {
  //   name: 'Space-Tourism',
  //   website: 'url',
  //   github: 'url',
  //   figma: 'url',
  //   img: 'url',
  // },
  // {
  //   name: 'Space-Tourism',
  //   website: 'url',
  //   github: 'url',
  //   figma: 'url',
  //   img: 'url',
  // },
  // {
  //   name: 'Space-Tourism',
  //   website: 'url',
  //   github: 'url',
  //   figma: 'url',
  //   img: 'url',
  // },
  // {
  //   name: 'Space-Tourism',
  //   website: 'url',
  //   github: 'url',
  //   figma: 'url',
  //   img: 'url',
  // },
] as const