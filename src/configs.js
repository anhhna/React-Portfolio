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
    'Department of Artificial Intelligence'
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
    desc: [
      'Hien D. Nguyen, Nhon V. Do, Vuong T. Pham, <em>Chapter 13: A methodology for designing knowledge-based systems and applications</em>, A. Elngar, et al. (Eds.), <em>Applications of Computational Intelligence In Multi-Disciplinary Research</em>, ISBN: 978-0-12-823978-0, Elsevier. (2022)',
      'Nhon V. Do, Hien D. Nguyen, <em>Knowledge-based Systems</em>, ISBN: 978-604-73-5399-6, Publisher of VNU-HCM (2017) (Vietnamese).',
      'Hien D. Nguyen, Diem Nguyen, Van L. Ho, <em>Workbook: Artificial Intelligence</em>, ISBN: 978-604-73-4106-1, Publisher of VNU-HCM (2016) (Vietnamese).',
      'Hien D. Nguyen, Van L. Ho, Diem Nguyen, <em>Workbook: Symbolic Programming in Artificial Intelligence</em>, ISBN: 978-604-73-2658-7, Publisher of VNU-HCM (2015) (Vietnamese).'
    ],
  },
  {
    category: 'International Journals',
    desc: [
      'Quan M. Tran, Hien D. Nguyen, Tai Huynh, Kha V. Nguyen, Suong N. Hoang, Vuong T. Pham, &ldquo;<em>Measuring the Influence and Amplification of users on Social Network with Unsupervised Behaviors Learning and Efficient Interaction-based Knowledge Graph</em>&rdquo;, Journal of &nbsp;Combinatorial Optimization (JOCO), 2021. SCIE. Accepted',
      'Vuong T. Pham, Hai Nguyen, Pham The Bao, Tat-Bao-Thien Nguyen, Hien D. Nguyen, &ldquo;<em>Robust engineering-based unified biomedical imaging framework for liver tumor segmentation</em>&rdquo;, Current Medical Imaging (CMIM), 2021. SCIE. Accepted',
      'Hien D. Nguyen, Tuan-Vi Tran, Xuan-Thien Pham, Anh T. Huynh, Nhon V. Do, &ldquo;<em>Ontology-based Integration of Knowledge Base for Building an Intelligent Searching Chatbot</em>&rdquo;, Sensors and Materials, 33(9), pp. 3101 - 3121, 2021. SCIE',
      'Tai Huynh, Hien D. Nguyen, Ivan Zelinka, Kha V. Nguyen, Vuong T. Pham, Suong N. Hoang, &ldquo;<em>ADVO: A system to manage influencer marketing campaigns on social network</em>&rdquo;, Applied Sciences, 11(14), 6497, 2021. SCIE',
      'Hien D. Nguyen, Chiaki Sakama, Taisuke Sato, Katsumi Inoue, &ldquo;<em>An Efficient Reasoning Method on Logic Programming using Partial Evaluation in Vector Spaces</em>&rdquo;, Journal of Logic and Computation (JLC), SCIE',
      'Hieu Nguyen, Vinh P. Tran, Vuong T. Pham, Hien D. Nguyen, <em>Design a learning model of mobile vision to detect diabetic retinopathy based on the improvement of MobileNetV2</em>, J. Digital Enterprise Technology (IJDET), 2021. In publishing.',
      'Minh N. Phan, Hien D. Nguyen, Dung A. Tran, Trong T. Le, Nha P. Tran, <em>Design an Intelligent Problem Solver in Geometry based on Knowledge Model of Relations</em>, Engineering Letters, 28, No. 4, pp. 1108 &ndash; 1117, (2020). ESCI, Scopus.',
      'Hien D. Nguyen, Dung A. Tran, Huan P. Do, Vuong T. Pham, <em>Design an intelligent system to automatically tutor the method for solving problems</em>, International Journal of Integrated Engineering (IJIE), Vol. 12, No. 7, pp. 211 &ndash; 223, (2020). Scopus',
      'Hien D. Nguyen, Nhon V. Do, Nha P. Tran, Xuan Hau Pham, Vuong T. Pham, <em>Some criteria of the Knowledge Representation method for an Intelligent Problem Solver in STEM education</em>, Applied Computational Intelligence and Soft Computing, Vol. 2020, Article ID&nbsp;9834218, (2020). ESCI, Scopus.',
      'Hien D. Nguyen, Nhon V. Do, Vuong T. Pham, Ali Selamat, E. Herrera-Viedma, <em>A method for knowledge representation to design Intelligent Problems Solver in mathematics based on Rela-Ops model</em>, IEEE Access, Vol. 8, pp. 76991&ndash;77012, 2020. DOI: 1109/ACCESS.2020.2988929.',
      'Tai Huynh, Hien D. Nguyen, Ivan Zelinka, Dac H. Dinh, Xuan Hau Pham, <em>Detecting the influencer on social network using passion point and measures of information propagation</em>, Sustainability 2020, 12(7), 3064.',
      'Hien D. Nguyen, Nhon V. Do, Nha P. Tran, Xuan Hau Pham, Vuong T. Pham, <em>Some criteria of the Knowledge Representation method for an Intelligent Problem Solver in STEM education</em>, Applied Computational Intelligence and Soft Computing, Vol. 2020, Article ID&nbsp;9834218, 2020.',
      'Nhon V. Do, Hien D. Nguyen, Thanh T. Mai, <em>A Method of Ontology Integration for Designing Intelligent Problem Solvers</em>, Applied Science (<em> Sci.</em>) 2019, 9(18), 3793.',
      'Nhon V. Do, Hien D. Nguyen, Ali Selamat, <em>Knowledge-Based model of Expert Systems using Rela-model</em>, International Journal of Software Engineering and Knowledge Engineering (IJSEKE), 28(8), pp. 1047 - 1090 (2018). SCIE',
      'Hien D. Nguyen, Nhon V. Do, Vuong T. Pham, Katsumi Inoue, <em>Solving problems on a knowledge model of operators and Application</em>, International Journal of Digital Enterprise Technology (IJDET), 1, Nos. 1/2, pp.37&ndash;59 (2018).',
      'Nhon V. Do, Hien D. Nguyen and Thanh T. Mai, &ldquo;<em>Reasoning Method on Knowledge about Functions and Operators</em>&rdquo;, International Journal of Advanced Computer Science and Applications (IJACSA), 6(6), pp. 156 &ndash; 168 (2015), DOI: 10.14569/IJACSA.2015.060622 . ESCI, Scopus.',
    ],
  },
  {
    category: 'Dosmetic Journals',
    desc: [
      'Hien D. Nguyen, Nhon V. Do, Vuong T. Pham, <em>Design an intelligent problem solver in linear algebra based on knowledge base included collaborative knowledge domain,</em> Journal of Science, Can Tho University, ISSN: 1859-2333, Special Issue, pp. 10 - 18 (2017) (Vietnamese)',
      'Hien D. Nguyen, Nhon V. Do, <em>Model of knowledge about Operators and Application to Design Intelligent Problem Solver, </em>Journal of Science and Technology, Vietnam Academy of Science and Technology, ISSN: 0866-708X, Vol. 52, No. 4D, pp. 60-76 (2014) (Vietnamese)',
      'Hien D. Nguyen, Vuong T. Pham, <em>Relational Network of Geometric Objects and Apply to Draw the Figure of Problem automatically</em>, Journal of Science, Can Tho University, ISSN: 1859-2333, Special Issue, pp. 198-204 (2013)',
    ],
  },
  {
    category: 'Conferences',
    desc: [
      'Hien D. Nguyen, Linh Nguyen, Nha P. Tran, Van-Thanh Nguyen-Le, Sang Vu, <em>Design an Intelligent Problem Solver in Mathematics based on Integrated-Knowledge Model</em>, Proceedings of 13<sup>th</sup> IEEE International Conference on Knowledge and Systems Engineering (KSE 2021), Bangkok, Thailand, Nov. 2021',
      'Hien D. Nguyen, Chiaki Sakama, <em>Feature Learning by Least Generalization</em>, Proceedings of 30<sup>th</sup> International Conference on Inductive Logic Programming (ILP 2021), co-located with The first International Joint Conference on Learning &amp; Reasoning (IJCLR 2021), Oct. 2021, Athens, Greece.',
      'Hien D. Nguyen, Thanh Le, Khiem Tran, Son T. Luu, Suong N. Hoang, Hieu T. Phan, <em>Multi-level Sentiment Analysis of Product Reviews based on Grammar Rules of Language, Proceedings of&nbsp;20th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET 2021), Cancun, Mexico, Frontiers in Artificial Intelligence and Applications, vol. 337, pp. 444 &ndash; 456, Sept. 2021.',
      'Tung T. Phan, Vinh Q. Pham, Hien D. Nguyen, Anh T. Huynh, Dung A. Tran, Vuong T. Pham<em>An Ontology-based Resume Searching System for Job Applicants in Information Technology</em>, Proceedings of 34<sup>th</sup> International Conference on Industrial, Engineering &amp; Other Applications of Applied Intelligent Systems (IEA/AIE 2021), Kuala Lumpur, Malaysia, July 2021. LNAI 12798, pp. 261 &ndash; 273, Chapter 23, Springer',
      'Anh T. Huynh, Ba-Tung Nguyen, Hoai-Thu Nguyen, Sang Vu, Hien D. Nguyen, <em>A method of Deep Reinforcement Learning for Simulated Autonomous Vehicle Control</em>, Proceedings of 16th International Conference on Evaluation of Novel Approaches to Software Engineering (ENASE 2021), pp. 372 &ndash; 379, Online streaming, April 2021.',
      'Hien D. Nguyen, Kha V. Nguyen, Suong N. Hoang, Tai Huynh, <em>Design a management system for the influencer marketing campaign on social network</em>, Proceedings of 9<sup>th</sup> International Conference on Computational Data and Social Networks (CSoNet 2020), Dallas, USA, Dec. 2020. LNCS 12575, pp. 139 - 151, Chapter 12, Springer.',
      'Xuan-Thien Pham, Tuan-Vi Tran, Van-Thanh Nguyen-Le, Vuong T. Pham, Hien Nguyen, <em>Build a search engine for the knowledge of the course about Introduction to Programming based on ontology Rela-model</em>, Proceedings of 2020 12<sup>th</sup> IEEE International Conference on Knowledge and Systems Engineering (KSE 2020), pp. 207 - 212, Can Tho, Vietnam, Nov. 2020. <strong>Best Student Paper Award.</strong>',
      'Nhon V. Do, Hien D. Nguyen, Long N. Hoang, <em>Some Techniques for Intelligent Searching on Ontology-based Knowledge domain in E-learning</em>, Proceedings of 12<sup>th</sup> International Joint Conference on Knowledge Discovery, Knowledge Engineering and Knowledge Management (IC3K 2020), Vol. 2: KEOD, pp. 313 - 320, Online streaming, Nov. 2020.',
      'Hien D. Nguyen, Tai Huynh, Son T. Luu, Suong N. Hoang, Vuong T. Pham, Ivan Zelinka, <em>Measure of the content creation score on social network using sentiment score and passion point</em>, Proceedings of 19th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET 2020), Kitakyushu, Japan, Frontiers in Artificial Intelligence and Applications, vol. 327, pp. 425 - 434, Sept. 2020.',
      'Hien D. Nguyen, Tai Huynh, Suong N. Hoang, Vuong T. Pham, Ivan Zelinka, &ldquo;<em>Language-oriented Sentiment Analysis based on the grammar structure and improved Self-attention network</em>&rdquo;, Proceedings of 15th International Conference on Evaluation of Novel Approaches to Software Engineering (ENASE 2020), pp. 339-346, Prague, Czech Public, May 2020.',
      'Trong T. Le, Son T. Luu, Hien D. Nguyen, Nhon V. Do, &ldquo;<em>Knowledge representation method for designing an Intelligent Tutoring System in Learning of courses about Algorithms</em>&rdquo;, Proceedings of 2019 25th Asia-Pacific Conference on Communications (APCC 2019), pp. 310-315, Ho Chi Minh, Vietnam, Nov. 2019.',
      'Hien D. Nguyen, Vuong T. Pham, Dung A. Tran, Trung T. Le, &ldquo;<em>Intelligent tutoring chatbot for solving mathematical problems in High-school</em>&rdquo;, Proceedings of 2019 11<sup>th</sup> IEEE International Conference on Knowledge and Systems Engineering (KSE 2019), pp.145-150, Da Nang, Vietnam, Oct. 2019.',
      'Hien D. Nguyen, Nhon V. Do, Thanh T. Mai, Vuong T. Pham, &ldquo;<em>A method for designing the Intelligent system in learning of Algorithms</em>&rdquo;, Proceedings of 18th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET 2019), Kuching, Malaysia, Frontiers in Artificial Intelligence and Applications, vol. 318, pp. 658 - 671, Sept. 2019.',
      'Hien D. Nguyen, Chiaki Sakama, &ldquo;<em>A New Algorithm for Computing Least Generalization of a Set of Atoms</em>&rdquo;, Proceedings of 29<sup>th</sup> International Conference on Inductive Logic Programming (ILP 2019), Plovdiv, Bulgaria, Sept. 2019, LNCS 11770, pp. 81-97, Chapter 8, Springer.',
      'Hien D. Nguyen, Nhon V. Do, Thanh T. Mai, Vuong T. Pham, &ldquo;<em>A method for designing the Intelligent system in learning of Algorithms</em>&rdquo;, Proceedings of 18th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET 2019), Kuching, Malaysia, Sept. 2019.',
      'Huan Pham Do, Nhon V. Do, Hien D. Nguyen, &ldquo;<em>A Consulting System for Estimating Costs of an Information Technology Hardware Project based on Law of Public Investment</em>&rdquo;, Proceedings of 7<sup>th</sup> IEEE International Conference on System Science and Engineering (ICSSE 2019), pp. 291 &ndash; 296, Quang Binh, Vietnam, July 2019.',
      'Tai Huynh, Ivan Zelinka, Xuan Hau Pham, Hien D. Nguyen, &ldquo;<em>Some measures to detect the influencer on social network based on Information Propagation</em>&rdquo;, Proceedings of 9<sup>th</sup> International Conference on Web Intelligence, Mining and Semantics (WIMS 2019), Seoul, Korea, June 2019, ACM. DOI: <a target="_blank" href="https://doi.org/10.1145/3326467.3326475">1145/3326467.3326475</a>',
      'Hien D. Nguyen, Son T. Luu, Nhon V. Do, &ldquo;<em>A method for Representation the Knowledge of Functions and Operators and Application</em>&rdquo;, Proceedings of 3<sup>rd</sup> International Conference on Machine Learning and Soft Computing (ICMLSC 2019), pp. 148-153, Da Lat, Vietnam, Jan. 2019, ACM.',
      'Thanh T. Mai, Hien D. Nguyen, Trung T. Le, Vuong T. Pham, &ldquo;<em>An Intelligent Support System for the Knowledge evaluation in high-school mathematics by Multiple choices testing</em>&rdquo;, The 5th NAFOSTED Conference on Information and Computer Science (NICS 2018), pp. 284-289, Ho Chi Minh city, Vietnam, Nov. 2018.',
      'Hien D. Nguyen, Chiaki Sakama, Taisuke Sato, Katsumi Inoue, &ldquo;<em>Computing Logic Programming Semantics in Linear Algebra</em>&rdquo;, Proceeding of 12th Multi-disciplinary International Conference on Artificial Intelligence (MIWAI 2018), Ha Noi, Vietnam, Nov. 2018, LNAI 11248, pp. 32-48, Springer.',
      'Hien D. Nguyen, Nhon V. Do, Nha P. Tran, Xuan Hau Pham, &ldquo;<em>Criteria of a Knowledge model for an Intelligent Problems Solver in Education</em>&rdquo;, Proceeding of 2018 IEEE International Conference on Knowledge and Systems Engineering (KSE 2018), 288-293, Ho Chi Minh city, Vietnam, Nov. 2018.',
      'Hien D. Nguyen, Nhon V. Do, Vuong T. Pham, <em>Rela-Ops model: A method for Knowledge Representation and Application</em>, Proceeding of 17th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET 2018), Granada, Spain, Frontiers in Artificial Intelligence and Applications, vol. 303, pp. 825 - 838, Sept. 2018.',
      'Nhon V. Do, Hien D. Nguyen, Thanh T. Mai, <em>Intelligent Educational Software in Discrete Mathematics and Graph Theory</em>, Proceeding of 17th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET 2018), Granada, Spain, Frontiers in Artificial Intelligence and Applications, vol. 303, pp. 925 - 938, Sept. 2018.',
      'Chiaki Sakama, Hien D. Nguyen, Taisuke Sato, Katsumi Inoue, <em>Partial Evaluation of Logic Programs in Vector Space</em>, 11th Workshop on Answer Set Programming and Other Computing Paradigms (ASPOCP 2018), co-located with 34<sup>th</sup> International Conference on Logic Programming (ICLP 2018), Oxford, UK, July 2018.',
      'Hien D. Nguyen, Nhon V. Do, <em>Intelligent Problems Solver in Education for Discrete Mathematics</em>, Proceeding of 16th International Conference on Intelligent Software Methodologies, Tools, and Techniques (SOMET_17), Kitakyushu, Japan, Frontiers in Artificial Intelligence and Applications, vol. 297, pp. 21-34, Sept. 2017',
      'Binh T. Nguyen, Minh H. Trinh, Tan V. Phan, Hien D. Nguyen, <em>An Efficient Real-Time Emotion Detection Using Camera and Facial Landmarks</em>, Procceding of The Seventh International Conference on Information Science and Technology (IEEE ICIST 2017), pp. 251 &ndash; 255, Da Nang, Vietnam, April 2017, <strong>DOI: </strong>1109/ICIST.2017.7926765, ISBN: 978-1-5090-5402-2',
      'Hien D. Nguyen, Diem Nguyen, Vuong T. Pham, &ldquo;<em>Design and Intelligent Problems Solver about Solid Geometry based on Knowledge model about Relation&rdquo;</em>, Proceeding of 2016 IEEE International Conferene on Knowledge and Systems Engineering (KSE 2016), pp. 150-155, Ha Noi, Vietnam, October 2016, DOI: 10.1109/KSE.2016.7758045, ISBN: 978-1-4673-8929-7',
      'Hien D. Nguyen, Vuong T. Pham, Trung T. Le, Dat H. Tran, &ldquo;<em>A Mathematical Approach for Representation Knowledge about Relations and Its Application</em>&rdquo;, Proceeding of 2015 IEEE International Conference on Knowledge and Systems Engineering (KSE 2015), pp. 324-327, Ho Chi Minh, Vietnam, October 2015.',
      'Van Nhon Do, Hien D. Nguyen,&nbsp; <em>Reducing model of COKB about Operators Knowledge and Solving problems about Operators</em>, D. Camacho et al. (eds.), <em>New Trends in Computational Collective Intelligence</em>, pp. 39-49, Studies in Computational Intelligence 572, Springer (2015)',
      'Nhon V. Do, Hien D. Nguyen, Thanh T. Mai, <em>Designing an Intelligent Problems Solving System based on Knowledge about Sample Problems, </em>Proceeding of 5<sup>th</sup>Asian conference on Intelligent Information and Database Systems (ACIIDS 2013), Kuala Lumpur, Malaysia, March 2013, LNAI 7802, pp. 465-475, Springer.',
      'Nhon V. Do, Hien D. Nguyen, &ldquo;<em>A knowledge model about Relations and Application</em>&rdquo;, In Proceeding of 4<sup>th </sup>International Conference on Data Mining and Intelligent Information Technology Applications (ICMIA 2012), ISBN: 978-89-94364-19-3, IEEE Catalog Number: CFP1213H-PRT, pp. 701-704, Taiwan, October 2012.',
      'Nhon Do, Hien Nguyen, <em>A Reasoning method on Knowledge Base of Computational Objects and Designing a System for automatically solving plane geometry problems</em>, In Proceeding of World Congress on Engineering and Computer Science 2011<em>, </em>(WCECS 2011)<em>,</em> ISBN: 978-988-18210-9-6, pp. 294-299, San Francisco, USA, October 2011.',
      'Nhon Do, Hien Nguyen, <em>A reasoning method on Computation Network and Its applications</em>, 2011 International MultiConference of Engineers and Computer Scientists, IMECS 2011, ISBN: 978-988-18210-3-4, pp. 137-141, Hongkong , March 2011.',
      'Nhon V. Do, Hien D. Nguyen, <em>Deductive Method with Sample Problems on Computational Object Knowledge Base and Construct to Intelligent Educational Softwares</em>, ICAIE 2010, ISBN: 978-1-4244-6934-5, IEEE Catalog Number: CFP1077J-PRT, pp. 805-810, HangZhou, China, October 2010.',
    ],
  },
];

export default {
  colors, about, projects, publications
}

export { colors, about, projects, publications };
