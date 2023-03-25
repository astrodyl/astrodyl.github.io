/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dylan Dutton",
  title: "Hey, I'm Dylan",
  subTitle: 
    "I'm a astrophysics PhD candidate at the University of North Carolina at Chapel Hill. " +
    "I'm also a part-time software engineer developing algorithms primarily in Python and Java."
  ,
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/astrodyl",
  linkedin: "https://www.linkedin.com/in/astrodyl/",
  gmail: "astrodyl@live.unc.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOLVING CHALLENGING PROBLEMS IN ASTRONOMY AND NATIONAL DEFENSE",
  skills: [
    emoji("⚡ Develop algorithms with a focus on automation"),
    emoji("⚡ Create open source tools tailored towards education in astronomy"),
    emoji("⚡ Conduct original, high impact research in physics and cosmology"),
    emoji("⚡ Continuously learning about physics, astronomy, and computer science"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "flask",
    //   fontAwesomeClassname: "fab fa-flask"
    // },
    // {
    //   skillName: "cpp",
    //   fontAwesomeClassname: "fab fa-c"
    // },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Carolina at Chapel Hill",
      logo: require("./assets/images/uncLogo.png"),
      subHeader: "Doctorate in Philosophy Physics",
      duration: "August 2021 - Present",
      desc: "Determining the expansion rate of the universe",
      descBullets: [
        "Using Skynet to observe electromagnetic counterparts to gravitational-wave events",
        "Performing MCMC on on observational data to generate likely parameters and light curves",
        "Will result in the measurement of the rate at which the universe expands"
      ]
    },
    {
      schoolName: "University of North Carolina at Chapel Hill",
      logo: require("./assets/images/uncLogo.png"),
      subHeader: "Master of Science in Physics",
      duration: "August 2019 - May 2021",
      desc: "Developed a fully automated observing algorithm for Skynet",
      descBullets: [
        "Designed and developed the database, core algorithm, and user interface",
        "Daily software development using Python, C++, SQL, and Javascript",
      ]
    },
    {
      schoolName: "University of North Carolina at Chapel Hill",
      logo: require("./assets/images/uncLogo.png"),
      subHeader: "Bachelor of Science in Physics",
      duration: "August 2015 - May 2018",
      desc: "Conducted research in astronomy for all three years",
      descBullets: ["Robert Shelton Award for Excellence in Research"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Applied Research Associates",
      companylogo: require("./assets/images/araLogo.png"),
      date: "July 2022 – Present",
      desc: "Working the automation of a (classified) computer vision project",
    },
    {
      role: "Software Engineer",
      company: "Skynet Robotic Telescope Network",
      companylogo: require("./assets/images/skynetLogo.png"),
      date: "May 2018 – August 2019",
      desc: "Designed, developed, and deployed a fully autonomous observing routine that " +
      "interacts with dozens of robotic telescopes around the world"
    },
    {
      role: "Researcher",
      company: "Skynet Robotic Telescope Network",
      companylogo: require("./assets/images/skynetLogo.png"),
      date: "May 2016 – Present",
      desc: "Performing original research on various challenging problems in astronomy including " +
      "image analaysis, modelling, and automated observing"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Campaign Manager",
      projectDesc: "Fully autonomous observing algorithm designed to observe rapidly evolvine transient events",
      footerLink: [
        {
          name: "Read paper",
          url: "https://arxiv.org/abs/2210.08613"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Radio Cartographer",
      projectDesc: "Model astronomical radio data and generate scientifically accurate images",
      footerLink: [
        {
          name: "Read paper",
          url: "https://arxiv.org/abs/1808.06128"
        },
        {
          name: "View code",
          url: "https://github.com/SkynetRTN/radio-cartographer"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Plotting Tools for Skynet",
      projectDesc: "Open source educational astronomy plotting tools used by thousands of students",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skynet.unc.edu/ASTR101L/graph/"
        },
        {
          name: "View code",
          url: "https://github.com/SkynetRTN/skynet-plotting"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "astrodyl@live.unc.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
