import tinytime from 'tinytime'

export const dateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export const profiles = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/dogukanburda/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" />
      </svg>
    )
  },
  twitter: {
    title: 'Twitter',
    username: 'dogukanburda',
    url: 'https://twitter.com/dogukanburda',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
      </svg>
    )
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dogukankefeli/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
      </svg>
    )
  },
  cv: {
    title: 'CV',
    url: 'https://read.cv/dogukankefeli',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
      </svg>
    )
  }
}

export const navigations = {
  header: [
    {
      title: 'Home',
      url: '/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" />
        </svg>
      )
    },
    {
      title: 'Writing',
      url: '/writing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z" />
        </svg>
      )
    },
    {
      title: 'About',
      url: '/about',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z" />
        </svg>
      )
    },
    {
      title: 'Journey',
      url: '/journey',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 18h18a.5.5 0 0 1 .4.8l-2.1 2.8a1 1 0 0 1-.8.4h-13a1 1 0 0 1-.8-.4l-2.1-2.8A.5.5 0 0 1 3 18zm4.161-4H13V6.702L7.161 14zM15 2.425V15a1 1 0 0 1-1 1H4.04a.5.5 0 0 1-.39-.812L14.11 2.113a.5.5 0 0 1 .89.312z" />
        </svg>
      )
    },
    {
      title: 'Stack',
      url: '/stack',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M20.083 15.2l1.202.721a.5.5 0 0 1 0 .858l-8.77 5.262a1 1 0 0 1-1.03 0l-8.77-5.262a.5.5 0 0 1 0-.858l1.202-.721L12 20.05l8.083-4.85zm0-4.7l1.202.721a.5.5 0 0 1 0 .858L12 17.65l-9.285-5.571a.5.5 0 0 1 0-.858l1.202-.721L12 15.35l8.083-4.85zm-7.569-9.191l8.771 5.262a.5.5 0 0 1 0 .858L12 13 2.715 7.429a.5.5 0 0 1 0-.858l8.77-5.262a1 1 0 0 1 1.03 0zM12 3.332L5.887 7 12 10.668 18.113 7 12 3.332z" />
        </svg>
      )
    }
  ]
}

export const mixtapes = [
  {
    title: 'Summer Sax',
    description: '11M+ plays ∙ 55K+ likes',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0'
  },
  {
    title: 'Sax On Fire',
    description: '1.7M+ plays ∙ 40K+ likes',
    url: 'https://soundcloud.com/jagerman/saxonfire'
  },
  {
    title: 'Casablanca',
    description: '130K+ plays ∙ 3K+ likes',
    url: 'https://soundcloud.com/jagerman/casablanca'
  }
]

export const projects = [
  {
    title: 'Notebook',
    description: 'My personal notebook.',
    url: 'https://github.com/suyalcinkaya/notebook'
  },
  {
    title: 'Notiful',
    description: 'An open source minimal and clean taking notes extension for Chrome.',
    url: 'https://github.com/suyalcinkaya/notiful'
  },
  {
    title: 'Koalazily',
    description: 'Loading images lazily in a modern way using Intersection Observer API.',
    url: 'https://github.com/suyalcinkaya/koalazily'
  }
]

export const posts = [
  {
    title: 'Data Structures',
    date: 'August 20, 2022',
    url: '/writing/data_structures'
  },
  {
    title: 'Bira Kültürü ve Tarihi',
    date: 'August 11, 2021',
    url: '/writing/bira_kulturu_ve_tarihi'
  },
  {
    title: 'Post 3',
    date: 'August 20, 2022',
    url: '/writing/post3'
  }
]

export const journeyData = [
  {
    year: 2022,
    logs: [
      {
        title: 'Started to lead my first project as an engineer',
        description: 'Delivering an end-to-end ai-based computer vision solution to a production facility.',
        emoji: '🏗️'
      },
      {
        title: 'Graduated from ITU',
        description: "That one class Quantum Mechanix II really had me for 3 semesters.",
        emoji: '🎓'
      }
    ]
  },
  {
    year: 2021,
    logs: [
      {
        title: 'Joined Stroma',
        description: "First professional full-time job.",
        emoji: '🦾'
      },
      {
        title: 'Finished my first internship at Sabanci University',
        description: "Working with Professor Onur Varol and other interns really elevated my vision.",
        emoji: '📊'
      }
    ]
  },
  {
    year: 2019,
    logs: [
      {
        title: 'Started practicing yoga',
        description: "Doing yoga helped me to concentrate more and it improved my body awareness.",
        emoji: '🧘🏻‍♂️'
      }
    ]
  },
  {
    year: 2018,
    logs: [
      {
        title: 'Started playing football',
        description: "Started as a rookie Defensive End at ITU Hornets",
        emoji: '🏈'
      }
    ]
  },
  {
    year: 2017,
    logs: [
      {
        title: 'Started at Istanbul Technical University',
        description: 'Studying physics strongly impacted my frame of mind on a positive aspect.',
        emoji: '📚'
      }
    ]
  },
  {
    year: 1999,
    logs: [
      {
        title: 'Born',
        description: 'On 28th of February.',
        emoji: '👶🏼'
      }
    ]
  }
]
