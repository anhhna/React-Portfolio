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
    '<p><b>Research Interested</b>: knowledge representation, automated reasoning, knowledge engineering, intelligent system, expert system, artificial intelligence.<br>' +
    'My research is developing models for knowledge representations and designing knowledge bases. Besides, I also study reasoning methods, especially for reality applications. I apply results of my study for designing the intelligent systems, such as: Intelligent problem solvers for e-education, knowledge management systems.</p>' +

    '<p class="smallSpacing" style="color:blue;"><b>EDUCATION</b></p>' +
    '<p>2020: Ph.D of Computer Science, University of Information Technology, VNU-HCM<br>' +
    '2011: Master of Computer Science, University of Science, VNU-HCM<br>' +
    '2008: Bachelor of Honor Program, Mathematics and Informatics, University of Science, VNU-HCM</p>' +

    '<p class="smallSpacing" style="color:blue;"><b>WORKING</b></p>' +
    '<p>June 2008 – now: Leturer at Faculty of Computer Science, University of Information Technology, VNU-HCM, Vietnam.<br>' +
    'Jan. 2018 – Feb. 2018: Visiting researcher at Artificial Intelligence lab., Wakayama University, Japan.<br>' +
    'March 2017 – Sept. 2017: Visiting researcher at Inference and Learning lab., National Institute of Informatics (NII), Japan.</p>'  +

    '<p  class="smallSpacing" style="color:blue;"><b>AWARDS</b></p>' +
    '1. Best Student Paper Award at KSE 2020.<br>' +
    '2. Best Demo Clip Award at AI-Socha 2020 (Vietnam).<br>' +
    '3. Incentive prize: 2015 Binh Duong Technological Creations Awards.<br>' +
    '4. Incentive prize: 2016 Vietnam Fund for Scientific and Technological Creations (VIFOTEC) Award.<br>'
  ],
  email: 'hiennd@uit.edu.vn',
  github: 'https://github.com',
  linkedIn: 'https://linkedin.com',
};

const projects = [
  {
    desc: '[1] <i>Design an engine for searching about the knowledge of programming based on knowledge base</i>, funded by Vietnam National University – Ho Chi Minh city, DSC2021-26-07, 2021 – 2023, PI.',
  },
  {
    desc: '[2] <i>In-depth social network influence and advocacy measurement</i>, funded by VinTech Fund, DA132-15062019, Oct. 2019 – April 2021, PI.',
  },
  {
    desc: '[3] <i>Build a knowledge model of combining relations and operators</i>, funded by Vietnam National University – Ho Chi Minh city, C2019-26-01, March 2019 – Sept. 2020, PI. Finished: May. 2020',
  },
  {
    desc: '[4] <i>Criteria of a knowledge model for an intelligent problems solver in education</i>, funded by University of Information Technology (VNU-HCM), D1-2018-03, Oct. 2018 – Oct. 2019, PI. Finished: May. 2019',
  },
  {
    desc: '[5] <i>Algebraic approach for Knowledge domain have Operators</i>, funded by Vietnam National University – Ho Chi Minh city, C2016-26-06, May 2016 – Nov. 2017, PI. Finished: Jan. 2018',
  },
  {
    desc: '[6] <i>Knowledge  model about relations and Application</i>, funded by University of Information Technology (VNU-HCM), D2013-01, Sep. 2013 – March 2015, PI. Finished.',
  },
  {
    desc: '[7] <i>Reasoning method on COKB model using Sample Problems in knowledge domain about Plane Geometry</i>, funded by University of Information Technology (VNU-HCM), C2012-01, March 2012 – March 2013, PI. Finished.',
  },
];

const publications = [
  {
    category: 'Books',
    desc: '[1] <i>Design an engine for searching about the knowledge of programming based on knowledge base</i>, funded by Vietnam National University – Ho Chi Minh city, DSC2021-26-07, 2021 – 2023, PI.',
  },
  {
    category: 'Books',
    desc: '[2] <i>In-depth social network influence and advocacy measurement</i>, funded by VinTech Fund, DA132-15062019, Oct. 2019 – April 2021, PI.',
  },
];

export default {
  colors, about, projects, publications
}

export { colors, about, projects, publications };
