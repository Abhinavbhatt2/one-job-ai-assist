<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ONE JOB - Land Your Dream Job with AI Power</title>
    <style>
        /* CSS Reset and Basic Setup */
        :root {
            --primary-blue: #4F46E5;
            --primary-purple: #8B5CF6;
            --dark-blue: #1E293B;
            --slate-gray: #475569;
            --light-gray: #F1F5F9;
            --light-lavender: #F5F3FF;
            --white: #FFFFFF;
            --text-dark: #1F2937;
            --text-light: #64748B;
            --green: #10B981;
            --orange: #F97316;
            --red: #EF4444;
            --gradient: linear-gradient(90deg, var(--primary-blue), var(--primary-purple));
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        /* Using a common font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        html {
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--white);
            color: var(--text-dark);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        section {
            padding: 80px 0;
        }

        h1, h2, h3 {
            font-weight: 700;
            line-height: 1.2;
        }

        h1 {
            font-size: 4rem;
            color: var(--text-dark);
        }

        h2 {
            font-size: 2.5rem;
            color: var(--text-dark);
            text-align: center;
            margin-bottom: 20px;
        }

        h1 span, h2 span {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }

        p {
            color: var(--text-light);
            font-size: 1.1rem;
        }
        
        .section-subtitle {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 50px;
            font-size: 1.1rem;
        }

        .btn {
            display: inline-block;
            padding: 12px 28px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
        }

        .btn-primary {
            background: var(--gradient);
            color: var(--white);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-secondary {
            background: var(--white);
            color: var(--primary-blue);
            border: 2px solid var(--primary-blue);
        }

        .btn-secondary:hover {
            background: var(--light-lavender);
        }

        .btn-dark {
            background-color: var(--dark-blue);
            color: var(--white);
        }

        .btn-dark:hover {
             background-color: var(--slate-gray);
        }
        
        /* Header */
        .header {
            background-color: var(--white);
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .main-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-blue);
        }

        .nav-logo svg {
            width: 28px;
            height: 28px;
        }

        .nav-menu {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 30px;
            margin: 0;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--slate-gray);
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--primary-blue);
        }
        
        .nav-btn {
            padding: 10px 24px;
            font-size: 0.95rem;
            border-radius: 6px;
        }

        #mobile-nav-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-around;
            width: 30px;
            height: 24px;
            background: transparent;
            border: none;
            cursor: pointer;
            z-index: 2000;
        }

        #mobile-nav-toggle span {
            width: 30px;
            height: 3px;
            background: var(--dark-blue);
            border-radius: 10px;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
        }

        /* Hero Section */
        .hero {
            padding: 100px 0;
            text-align: center;
            background-color: var(--light-lavender);
        }

        .hero h1 {
            max-width: 800px;
            margin: 20px auto;
        }

        .hero p {
            max-width: 600px;
            margin: 0 auto 30px;
        }

        .hero-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 60px;
        }
        
        .hero-features {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }
        
        .hero-feature-card {
            background: var(--white);
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            gap: 15px;
            width: 320px;
        }

        .hero-feature-card .icon { color: var(--primary-purple); }
        .hero-feature-card h3 { font-size: 1.1rem; font-weight: 600; color: var(--text-dark); }
        .hero-feature-card p { font-size: 0.9rem; color: var(--text-light); }

        /* AI Powered Services Section */
        #ai-services {
            background-color: var(--light-lavender);
        }
        
        .ai-services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
        }

        .ai-card {
            background: var(--white);
            border-radius: 16px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 5px 25px rgba(0,0,0,0.06);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }
        
        .ai-card .icon { height: 48px; width: 48px; margin-bottom: 20px; }
        .ai-card h3 { font-size: 1.2rem; margin-bottom: 10px; font-weight: 600; }
        .ai-card p { font-size: 0.9rem; color: var(--text-light); margin-bottom: 25px; }

        .ai-card .btn-light {
            background-color: var(--light-lavender);
            color: var(--primary-purple);
            font-weight: 600;
            border: 1px solid #ddd6fe;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        .ai-card .btn-light:hover { background-color: #ede9fe; }
        
        .explore-btn-container {
            text-align: center;
            margin-top: 50px;
        }
        
        /* Recommended Way Section */
        #how-it-works {
            background-color: var(--white);
        }
        
        .how-it-works-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
        }
        
        .step-card {
            background: var(--white);
            border-radius: 16px;
            padding: 25px;
            text-align: center;
            box-shadow: 0 5px 25px rgba(0,0,0,0.06);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .step-card .step-label {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--primary-blue);
            margin-bottom: 15px;
            display: block;
        }
        .step-card .icon { height: 40px; width: 40px; margin-bottom: 15px; }
        .step-card h3 { font-size: 1.1rem; margin-bottom: 10px; font-weight: 600; }
        .step-card p { font-size: 0.85rem; color: var(--text-light); margin-bottom: 20px; line-height: 1.5; }
        
        .step-card .btn-light-blue {
            background-color: #e0e7ff;
            color: var(--primary-blue);
            font-weight: 600;
            border: 1px solid #c7d2fe;
            width: 100%;
            font-size: 0.9rem;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: auto;
        }
        .step-card .btn-light-blue:hover { background-color: #c7d2fe; }

        /* Premium Services Section */
        #services {
            background-color: var(--light-gray);
        }
        
        #services .section-subtitle { font-size: 1rem; }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            align-items: stretch;
        }

        .service-card {
            background: var(--white);
            border: 1px solid #e2e8f0;
            border-radius: 16px;
            padding: 40px 25px 30px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            box-shadow: 0 4px 25px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
        }
        
        .most-popular-badge {
            position: absolute; top: -15px; left: 50%;
            transform: translateX(-50%);
            background: var(--gradient);
            color: var(--white);
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 600;
        }
        
        .service-card.popular {
            border: 2px solid var(--primary-blue);
            box-shadow: 0 10px 30px rgba(79, 70, 229, 0.1);
        }

        .service-card .icon { height: 36px; width: 36px; margin: 0 auto 15px; display: block; }
        .service-card h3 { font-size: 1.25rem; margin-bottom: 10px; font-weight: 700; min-height: 60px; display: flex; align-items: center; justify-content: center; }
        .service-card .description { font-size: 0.85rem; color: var(--text-light); line-height: 1.5; margin-bottom: 20px; flex-grow: 1; }
        .service-card ul { list-style: none; text-align: left; margin: 0 auto 25px; width: fit-content; }
        .service-card ul li { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; font-size: 0.9rem; color: var(--slate-gray); }
        .service-card ul li .icon { height: 18px; width: 18px; margin: 0; color: var(--green); }
        .service-card .price { font-size: 1.7rem; font-weight: 700; color: var(--text-dark); margin: auto 0 20px 0; }
        .service-card .btn { border-radius: 50px; padding: 12px 24px; font-weight: 600; font-size: 0.95rem; width: 100%; }
        .service-card.popular .btn { background: var(--gradient); color: var(--white); }
        .service-card:not(.popular) .btn { background-color: var(--dark-blue); color: var(--white); }
        
        /* Other Sections */
        .custom-solutions { text-align: center; padding: 40px 0; background-color: var(--white); }
        .custom-solutions .btn-secondary { border-width: 2px; padding: 14px 32px; }
        #why-us { background-color: var(--light-lavender); }
        #why-us .section-subtitle { display: block; text-align: center; margin-bottom: 10px; color: var(--primary-blue); font-weight: 600; }
        #why-us .subtext { max-width: 800px; margin: 0 auto 50px; text-align: center; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        .stat-card { background: var(--white); padding: 30px; border-radius: 12px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
        .stat-card .icon { height: 48px; width: 48px; margin: 0 auto 15px; }
        .stat-card .number { font-size: 2.5rem; font-weight: 700; color: var(--text-dark); }
        .stat-card .label { font-size: 1rem; color: var(--text-light); }
        .advantage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
        .advantage-list h2 { text-align: left; }
        .advantage-list ul { list-style: none; margin-top: 30px; }
        .advantage-list li { margin-bottom: 25px; padding-left: 30px; position: relative; }
        .advantage-list li::before { content: '•'; position: absolute; left: 0; top: -2px; font-size: 1.5rem; font-weight: bold; }
        .advantage-list li:nth-child(1)::before { color: #3b82f6; }
        .advantage-list li:nth-child(2)::before { color: #8b5cf6; }
        .advantage-list li:nth-child(3)::before { color: #10b981; }
        .advantage-list h3 { font-size: 1.2rem; margin-bottom: 5px; color: var(--text-dark); }
        .advantage-cta-box { background: var(--gradient); color: var(--white); padding: 40px; border-radius: 16px; }
        .advantage-cta-box h2 { color: var(--white); text-align: left; font-size: 2rem; }
        .advantage-cta-box p { color: var(--light-lavender); margin-bottom: 30px; }
        .advantage-cta-box ul { list-style: none; }
        .advantage-cta-box li { margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
        .advantage-cta-box .icon { height: 20px; width: 20px; }
        #contact { background-color: var(--light-lavender); }
        .contact-wrapper { display: grid; grid-template-columns: 1.5fr 1fr; gap: 50px; background-color: var(--white); padding: 50px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .contact-form h3 { font-size: 1.8rem; margin-bottom: 20px; }
        .form-row { display: flex; gap: 20px; margin-bottom: 20px; }
        .form-group { flex: 1; display: flex; flex-direction: column; }
        .form-group label { font-size: 0.9rem; font-weight: 500; margin-bottom: 5px; color: var(--text-light); }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem; }
        .form-group textarea { min-height: 120px; resize: vertical; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: var(--primary-blue); box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2); }
        .contact-form .btn-primary { width: 100%; display: flex; justify-content: center; align-items: center; gap: 10px; }
        .contact-info .info-card { background: var(--light-gray); padding: 20px; border-radius: 12px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        .contact-info .icon { color: var(--primary-blue); height: 24px; width: 24px; }
        .contact-info .info-card div p { font-size: 0.9rem; margin: 0; color: var(--slate-gray); }
        .contact-info .info-card div p:first-child { font-weight: 600; color: var(--text-dark); }
        .free-consultation-box { background: var(--gradient); padding: 25px; border-radius: 12px; color: var(--white); }
        .free-consultation-box h3 { color: var(--white); font-size: 1.2rem; }
        .free-consultation-box p { font-size: 0.9rem; color: var(--light-lavender); margin-bottom: 20px; }
        .free-consultation-box .btn { background: var(--white); color: var(--primary-blue); width: 100%; }
        .footer { background-color: var(--dark-blue); color: #94a3b8; padding: 60px 0 20px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px; padding-bottom: 40px; border-bottom: 1px solid var(--slate-gray); }
        .footer-about .logo { display: inline-block; padding: 8px 20px; background: var(--gradient); color: var(--white); font-weight: 700; border-radius: 50px; font-size: 1.2rem; margin-bottom: 20px; }
        .footer-about p { color: #94a3b8; font-size: 0.95rem; max-width: 350px; }
        .social-icons { display: flex; gap: 15px; margin-top: 20px; }
        .social-icons a { color: #94a3b8; transition: color 0.3s ease; }
        .social-icons a:hover { color: var(--white); }
        .footer-links h3 { color: var(--white); font-size: 1.2rem; margin-bottom: 20px; }
        .footer-links ul { list-style: none; }
        .footer-links li { margin-bottom: 10px; }
        .footer-links a { color: #94a3b8; text-decoration: none; transition: color 0.3s ease; }
        .footer-links a:hover { color: var(--white); }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; font-size: 0.9rem; }
        .footer-bottom-links a { color: #94a3b8; text-decoration: none; margin-left: 20px; }
        .footer-bottom-links a:hover { color: var(--white); }
        .sticky-footer-banner { position: fixed; bottom: 0; left: 0; width: 100%; background: var(--gradient); color: var(--white); padding: 15px; text-align: center; font-size: 1rem; z-index: 1000; }
        .sticky-footer-banner a { color: var(--white); font-weight: 600; text-decoration: underline; }

        /* Responsive Design */
        @media (max-width: 1200px) {
            .services-grid, .ai-services-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .how-it-works-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (max-width: 992px) {
            h1 { font-size: 3rem; }
            h2 { font-size: 2.2rem; }
            .nav-menu { position: fixed; top: 80px; right: -100%; width: 100%; height: calc(100vh - 80px); background: var(--white); flex-direction: column; align-items: center; justify-content: flex-start; gap: 30px; padding: 40px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: right 0.4s ease-in-out; }
            .nav-menu.active { right: 0; }
            .nav-links { flex-direction: column; gap: 20px; text-align: center; }
            .nav-links a { font-size: 1.5rem; }
            .nav-btn { width: 80%; max-width: 300px; padding: 14px; font-size: 1.1rem; }
            #mobile-nav-toggle { display: flex; }
            #mobile-nav-toggle.open span:nth-child(1) { transform: rotate(45deg); }
            #mobile-nav-toggle.open span:nth-child(2) { opacity: 0; transform: translateX(20px); }
            #mobile-nav-toggle.open span:nth-child(3) { transform: rotate(-45deg); }
            .stats-grid, .advantage-grid, .contact-wrapper, .services-grid, .ai-services-grid, .how-it-works-grid { grid-template-columns: 1fr; }
            .advantage-grid { gap: 30px; }
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
            .footer-about p { margin: 0 auto; }
            .social-icons { justify-content: center; }
        }
        
        @media (max-width: 768px) {
            section { padding: 60px 0; }
            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            .hero-buttons { flex-direction: column; align-items: center; }
            .hero-feature-card { width: 100%; }
            .how-it-works-grid { grid-template-columns: 1fr; }
            .form-row { flex-direction: column; }
            .contact-wrapper { padding: 30px 20px; }
            .footer-bottom { flex-direction: column; gap: 10px; }
        }
        
        @media (max-width: 480px) {
            .container { padding: 0 15px; }
            .hero { padding: 60px 0; }
            .btn { width: 100%; text-align: center; }
            .hero-buttons { width: 80%; margin-left: auto; margin-right: auto; }
        }
    </style>
</head>
<body>

    <header class="header">
        <div class="container">
            <nav class="main-nav">
                <a href="#" class="nav-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2a1.5 1.5 0 0 1 1.5 1.5v.093c.368.04.717.123 1.045.242A4.008 4.008 0 0 1 15 7.5v4.316a4.015 4.015 0 0 1-1.313 2.923c-.792.792-1.85.987-2.827.8A5.992 5.992 0 0 1 5 13.5V7.5a4.008 4.008 0 0 1 3.455-3.965A4.01 4.01 0 0 1 9.5 3.593V3.5ZM6.5 7.5c0 1.294.62 2.454 1.59 3.167a.75.75 0 0 0 1.341-.708A2.5 2.5 0 0 0 8 7.5a.5.5 0 0 1 1 0 2.5 2.5 0 0 0-1.519 2.959.75.75 0 0 0 1.341.708A3.493 3.493 0 0 0 13.5 7.5a.5.5 0 0 1 1 0 4.5 4.5 0 0 1-9 0 .5.5 0 0 1 1 0Z" />
                    </svg>
                    <span>One Job</span>
                </a>
                <div class="nav-menu" id="nav-menu">
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#why-us">How It Works</a></li>
                        <li><a href="#">Testimonials</a></li>
                    </ul>
                    <a href="#contact" class="btn btn-primary nav-btn">Get Started</a>
                </div>
                <button id="mobile-nav-toggle" aria-label="Open navigation menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero" id="hero">
            <div class="container">
                <h1>Land Your Dream Job with <span>AI Power</span></h1>
                <p>Revolutionary AI-powered platform that optimizes your entire job search journey. From resume crafting to interview mastery - we've got you covered.</p>
                <div class="hero-buttons">
                    <a href="#contact" class="btn btn-primary">Start Your Journey →</a>
                    <a href="#services" class="btn btn-secondary">View Services</a>
                </div>
                <div class="hero-features">
                    <div class="hero-feature-card">
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
                        </div>
                        <div>
                            <h3>AI-Powered Optimization</h3>
                            <p>Smart algorithms tailored for success</p>
                        </div>
                    </div>
                    <div class="hero-feature-card">
                        <div class="icon">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>
                        </div>
                        <div>
                            <h3>Personalized Strategy</h3>
                            <p>Custom approach for your career goals</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- NEW SECTION: AI POWERED SERVICES -->
        <section id="ai-services">
            <div class="container">
                <h2><span>AI Powered</span> Services</h2>
                <p class="section-subtitle">Leverage cutting-edge AI technology to supercharge your job search with intelligent, personalized solutions</p>
                <div class="ai-services-grid">
                    <div class="ai-card">
                        <svg class="icon" style="color: var(--primary-blue);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
                        <h3>Get Job Fit Analysis</h3>
                        <p>AI analyzes your profile against job requirements to show compatibility percentage and improvement areas.</p>
                        <a href="#" class="btn btn-light">Try Now →</a>
                    </div>
                    <div class="ai-card">
                        <svg class="icon" style="color: var(--green);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
                        <h3>Generate Custom Cover Letter</h3>
                        <p>Create personalized cover letters tailored to specific job descriptions and company culture.</p>
                        <a href="#" class="btn btn-light">Try Now →</a>
                    </div>
                    <div class="ai-card">
                        <svg class="icon" style="color: var(--primary-purple);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.512 2.72a9.094 9.094 0 0 1 3.741-.479 3 3 0 0 1-4.682-2.72M12 18.72v-5.25A2.25 2.25 0 0 1 14.25 11.25h1.5A2.25 2.25 0 0 1 18 13.5v5.25m-6-5.25v5.25A2.25 2.25 0 0 0 8.25 11.25h-1.5A2.25 2.25 0 0 0 4.5 13.5v5.25m15-7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-9 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z" /></svg>
                        <h3>Get Contact Detail of HR</h3>
                        <p>Find verified HR contact information and decision makers for your target companies.</p>
                        <a href="#" class="btn btn-light">Try Now →</a>
                    </div>
                    <div class="ai-card">
                        <svg class="icon" style="color: var(--orange);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 6.5 4.5h.75c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-.75a2.25 2.25 0 0 1-2.25-2.25V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 0 0 1.123-.08" /></svg>
                        <h3>Generate Custom Resume</h3>
                        <p>AI creates targeted resumes optimized for specific job descriptions and ATS systems.</p>
                        <a href="#" class="btn btn-light">Try Now →</a>
                    </div>
                </div>
                <div class="explore-btn-container">
                    <a href="#" class="btn btn-primary">Explore All AI Features</a>
                </div>
            </div>
        </section>
        
        <!-- NEW SECTION: RECOMMENDED WAY -->
        <section id="how-it-works">
            <div class="container">
                <h2><span>Recommended way</span> to use ONEJOB AI Tool</h2>
                <p class="section-subtitle">Follow these 5 simple steps to maximize your job search success with our AI-powered platform</p>
                <div class="how-it-works-grid">
                    <div class="step-card">
                        <span class="step-label">Step 1</span>
                        <svg class="icon" style="color: var(--primary-blue);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3v12" /></svg>
                        <h3>Paste Resume & Job Description</h3>
                        <p>Upload your current resume and paste the job description you want to apply for to get started.</p>
                        <a href="#" class="btn btn-light-blue">Start Step 1 →</a>
                    </div>
                    <div class="step-card">
                        <span class="step-label">Step 2</span>
                        <svg class="icon" style="color: var(--green);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        <h3>Click See Job Fit Button</h3>
                        <p>Our AI will analyze your profile against the job requirements and provide a compatibility score.</p>
                        <a href="#" class="btn btn-light-blue">Start Step 2 →</a>
                    </div>
                    <div class="step-card">
                        <span class="step-label">Step 3</span>
                        <svg class="icon" style="color: var(--primary-purple);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                        <h3>Generate Cover Letter (Score >6)</h3>
                        <p>If your compatibility score is above 6, proceed to generate a personalized cover letter for the position.</p>
                        <a href="#" class="btn btn-light-blue">Start Step 3 →</a>
                    </div>
                    <div class="step-card">
                        <span class="step-label">Step 4</span>
                        <svg class="icon" style="color: var(--orange);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                        <h3>Generate HR Contact Details</h3>
                        <p>Get verified contact information of HR personnel and decision makers at your target company.</p>
                        <a href="#" class="btn btn-light-blue">Start Step 4 →</a>
                    </div>
                    <div class="step-card">
                        <span class="step-label">Step 5</span>
                        <svg class="icon" style="color: var(--red);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                        <h3>Verify & Send Application</h3>
                        <p>Click 'View Source' to cross-verify HR details accuracy, then email your custom generated cover letter.</p>
                        <a href="#" class="btn btn-light-blue">Start Step 5 →</a>
                    </div>
                </div>
                 <div class="explore-btn-container">
                    <a href="#" class="btn btn-primary">Get Started Now</a>
                </div>
            </div>
        </section>

        <!-- PREMIUM SERVICES SECTION -->
        <section id="services">
            <div class="container">
                <h2>Our <span>Premium Services</span></h2>
                <p class="section-subtitle" style="font-size: 1rem;">Comprehensive career solutions designed to accelerate your job search and maximize your success rate</p>
                <div class="services-grid">
                    <!-- Cards remain the same -->
                    <div class="service-card popular">
                        <div class="most-popular-badge">Most Popular</div>
                        <svg class="icon" style="color: var(--primary-blue);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                        <h3>AI-Powered Job Search Optimization</h3>
                        <p class="description">Our revolutionary AI analyzes thousands of job postings to match you with perfect opportunities and optimize your application strategy.</p>
                        <ul>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Smart job matching</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Application tracking</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Success analytics</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Market insights</li>
                        </ul>
                        <p class="price">Starting at ₹99</p>
                        <a href="#contact" class="btn">Get Started</a>
                    </div>
                    <div class="service-card">
                         <svg class="icon" style="color: var(--green);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                        <h3>Professional Resume Writing</h3>
                        <p class="description">Expert-crafted resumes that pass ATS systems and impress hiring managers. Tailored to your industry and career level.</p>
                        <ul>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> ATS-optimized format</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Industry-specific keywords</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Multiple revisions</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Cover letter included</li>
                        </ul>
                        <p class="price">Starting at ₹149</p>
                        <a href="#contact" class="btn">Get Started</a>
                    </div>
                    <div class="service-card">
                        <svg class="icon" style="color: #0A66C2;" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                        <h3>LinkedIn Profile Optimization</h3>
                        <p class="description">Transform your LinkedIn into a powerful networking and job-searching tool that attracts recruiters and opportunities.</p>
                         <ul>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Compelling headline</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Optimized summary</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Skills optimization</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Network strategy</li>
                        </ul>
                        <p class="price">Starting at ₹79</p>
                        <a href="#contact" class="btn">Get Started</a>
                    </div>
                    <div class="service-card">
                         <svg class="icon" style="color: var(--primary-purple);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>
                        <h3>Mock Interview Sessions</h3>
                        <p class="description">Practice with industry experts and AI-powered feedback to master your interview skills and boost confidence.</p>
                        <ul>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> 1-on-1 sessions</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Industry-specific prep</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Detailed feedback</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.21 4.79a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06L13.94 11H5.75a.75.75 0 0 1 0-1.5h8.19L10.21 5.85a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg> Follow-up coaching</li>
                        </ul>
                        <p class="price">Starting at ₹749</p>
                        <a href="#contact" class="btn">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="custom-solutions">
            <div class="container">
                <a href="#contact" class="btn btn-secondary">Contact for Custom Solutions</a>
            </div>
        </section>

        <section id="why-us">
            <div class="container">
                <p class="section-subtitle">Why Choose ONE JOB</p>
                <h2>Revolutionizing Career Success with <span>AI</span></h2>
                <p class="subtext">We combine cutting-edge artificial intelligence with human expertise to deliver unparalleled job search optimization. Our platform doesn't just find jobs – it transforms careers.</p>
                <div class="stats-grid">
                    <div class="stat-card">
                        <svg class="icon" style="color:#3b82f6;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.512 2.72a9.094 9.094 0 0 1 3.741-.479 3 3 0 0 1-4.682-2.72M12 18.72v-5.25A2.25 2.25 0 0 1 14.25 11.25h1.5A2.25 2.25 0 0 1 18 13.5v5.25m-6-5.25v5.25A2.25 2.25 0 0 0 8.25 11.25h-1.5A2.25 2.25 0 0 0 4.5 13.5v5.25m15-7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-9 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z" /></svg>
                        <p class="number">10,000+</p>
                        <p class="label">Job Seekers Helped</p>
                    </div>
                    <div class="stat-card">
                         <svg class="icon" style="color:#10b981;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
                        <p class="number">85%</p>
                        <p class="label">Success Rate</p>
                    </div>
                    <div class="stat-card">
                         <svg class="icon" style="color:#8b5cf6;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 1 0 0-13.5h9a9.75 9.75 0 1 0 0 13.5ZM16.5 7.5h.008v.008h-.008V7.5Z" /></svg>
                        <p class="number">500+</p>
                        <p class="label">Partner Companies</p>
                    </div>
                    <div class="stat-card">
                         <svg class="icon" style="color:#f97316;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                        <p class="number">30%</p>
                        <p class="label">Faster Job Placement</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="advantage">
            <div class="container">
                <div class="advantage-grid">
                    <div class="advantage-list">
                        <h2>The <span>ONE JOB</span> Advantage</h2>
                        <ul>
                            <li>
                                <h3>AI-Driven Insights</h3>
                                <p>Our proprietary algorithms analyze market trends, salary data, and hiring patterns to give you a competitive edge.</p>
                            </li>
                            <li>
                                <h3>Personalized Strategy</h3>
                                <p>Every job search is unique. We create customized strategies based on your experience, goals, and target industry.</p>
                            </li>
                            <li>
                                <h3>End-to-End Support</h3>
                                <p>From resume optimization to interview coaching, we support you through every step of your career journey.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="advantage-cta-box">
                        <h2>Ready to Transform Your Career?</h2>
                        <p>Join thousands of professionals who have successfully landed their dream jobs with ONE JOB's AI-powered platform.</p>
                        <ul>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4.0-5.5Z" clip-rule="evenodd" /></svg> Free consultation available</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4.0-5.5Z" clip-rule="evenodd" /></svg> Money-back guarantee</li>
                            <li><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.06 0l4.0-5.5Z" clip-rule="evenodd" /></svg> 24/7 support included</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="container">
                <h2>Ready to Start Your Journey?</h2>
                <p style="text-align: center; max-width: 600px; margin: 0 auto 50px;">Get in touch with our career experts today and take the first step towards landing your dream job.</p>
                <div class="contact-wrapper">
                    <div class="contact-form">
                        <h3>Send Us a Message</h3>
                        <form>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="first-name">First Name *</label>
                                    <input type="text" id="first-name" name="first-name" value="John" required>
                                </div>
                                <div class="form-group">
                                    <label for="last-name">Last Name *</label>
                                    <input type="text" id="last-name" name="last-name" value="Doe" required>
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom: 20px;">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" value="john.doe@example.com" required>
                            </div>
                             <div class="form-group" style="margin-bottom: 20px;">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" value="+1 (555) 123-4567">
                            </div>
                             <div class="form-group" style="margin-bottom: 20px;">
                                <label for="service">Service of Interest</label>
                                <select id="service" name="service">
                                    <option>AI-Powered Job Search Optimization</option>
                                    <option>Professional Resume Writing</option>
                                    <option>LinkedIn Profile Optimization</option>
                                    <option>Mock Interview Sessions</option>
                                </select>
                            </div>
                             <div class="form-group" style="margin-bottom: 20px;">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" required>Tell us about your career goals and how we can help you achieve them...</textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Send Message 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width: 20px; height: 20px;"><path d="M3.105 3.105a1.5 1.5 0 0 1 2.122 0l10.606 10.607a1.5 1.5 0 0 1 0 2.121l-10.607 10.607a1.5 1.5 0 0 1-2.121-2.122l8.838-8.838L3.105 5.227a1.5 1.5 0 0 1 0-2.122Z" clip-rule="evenodd" transform="rotate(-45 10 10) translate(-1 -4)" /></svg>
                            </button>
                        </form>
                    </div>
                    <div class="contact-info">
                        <div class="info-card">
                            <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                            <div>
                                <p>Email Us</p>
                                <p>info@onejob.com</p>
                                <p>support@onejob.com</p>
                            </div>
                        </div>
                        <div class="info-card">
                           <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                            <div>
                                <p>Call Us</p>
                                <p>+1 (555) 123-4567</p>
                                <p>Mon-Fri, 9AM-8PM EST</p>
                            </div>
                        </div>
                         <div class="info-card">
                           <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                            <div>
                                <p>Visit Us</p>
                                <p>123 Career Avenue</p>
                                <p>Success City, SC 12345</p>
                            </div>
                        </div>
                        <div class="free-consultation-box">
                            <h3>Free Consultation</h3>
                            <p>Book a 30-minute consultation with our career experts completely free!</p>
                            <a href="#" class="btn">Schedule Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <a href="#" class="logo">ONE JOB</a>
                    <p>Revolutionizing careers with AI-powered job search optimization. Your dream job is just one click away.</p>
                    <div class="social-icons">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.03C18.343 21.128 22 16.991 22 12z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#services">AI Job Search</a></li>
                        <li><a href="#services">Resume Writing</a></li>
                        <li><a href="#services">LinkedIn Optimization</a></li>
                        <li><a href="#services">Mock Interviews</a></li>
                        <li><a href="#services">Custom Packages</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Success Stories</a></li>
                        <li><a href="#">Career Tips</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2024 ONE JOB. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>

    <div class="sticky-footer-banner">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width:20px; height: 20px; vertical-align: middle; margin-right: 5px;"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
        Ready to get started?! <a href="mailto:info@onejob.com">Contact us at info@onejob.com</a>
    </div>

<script>
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileNavToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a, .nav-btn, .ai-card .btn-light, .step-card .btn-light-blue').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileNavToggle.classList.remove('open');
            }
        });
    });
</script>
</body>
</html>
