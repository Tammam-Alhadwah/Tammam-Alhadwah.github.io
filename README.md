<<<<<<< HEAD
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tammam Alhadwah | AI Specialist</title>
    <meta name="description" content="Portfolio of Tammam Alhadwah, an AI Specialist with expertise in Deep Learning, Computer Vision, and Natural Language Processing.">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
</head>
<body>
    <div id="particles-js"></div>
    <header>
        <nav>
            <a href="#home" class="nav-logo">TA</a>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- HERO SECTION -->
        <section id="home" class="hero">
            <div class="hero-content">
                <h1>Tammam Alhadwah</h1>
                <h2>AI Specialist | Computer Vision & NLP</h2>
                <p class="hero-intro">
                    Developing, fine-tuning, and deploying AI models for real-world applications. Seeking to apply technical and research capabilities in challenging roles with meaningful impact.
                </p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View My Projects</a>
                    <a href="#contact" class="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>

        <!-- ABOUT SECTION -->
        <section id="about" class="container">
            <h2 class="section-title fade-in">About Me</h2>
            <div class="about-content fade-in">
                <div class="about-image">
                    <!-- TODO: Add your professional photo here -->
                    <img src="assets/profile-photo.jpg" alt="Tammam Alhadwah">
                </div>
                <div class="about-text">
                    <p>
                        I am an AI Specialist and a dedicated Information Technology and Communication Engineering student at the Arab International University. My passion lies in bridging the gap between theoretical AI concepts and practical, real-world solutions.
                    </p>
                    <p>
                        From building autonomous robotic systems to developing conversational AI for therapeutic support, I thrive on complex challenges involving real-time deployment, custom architecture design, and advanced data processing.
                    </p>
                    <h3>Education</h3>
                    <p>
                        <strong>Bachelor of Information Technology and Communication Engineering (AI Specialization)</strong><br>
                        Arab International University – Daraa, Syria | Expected Jul 2025<br>
                        GPA: 3.0 / 4.0
                    </p>
                </div>
            </div>
        </section>

        <!-- PROJECTS SECTION -->
        <section id="projects" class="container">
            <h2 class="section-title fade-in">My Work & Projects</h2>
            <div class="projects-grid">
                
               <!-- Project 1: WAMRC -->
                <div class="project-card fade-in">
                    <div class="project-image-container">
                        <!-- Make sure your image is in the 'assets' folder -->
                        <img src="assets/wamrc-project.jpg" alt="WAMRC Project Demo" class="project-image">
                    </div>
                    <h3>Wildfire & Agricultural Monitoring Console (WAMRC)</h3>
                    <p>An AI-powered system for early wildfire and agricultural threat detection using drone footage, optimized with TensorRT for real-time performance.</p>
                    <div class="tech-stack">
                        <span>Python</span><span>PyTorch-lightning</span><span>Ultralytics</span><span>TensorRT</span>
                    </div>
                    <div class="project-links">
                        <a href="https://youtu.be/DfwStHPxuCs" target="_blank" class="btn btn-secondary">Demo Video</a>
                    </div>
                </div>
                <!-- Project 2: Laser Turret -->
                <div class="project-card fade-in">
                    <div class="project-image-container">
                        <!-- Make sure your image is in the 'assets' folder -->
                        <img src="" alt="Laser Turret Visual" class="project-image">
                    </div>
                    <div class="project-image-placeholder">Laser Turret Visual</div>
                    <h3>Automated Laser Tag Turret</h3>
                    <p>An automated turret that tracks moving targets using a YOLO model, integrating AI with Arduino-based hardware control for a real-world robotics application.</p>
                    <div class="tech-stack">
                        <span>Python</span><span>OpenCV</span><span>YOLO</span><span>TensorRT</span><span>Arduino</span>
                    </div>
                </div>

                <!-- Project 3: Arabic Chatbot -->
                <div class="project-card fade-in">
                    <div class="project-image-container">
                        <!-- Make sure your image is in the 'assets' folder -->
                        <img src="" alt="Chatbot Visual" class="project-image">
                    </div>
                    <h3>Arabic Talking Therapy Chatbot</h3>
                    <p>A generative conversational AI agent built from scratch to provide empathetic, multi-turn dialogue support in Arabic for a therapeutic setting.</p>
                    <div class="tech-stack">
                        <span>PyTorch</span><span>PyTorch Lightning</span><span>NLP</span>
                    </div>
                </div>

                <!-- Project 4: Furniture 3D -->
                <div class="project-card fade-in">
                    <div class="project-image-placeholder">3D Point Cloud Visual</div>
                    <h3>Furniture Classification using 3D Point Clouds</h3>
                    <p>A system to classify furniture from 3D point cloud data by implementing the PointNet deep learning architecture, achieving 80.4% accuracy.</p>
                    <div class="tech-stack">
                        <span>TensorFlow</span><span>Keras</span><span>3D Vision</span>
                    </div>
                </div>

                <!-- Project 5: Lane Departure -->
                <div class="project-card fade-in">
                    <div class="project-image-placeholder">Lane Departure Visual</div>
                    <h3>Lane Departure Warning System</h3>
                    <p>A real-time system built with a custom CNN to detect lane departures from dashcam imagery and suggest steering corrections.</p>
                    <div class="tech-stack">
                        <span>TensorFlow</span><span>Keras</span><span>OpenCV</span>
                    </div>
                </div>

                <!-- Project 6: Cyberbullying -->
                <div class="project-card fade-in">
                    <div class="project-image-placeholder">Cyberbullying Classifier Visual</div>
                    <h3>Cyberbullying Classification with BERT</h3>
                    <p>Fine-tuned a DistilBERT model to classify harassment in social media comments, achieving 95% accuracy after extensive data cleaning.</p>
                    <div class="tech-stack">
                        <span>Hugging Face</span><span>Pandas</span><span>NLP</span>
                    </div>
                </div>

            </div>
        </section>

        <!-- SKILLS SECTION -->
        <section id="skills" class="container">
            <h2 class="section-title fade-in">Technical Skills</h2>
            <div class="skills-content fade-in">
                <div class="skill-category">
                    <h3>AI & Machine Learning</h3>
                    <p>Computer Vision, NLP, Deep Learning, Model Development & Deployment, CNNs, Transformers, LSTMs, Transfer Learning, TensorRT</p>
                </div>
                <div class="skill-category">
                    <h3>Libraries & Frameworks</h3>
                    <p>PyTorch, PyTorch Lightning, TensorFlow, Keras, Hugging Face, Scikit-learn, OpenCV, Ultralytics, FastAPI, Flask</p>
                </div>
                <div class="skill-category">
                    <h3>Programming & Tools</h3>
                    <p>Python, Git, Google Colab, Kaggle Notebooks, Arduino</p>
                </div>
            </div>
        </section>
        
        <!-- CERTIFICATES SECTION -->
        <section id="certificates" class="container">
            <h2 class="section-title fade-in">Certifications</h2>
            <ul class="certificates-list fade-in">
                <li>AI for Autonomous Vehicles and Robotics – University of Michigan</li>
                <li>Neural Networks and Deep Learning – DeepLearning.AI</li>
                <li>Machine Learning with Python – IBM</li>
                <li>Calculus & Linear Algebra for ML – DeepLearning.AI</li>
            </ul>
        </section>

        <!-- CONTACT SECTION -->
        <section id="contact" class="container">
            <h2 class="section-title fade-in">Get In Touch</h2>
            <p class="contact-text fade-in">
                I'm actively seeking challenging AI roles and am open to discussing new projects and opportunities. Feel free to reach out.
            </p>
            <div class="contact-info fade-in">
                <p>📧 <a href="mailto:t.alhadwah@gmail.com">t.alhadwah@gmail.com</a></p>
                <p>📍 As-Suwayda, Syria</p>
            </div>
            <div class="social-links fade-in">
                <!-- TODO: Add your LinkedIn and GitHub profile links -->
                <a href="YOUR_LINKEDIN_URL" target="_blank">LinkedIn</a>
                <a href="YOUR_GITHUB_URL" target="_blank">GitHub</a>
                <!-- TODO: Add a link to a PDF of your resume -->
                <a href="YOUR_RESUME_PDF_LINK" target="_blank">Download CV</a>
            </div>
        </section>

    </main>

    <footer>
        <p>&copy; 2024 Tammam Alhadwah. All rights reserved.</p>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
=======
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <title>Legacy Social Software</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="particles-js"></div>
    <header>
        <h1>Legacy Social Software</h1>
        <p>“Religion was humanity’s first operating system.”</p>
    </header>

    <nav>
        <a href="sections/origins.html">Origins</a>
        <a href="sections/version-history.html">Version History</a>
        <a href="sections/patch-notes.html">Patch Notes</a>
        <a href="sections/next-build.html">Next Build</a>
    </nav>

    <main>
        <section id="hero">
            <p>Debugging morality for the next build.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Legacy Social Software</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
>>>>>>> 397a3a7c65c4a9d6985befa8003d85bbfdd4211a
