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
    abilities: ['python', 'node-express', 'postgresql', 'mongodb']
  },
  {
    type: 'development',
    name: 'Design',
    icon: 'design',
    abilities: ['figma', 'blender']
  },
  {
    type: 'technical',
    name: 'Technical',
    icon: 'tools',
    abilities: ['vscode', 'vim/nvim']
  },
  {
    type: 'technical',
    name: 'Soft-Skills',
    icon: 'skills',
    abilities: ['apredizaje continuo', 'resolución de problemas', 'adaptabilidad', 'trabajo en equipo']
  },
] as const