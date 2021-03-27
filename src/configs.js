const colors = {
  primary: '#90CAF9',
  secondary: '#E0E0E0',
  background: '#FFFFFF',
};

const about = {
  firstName: 'Hien',
  lastName: 'D. Nguyen',
  shortDesc: [
    'University of Information Technology, Vietnam National University – Ho Chi Minh city',
    'Faculty of Computer Science',
    'Department of Knowledge Engineering and Machine Learning'
  ],
  longDesc: [
    'Research Interested: knowledge representation, automated reasoning, knowledge engineering, intelligent system, expert system, artificial intelligence.',
    'My research is developing models for knowledge representations and designing knowledge bases. Besides, I also study reasoning methods, especially for reality applications. I apply results of my study for designing the intelligent systems, such as: Intelligent problem solvers for e-education, knowledge management systems.',

    'EDUCATION\n' +
    '2020: Ph.D of Computer Science, University of Information Technology, VNU-HCM\n' +
    '2011: Master of Computer Science, University of Science, VNU-HCM\n' +
    '2008: Bachelor of Honor Program, Mathematics and Informatics, University of Science, VNU-HCM\n',

    'WORKING\n' +
    'June 2008 – now: Leturer at Faculty of Computer Science, University of Information Technology, VNU-HCM, Vietnam.\n' +
    'Jan. 2018 – Feb. 2018: Visiting researcher at Artificial Intelligence lab., Wakayama University, Japan.\n' +
    'March 2017 – Sept. 2017: Visiting researcher at Inference and Learning lab., National Institute of Informatics (NII), Japan.\n',

    'AWARDS\n' +
    '1.\tBest Student Paper Award at KSE 2020.\n' +
    '2.\tBest Demo Clip Award at AI-Socha 2020 (Vietnam).\n' +
    '3.\tIncentive prize: 2015 Binh Duong Technological Creations Awards.\n' +
    '4.\tIncentive prize: 2016 Vietnam Fund for Scientific and Technological Creations (VIFOTEC) Award.\n',
  ],
  email: 'hiennd@uit.edu.vn',
  github: 'https://github.com',
  linkedIn: 'https://linkedin.com',
};

const projects = [
  {
    name: 'Calculator',
    desc: 'jQuery calculator that utilizes state machine logic to efficently perform advanced tasks',
    image: 'https://picsum.photos/400/410',
    demo: '',
    source: '',
  },
  {
    name: 'Student Grade Table',
    desc: 'React + Firebase website with CRUD functionalities',
    image: 'https://picsum.photos/400/410',
    demo: '',
    source: '',
  },
  {
    name: 'When In Rome',
    desc: 'React and Node social media website for finding events around the world',
    image: 'https://picsum.photos/400/410',
    demo: '',
    source: '',
  },
];

const skills = [{
    skill: 'HTML5',
    link: 'https://cdn.svgporn.com/logos/html-5.svg',
  },
  {
    skill: 'CSS3',
    link: 'https://cdn.svgporn.com/logos/css-3.svg',
  },
  {
    skill: 'Javascript',
    link: 'https://cdn.svgporn.com/logos/javascript.svg',
  },
  {
    skill: 'jQuery',
    link: 'https://cdn.svgporn.com/logos/jquery.svg',
  },
  {
    skill: 'MySQL',
    link: 'https://cdn.svgporn.com/logos/mysql.svg',
  },
  {
    skill: 'Express',
    link: 'https://cdn.svgporn.com/logos/express.svg',
  },
  {
    skill: 'React',
    link: 'https://cdn.svgporn.com/logos/react.svg',
  },
  {
    skill: 'Node',
    link: 'https://cdn.svgporn.com/logos/nodejs.svg',
  },
  {
    skill: 'AWS',
    link: 'https://cdn.svgporn.com/logos/aws.svg',
  },
  {
    skill: 'PHP',
    link: 'https://cdn.svgporn.com/logos/php.svg',
  },
  {
    skill: 'Bootstrap',
    link: 'https://cdn.svgporn.com/logos/bootstrap.svg',
  },
  {
    skill: 'Git',
    link: 'https://cdn.svgporn.com/logos/git-icon.svg',
  }];

export default {
  colors, about, projects, skills
}

export { colors, about, projects, skills };
