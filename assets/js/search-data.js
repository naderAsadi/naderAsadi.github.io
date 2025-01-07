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
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A mix of research, sideprojects and more",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-our-paper-got-accepted-to-iclr-2022-tada",
          title: 'Our paper got accepted to ICLR 2022! :tada:',
          description: "",
          section: "News",},{id: "news-our-paper-got-accepted-to-cvpr-2022-tada",
          title: 'Our paper got accepted to CVPR 2022! :tada:',
          description: "",
          section: "News",},{id: "news-i-m-joining-borealis-ai-as-a-machine-learning-research-intern",
          title: 'I’m joining Borealis AI as a Machine Learning Research Intern.',
          description: "",
          section: "News",},{id: "news-i-m-serving-as-a-reviewer-for-iccv-2023",
          title: 'I’m serving as a reviewer for ICCV 2023.',
          description: "",
          section: "News",},{id: "news-prd-got-accepted-to-icml-2023-tada",
          title: 'PRD got accepted to ICML 2023! :tada:',
          description: "",
          section: "News",},{id: "news-i-m-joining-haiper-as-a-research-scientist",
          title: 'I’m joining Haiper as a Research Scientist.',
          description: "",
          section: "News",},{id: "news-haiper-2-0-is-here-rocket",
          title: 'Haiper 2.0 is here! :rocket:',
          description: "",
          section: "News",},{id: "projects-haiper-2-0",
          title: 'Haiper 2.0',
          description: "Haiper Next Generation AI Video Model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%61%64%69.%6E%61%64%65%72%39%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/naderasadi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/naderasadi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jaLI2noAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/naderasadi_", "_blank");
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
