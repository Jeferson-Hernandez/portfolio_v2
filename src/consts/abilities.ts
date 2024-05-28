export interface Ability {
  type: string,
  name: string,
  icon: string,
  abilities: string[],
}

export const ABILITIES: Ability[] = [
  {
    type: 'development',
    name: 'Front-End',
    icon: 'frontend',
    abilities: ['html-css-js', 'react-next', 'typescript', 'tailwind']
  },
  {
    type: 'development',
    name: 'Back-End',
    icon: 'backend',
    abilities: ['python', 'node', 'postgre', 'mongodb']
  },
  {
    type: 'development',
    name: 'Design',
    icon: 'design',
    abilities: ['figma', 'blender']
  },
  {
    type: 'technical',
    name: 'Tools',
    icon: 'tools',
    abilities: ['vscode', 'vim/nvim']
  },
  {
    type: 'technical',
    name: 'Soft-Skills',
    icon: 'skills',
    abilities: ['html, ', 'react', 'typescript', 'trabajo en equipo']
  },
] as const