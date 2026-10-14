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
            desc: "Built in October 2026. I trained a TF-IDF + logistic regression spam detector on 5,171 unique SMS messages, compared standard and balanced models, and selected the stronger option. The project includes a Flask API and a JavaScript frontend where users enter a message and get a spam verdict, uncertainty flag, and score. It taught me how to turn a machine learning model into a working app and how to explain the limits of the model clearly. The reported 97.4% accuracy and 0.898 spam F1-score describe the original two-label classifier; the uncertain category is an experimental review rule, and scores are model estimates.",
            stack: ["Python", "scikit-learn", "Flask", "HTML", "CSS", "JavaScript"]
        }
    ]
};