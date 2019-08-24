import intro from './introduction.md'

const data = {
  introduction: intro,
  skills: ['Javascript', 'SCSS', 'Vue', 'React', 'Git'],
  strengths: [
    {
      title: 'Fluid communicator',
      copy: 'Listen attentively, speak honestly, treat others respectfully.'
    },
    {
      title: 'Conscientious human',
      copy: 'Clear code composition, timely results, responsible team member.'
    },
    {
      title: 'Knowledge sharer',
      copy: 'Curious for a better way, eager to help, willing to share.'
    }
  ],
  interests: [
    {
      title: 'Copywriting',
      description:
        'I enjoy creative copywriting, occasionally taking on projects where I look for clear and concise ways to communicate ideas.'
    },
    {
      title: 'Music production',
      description:
        'I have been interested in music production for many years and have had records commercially released.'
    },
    {
      title: 'Javascript!',
      description:
        "Among many experiments and presonal projects, I wrote a React Native iOS app which shows the UK's Food Standards Agency scores for establishments in your immediate vicinity. Avaibible on GitHub.",
      tech: ['Javascript', 'React', 'REST', 'GitHub']
    },
    {
      title: 'Exciting kids with technology',
      description:
        "After giving a talk for my 7 year old son's school class on how computer code works, I was asked to return to talk to the older children about the possibilities that exist when they take a moment to understand the technology they use every day."
    }
  ],
  experience: [
    {
      title: 'Portsmouth Guildhall',
      description:
        'Developed a date based event API endpoint and a Vue.js front end search system to consume it.',
      tech: [
        'Javascript',
        'Vue',
        'REST',
        'SCSS',
        'PHP',
        'WordPress',
        'Roots',
        'Debian',
        'GitLab'
      ]
    },
    {
      title: 'MaxFocus, LogicNow',
      description:
        'Part of a development team on a Drupal project, building front end UI components.',
      tech: ['Javascript', 'AJAX', 'SCSS', 'PHP', 'Drupal', 'GitLab']
    },
    {
      title: 'Lindependante',
      description: 'Built a Nuxt Vue.js SSR application, deployed on Netlify.',
      tech: ['Javascript', 'Nuxt', 'Vue', 'Vuex', 'Tailwind', 'GitHub']
    },
    {
      title: 'PACE Dimensions',
      description:
        'Part of a dev team building a custom WordPress theme and plugins; with React.js elements.',
      tech: [
        'Javascript',
        'React',
        'REST',
        'SCSS',
        'PHP',
        'WordPress',
        'NGINX',
        'Debian',
        'GitLab'
      ]
    },
    {
      title: 'Gold Investments',
      description:
        'Developed a WooCommerce theme to pull product prices from a feed and update the front end UI with AJAX calls every 30 seconds.',
      tech: [
        'Javascript',
        'AJAX',
        'SCSS',
        'PHP',
        'WordPress',
        'WooCommerce',
        'GitLab'
      ]
    },
    {
      title: 'Learning for Action Across Health Systems',
      description:
        'A custom WordPress theme and associated plugins with extensive OpenGraph support.',
      tech: [
        'Javascript',
        'SCSS',
        'OpenGraph',
        'WordPress',
        'NGINX',
        'Debian',
        'GitLab'
      ]
    },
    {
      title: 'NGINX hosting',
      description:
        "I provide some of my own clients with hosting for their projects, building up a good understanding of NGINX, Let's Encrypt and Debian systems.",
      tech: ['NGINX', 'Debian']
    }
  ]
}

export default data
