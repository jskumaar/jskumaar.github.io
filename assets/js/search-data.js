// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "For a detailed list of publications, check my  google scholar page .",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Some of my exciting projects. My research statement can be found here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Last updated April 2025.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-co-organized-the-aaai-fall-symposium-on-agent-teaming-in-mixed-motive-situations",
          title: 'Co-organized the AAAI Fall Symposium on Agent Teaming in Mixed-Motive Situations.',
          description: "",
          section: "News",},{id: "news-presented-at-the-hri-2024-workshop-on-explainability-in-human-robot-collaboration-sharing-work-on-modeling-human-learning-from-robot-demonstrations",
          title: 'Presented at the HRI 2024 Workshop on Explainability in Human-Robot Collaboration, sharing work...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-the-microsoft-leaders-in-robotics-and-ai-seminar-university-of-maryland-on-machine-teaching-for-transparent-decision-making-in-human-robot-teams",
          title: 'Gave an invited talk at the Microsoft Leaders in Robotics and AI Seminar,...',
          description: "",
          section: "News",},{id: "news-presented-at-iros-2024-the-work-on-explainable-robot-decision-making-in-groups-titled-understanding-robot-minds-leveraging-machine-teaching-for-transparent-human-robot-collaboration-across-diverse-groups",
          title: 'Presented at IROS 2024 the work on explainable robot decision-making in groups, titled...',
          description: "",
          section: "News",},{id: "projects-explainable-ai-decision-making-in-human-ai-groups",
          title: 'Explainable AI Decision-Making in Human-AI Groups',
          description: "A closed-loop machine teaching framework that uses explainable robot demonstrations and particle filters to model and adapt to individual and group beliefs, improving human understanding of robot decision-making in teams.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-automatic-detection-of-unexpected-ai-behavior-from-human-cues",
          title: 'Automatic Detection of Unexpected AI Behavior from Human Cues',
          description: "Evaluating the detection of unexpected AI behavior in autonomous vehicles by analyzing subtle human emotional cues",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-pedestrian-behavior-modeling",
          title: 'Pedestrian Behavior Modeling',
          description: "Developing explainable models of long-term urban pedestrian behavior",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-trustworthy-interaction-between-automated-vehicles-and-pedestrians",
          title: 'Trustworthy Interaction Between Automated Vehicles and Pedestrians',
          description: "Understanding and improving pedestrian trust in automated vehicles through behavioral studies and predictive models for safe, interpretable AV-pedestrian interactions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-trustworthy-interaction-between-autonomous-vehicles-and-drivers",
          title: 'Trustworthy interaction between autonomous vehicles and drivers',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-team-cooperation-dynamics-in-mixed-motive-teams",
          title: 'Team cooperation dynamics in mixed-motive teams',
          description: "Studying factors that shape cooperation in mixed-motive human-AI teams through interactive online games.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%72%65%73%68%6B%6A@%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jskumaar", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'Socials',
        handler: () => {
          window.open("https://gitlab.com/jskumaar", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jskumaar", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4874-8582", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Socials',
        handler: () => {
          window.open("https://publons.com/a/AAT-7761-2021/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8H5KVN8AAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
