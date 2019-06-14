import intro from './introduction.md'

const data = {
  introduction: intro,
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
  experience: [
    {
      title: 'Portsmouth Guildhall',
      dateRange: 'September 2018 - January 2019',
      description:
        'Accessible CMS with a date based event search system built in Vue.',
      tech: ['Javascript', 'Vue', 'REST', 'PHP', 'SCSS', 'NGINX', 'Debian']
    },
    {
      title: 'dontEat',
      dateRange: 'January 2017 - April 2017',
      description:
        "React Native iOS app which shows the UK's Food Standards Agency scores for establishments in your immediate vicinity.",
      tech: ['Javascript', 'React Native', 'REST']
    },
    {
      title: 'PACE Dimensions',
      dateRange: 'April 2017 - July 2017',
      description:
        'Custom WordPress theme and plugins with React.js elements. I learned a lot about react components and integration into wider CMS projects. I provide ongoing hosting and maintenance support.',
      tech: ['Javascript', 'React', 'REST', 'PHP', 'SCSS', 'NGINX', 'Debian']
    },
    {
      title: 'Learning for Action Across Health Systems',
      dateRange: 'September 2017 - October 2017',
      description:
        'Custom WordPress theme and associated plugins with React.js elements.',
      tech: ['Javascript', 'PHP', 'SCSS', 'NGINX', 'Debian']
    },
    {
      title: 'NGINX hosting',
      dateRange: 'September 2017 - October 2017',
      description:
        "I have provided my own clients with hosting for their projects, building up a good understanding of NGINX, Let's Encrypt and Debian systems."
    }
  ]
}

export default data
