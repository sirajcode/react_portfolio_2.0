import {HomeIcon,TerminalIcon,ProfileIcon} from '../Components/Styled/Utilities'

// Nav section Links
import resume from './oldpc.png'

// Nav Section
export const NavData = [
    { id: 1, icon :<HomeIcon/>, name: `home`, link: '/',},
    { id: 2, icon:<TerminalIcon/>,name: `projects`,link: '#project',},
    { id: 3, icon: <ProfileIcon />, name: `resume`, link: resume, attr: '' }];
     
//Header Section 
import oldpc from './oldpc.png'
export const HeaderData = {
    title: `M. Siraj`,
    text: `Front-end developer`,
    desc: `Engineering professional familiar with RWD and a firm believer in Mobile - first approach skilled with Javascript and React js.Mostly I use Javascript, React js, Html, CSS, Styled-components, Tailwind, Bootstrap, and Material UI for crafting beautiful user interfaces.`,
    link: oldpc,
};

// skills section
export const SkillsData = {
    skilltitle: `Skills`,
    skill1: `JAVASCRIPT / REACT JS.`,
    skill2: `CSS / SASS / Styled Component /   Bootstrap / Tailwind`,
    skill3: `Rest Api`,
};

//Projects Section
export const Protitle = `Projects`;
export const ProjectsData = [ {
        id: 1, title: `Studio - design system`,
        link: 'https://github.com/engsiraj/studio',
        detail: `Front-end ui design system build with react and styled-components is mainly focused for designing user interfaces using true reuseable components with ux and ui needs.`
    },
     {
        id: 1, title: `Design Source, Design system`,
        link: 'https://github.com/engsiraj/designsource',
        detail: `Front-end ui design system build with css and flexbox is mainly focused for designing user interfaces using css with ux and ui needs.`
    },
     {
        id: 2, title: `Netflix Landing Page Clone`,
        link: 'https://github.com/engsiraj/netflixclone',
        detail: `Netflix landing page build with react js styled with styled-compnent using mordren design approach.`
    },
    
    {
        id: 3, title: `React Portfolio 2.0`,
        link: 'https://github.com/eng/portfolio-2.0',
        detail: `The crrunt landing page is build with react js using styled-compnents. design system approach used to achieve the truly reusable components.`
    },
    {
        id: 4, title: `React Portfolio`,
        link: 'https://github.com/engsiraj/React-portfolio',
        detail: `React portfolio app build with react js using css for styling to showcase the student portfolio from last years`
    },
    {
        id: 5, title: `Product Landing Page`,
        link: 'https://github.com/engsiraj/product-landingpage',
        detail: `Product landing page is build with react js and css for detailed showcase of product`
    },
   ];

//Footer Section
export const Links = [
    {id: 1, name: `linkedin`, link: 'https://www.linkedin.com/in/engsiraj/', },
    {id: 2, name: `github`,link: 'https://github.com/engsiraj',},
    {id: 3, name: `mail`,link: 'mailto:sirajbhutta50@gmail.com',}
];
