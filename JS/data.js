const CONFIG = {
    profile: {
        firstName: "Aryan",
        lastName: "Patnaik",
        title: "CS Student",
        bio: "Focused on building high-performance web applications and minimalist interfaces. Currently studying at Rutgers University.",
        email: "apatnaik2005@gmail.com",
        resume: "Assets/newresume.pdf"
    },
    socials: [
        { name: "GitHub", url: "https://github.com/aryanpatnaik1", icon: "fab fa-github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/aryan-patnaik-94a6b3345/", icon: "fab fa-linkedin" }
    ],
    projects: [
        {
            title: "SMS Spam Detector",
            repo: "https://github.com/aryanpatnaik1/sms-spam-detector",
            desc: "I trained a TF-IDF + logistic regression spam detector on 5,171 unique SMS messages and turned it into a working local app.",
            details: "I compared standard and balanced logistic regression, selected the stronger model, and achieved 97.4% accuracy with a 0.898 spam F1-score on a held-out test set. The app uses a Flask API and a JavaScript frontend so users can enter a message and receive a verdict, uncertainty flag, and score. The reported metrics describe the original two-label classifier; the uncertain category is an experimental review rule, and scores are model estimates.",
            stack: ["Python", "scikit-learn", "Flask", "HTML", "CSS", "JavaScript"]
        }
    ]
};