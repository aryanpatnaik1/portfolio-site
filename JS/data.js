const CONFIG = {
    profile: {
        firstName: "Aryan",
        lastName: "Patnaik",
        title: "CS Student",
        bio: "Focused on building high-performance web applications and minimalist interfaces. Currently studying at Rutgers University.",
        email: "apatnaik2005@gmail.com",
        resume: "Assets/resume.pdf"
    },
    socials: [
        { name: "GitHub", url: "https://github.com/aryanpatnaik1", icon: "fab fa-github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/aryan-patnaik-94a6b3345/", icon: "fab fa-linkedin" }
    ],
    projects: [
        {
            title: "SMS Spam Detector",
            desc: "Built October 2026. I trained a TF-IDF and logistic regression spam filter on 5,171 unique SMS messages, compared standard and balanced models, and deployed the selected model through a Flask API with a JavaScript frontend. The app lets users enter a text and receive a spam verdict, uncertainty flag, and model score, with validation and loading states to make the experience more reliable. This project taught me how to move from experimentation to a working product: the reported 97.4% accuracy and 0.898 spam F1-score describe the original two-label classifier, while the uncertain category is an experimental review rule and the displayed scores are model estimates. It runs locally and is not publicly deployed yet.",
            stack: ["Python", "scikit-learn", "Flask", "HTML", "CSS", "JavaScript"]
        }
    ]
};