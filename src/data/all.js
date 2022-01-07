const allData = [
    {
        id: 1,
        imgPath:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBgGxgVRxC-7dEEeFc-Ma1OK5VaHE5-6GtCGxgid_ssrwlxraXimna8GUdqwnO3BhK2xY&usqp=CAU",
        name: "LeetCode",
        url: "https://leetcode.com",
        domain: "Data Structures and Algorithms",
        desc: "LeetCode is one of the most well-known online judge platforms that you can use to practice your programming skills by solving coding questions. It has over 1,100 different problems, support for over 18 programming languages, and an active community that is always there to help you with the solutions you come up with. ",
    },
    {
        id: 2,
        imgPath:
            "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s900-c-k-c0x00ffffff-no-rj",
        name: "FreeCodeCamp",
        url: "https://freecodecamp.org",
        domain: "Web Development",
        desc: "freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone.",
    },
    {
        id: 3,
        imgPath:
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200x200-min.png",
        name: "GeeksForGeeks",
        url: "https://geeksforgeeks.org",
        domain: "Data Structures and Algorithms",
        desc: "A computer science portal for geeks, by geeks. GeeksforGeeks.org was created with a goal in mind to provide well written, well thought and well explained solutions for selected questions. The core team of five super geeks constituting of technology lovers and computer science enthusiasts have been constantly working in this direction .",
    },
    {
        id: 11,
        imgPath:
            "https://www.inovex.de/wp-content/uploads/2021/04/training-python.png",
        name: "Python Docs",
        url: "https://docs.python.org/3/",
        domain: "Programming",
        desc: "Learn python, an interpreted, object-oriented, high-level programming language with dynamic semantics. Learn all its modules, APIs, usage and all from the easy to read and understand official documentation",
    },
    {
        id: 4,
        imgPath:
            "https://pbs.twimg.com/profile_images/853541927781904384/LKvUgs4u_400x400.jpg",
        name: "The Odin Project",
        url: "https://theodinproject.com",
        domain: "Web Development",
        desc: "The Odin Project is one of those 'What I wish I had when I was learning' resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.",
    },
    {
        id: 5,
        imgPath: "https://reactjs.org/logo-og.png",
        name: "ReactJS Docs",
        url: "https://reactjs.org/docs/getting-started.html",
        domain: "Web Development",
        desc: "React is a JavaScript library for building user interfaces, developed by Facebook. Become a reactjs master by learning the basic and advanced stuff from the official docs.",
    },
    {
        id: 6,
        imgPath:
            "https://codeforces.org/s/12636/images/codeforces-telegram-square.png",
        name: "CodeForces",
        url: "https://codeforces.com/",
        domain: "Competitive Programming",
        desc: "Codeforces is a website that hosts competitive programming contests. It is maintained by a group of competitive programmers from ITMO University led by Mikhail Mirzayanov. Since 2013, Codeforces claims to surpass Topcoder in terms of active contestants. As of 2018, it has over 600,000 registered users. ",
    },
    {
        id: 7,
        imgPath:
            "https://pbs.twimg.com/profile_images/1410707398021550084/MmGTT4dY_400x400.jpg",
        name: "SoloLearn",
        url: "https://www.sololearn.com/",
        domain: "Programming",
        desc: "Sololearn is an amazing app, best for people who are beginners in programming. It is an online and mobile learning platform that offers free coding classes in 13 different programming disciplines. The learning content is jointly created by SoloLearn and, increasingly, community contributors. The courses are free.",
    },
    {
        id: 8,
        imgPath:
            "https://images.codecademy.com/social/logo-codecademy-social.png",
        name: "Codecademy",
        url: "https://www.codecademy.com/",
        domain: "Programming",
        desc: "Codecademy is an online interactive platform that offers free coding classes in 12 different programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, Swift, and Sass, as well as markup languages HTML and CSS",
    },
    {
        id: 9,
        imgPath:
            "https://styles.redditmedia.com/t5_2lezj1/styles/communityIcon_k7ybuxlmkgu41.jpg",
        name: "FullStack Open",
        url: "https://fullstackopen.com/en/",
        domain: "Web Development",
        desc: "Full stack open is a free online course organized by University of Helsinki and some top-notch Finnish companies. Stack is very up-to-date: single-page-app development using latest React, Redux, Node. js and MongoDB and course contains also GraphQL tutorial.",
    },
    {
        id: 10,
        imgPath:
            "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
        name: "Hackerrank",
        url: "https://www.hackerrank.com/",
        domain: "Programming",
        desc: "HackerRank is a place where programmers from all over the world come together to solve problems in a wide range of Computer Science domains. It supports multiple languages and techs such as JS, C++, Python, Java, SQL, etc.",
    },
    {
        id: 12,
        imgPath:
            "https://i1.sndcdn.com/avatars-000187997749-n2xz2w-t500x500.jpg ",
        name: "Hackerearth",
        url: "https://www.hackerearth.com/practice/",
        domain: "Programming",
        desc: "HackerEarth lets you engage or source top developers with hackathons, while also enabling you to assess, interview and upskill them with ease. One can practice problems of Basic Programming, Data Structures, Algorithms, Math, Machine Learning, Python here.",
    },
    {
        id: 13,
        imgPath:
            "https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s900-c-k-c0x00ffffff-no-rj",
        name: "FreeCodeCamp YouTube",
        url: "https://www.youtube.com/c/Freecodecamp",
        domain: "Programming",
        desc: "Learn numerous trending techs and programming languages from best-in-their-field teachers at the FreeCodeCamp YouTube channel through indepth video content.",
    },
    {
        id: 14,
        imgPath:
            "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s900-c-k-c0x00ffffff-no-rj",
        name: "Traversy Media YouTube",
        url: "https://www.youtube.com/c/TraversyMedia",
        domain: "Programming",
        desc: "Learn JavaScript and Python related technologies from Brad Traversy of Traversy Media at his YouTube channel having almost 1.7 million subscribers.",
    },
    {
        id: 15,
        imgPath:
            "https://creatorchannels.com/wp-content/uploads/2018/11/The-Net-Ninja.jpg",
        name: "The Net Ninja YouTube",
        url: "https://www.youtube.com/c/TheNetNinja",
        domain: "Programming",
        desc: "The Net Ninja, Shawn is known for his to the point video playlist courses on Web dev related technolgies.With over 800K subscribers, he is one of the best in game on YouTube.",
    },
]

export default allData
