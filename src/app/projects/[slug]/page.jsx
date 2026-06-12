"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ImagePlus,
  Bot,
  Github,
  ExternalLink,
  FileText,
  ArrowLeft,
} from "lucide-react";

const projects = [
  {
    slug: "diagnoskin",
    title: "Diagnoskin",
    icon: ImagePlus,

    desc:
      "AI-powered skin disease assistant with CNN classification, NLP chatbot, and explainable AI pipeline.",

    tags: ["FastAPI", "Next.js", "CNN", "NLP"],

    cover:
      "/images/diagnoskin-cover.jpg",

    youtube:
      "/video/diagnoskin.mp4",

    pdf:
      "/documents/diagnoskin.pdf",

    github:
      "https://github.com/Mr4sR/BE_GarudaCoders_py",

    demo:
      "https://diagnoskin.vercel.app",

    detail:
     "Diagnoskin is a capstone project developed during Coding Camp 2025 by the Garuda Coders team. The platform combines computer vision and natural language processing to provide AI-assisted skin disease detection and educational healthcare support. My primary responsibility was developing the image classification model and the intelligent chatbot system. The deep learning model was trained to classify nine skin diseases: Dermatitis, Impetigo, Chickenpox, Scabies, Warts, Acne, Herpes, Ringworm, and Urticaria. Users can upload a skin image and receive a predicted disease category with a confidence score. To enhance the user experience, I also developed an intent-based chatbot capable of understanding questions related to disease definitions, symptoms, causes, treatments, and prevention methods. The chatbot integrates prediction results with contextual health information, enabling more personalized responses.The system uses FastAPI for AI inference services and Next.js for the frontend application. The machine learning models are deployed through Hugging Face, while the web application is delivered through a modern web deployment workflow. The result is an integrated AI healthcare assistant that combines image analysis and conversational support within a single platform",
    gallery: [
      "/images/diagnoskin-gal1.png",
      "/images/diagnoskin-gal2.png",
      "/images/diagnoskin-gal3.png",
    ],

    features: [
      "Deep learning-based skin disease classification",
      "Support for 9 skin disease categories",
      "Intent-based healthcare chatbot",
      "Definition, symptom, cause, treatment, and prevention assistance",
      "Image upload and real-time prediction",
      "Confidence-aware diagnosis workflow",
      "FastAPI backend for model inference",
      "Next.js responsive frontend",
      "Hugging Face model deployment",
    ],
  },

  {
    slug: "poxpox-bot",
    title: "PoxPox Bot",

    icon: Bot,

    desc:
      "Medical-style chatbot for rash classification and explanation.",

    tags: ["Flask", "TensorFlow", "PyTorch", "Next.js"],

    cover:
      "/images/poxpox-cover.png",

    youtube:
      "/video/poxpox.mp4",

    pdf:
      "/documents/poxpox.pdf",

    github:
      "https://github.com/yourusername/poxpox",

    demo:
      "https://poxpox.vercel.app",

   detail:
      "This project was inspired by research conducted by the Artificial Intelligence and Big Data Research Center of Universitas Padjadjaran. As part of my undergraduate final project, I developed an AI-powered system for the classification of exanthematous viral diseases using the MSID dataset and a multi-intent chatbot. The system combines deep learning-based image classification with an intelligent chatbot capable of understanding various user intents, providing disease information, symptoms, causes, prevention strategies, and treatment recommendations in an accessible and user-friendly manner.",
    gallery: [
      "/images/poxpox-gal1.png",
      "/images/poxpox-gal2.png",
    ],

    features: [
      "Exanthematous viral disease recognition",
      "MSID dataset classification",
      "MobileNetV3 deep learning model",
      "Multi-intent conversational AI",
      "Symptom and disease explanation",
      "Personalized health recommendations",
    ],
  },
  {
    slug: "spatial",
    title: "Spatial Regression Dashboard",

    icon: "#",

    desc:
      "Interactive dashboard for spatial regression analysis and geospatial data exploration.",

    tags: ["R Shiny", "Spatial Regression", "GIS", "Leaflet"],

    cover:
      "/images/spatial-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1MewJiVDaIcXebkTh1cwrIZ-96936VVus",

    demo:
      "https://spatialanalysis.netlify.app/",

    detail:
      "This project was developed as part of my Spatial Analysis coursework. The dashboard was built using R Shiny to facilitate spatial data exploration, visualization, and regression modeling through an interactive web interface. Users can upload spatial map files (SHP, JSON, or RDS) and attribute datasets (CSV or XLSX), perform spatial regression analyses, and visualize results directly on interactive maps. The application supports multiple spatial econometric models, enabling users to investigate spatial dependencies and regional variations efficiently.",

    gallery: [
      "/images/spatial-gal1.jpg",
      "/images/spatial-gal2.jpg",
      "/images/spatial-gal3.jpg",
      
    ],

    features: [
      "Interactive spatial data visualization",
      "Support for SHP, JSON, and RDS map files",
      "CSV and XLSX data integration",
      "Spatial Lag regression model",
      "Multiple spatial econometric models",
      "Automated spatial analysis workflow",
    ],
  },
  {
    slug: "negativebinomial",
    title: "Negative Binomial Model",

    icon: "#",

    desc:
       "Statistical modeling project analyzing stunting determinants in West Java using Negative Binomial Regression.",

    tags:  [
        "R",
        "Statistics",
        "Negative Binomial Regression",
        "GLM",
        "Data Analysis"
      ],


    cover:
      "/images/negativebinomial-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://drive.google.com/drive/folders/1MewJiVDaIcXebkTh1cwrIZ-96936VVus",

    demo:
      "https://scik.org/index.php/cmbn/article/view/8929",

    detail:
          "This project was completed as a university coursework assignment in collaboration with my classmates. The study investigates factors affecting stunting among toddlers in West Java using Negative Binomial Regression. The analysis compares Poisson and Negative Binomial models to address overdispersion in count data. Variables examined include low birth weight, exclusive breastfeeding, vitamin A supplementation, hospitals, and health centers. The results showed that low birth weight and vitamin A supplementation were significant determinants of stunting, while the Negative Binomial model provided the best fit for the data.",
    gallery: [
      "/images/negativebinomial-gal1.jpg",
      "/images/negativebinomial-gal2.jpg",
      "/images/spatial-gal3.jpg",
      
    ],

    features: [
      "Negative Binomial Regression modeling",
      "Poisson Regression comparison",
      "Overdispersion testing",
      "Multicollinearity analysis using VIF",
      "Model selection using AIC",
      "Stunting determinant analysis in West Java",
      "Statistical inference and interpretation",
      "Collaborative university coursework project"
    ],
  },
  {
    slug: "personalwebsite",
    title: "Personal Website",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/personalwebsite-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "netplix",
    title: "Netplix",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/netplix-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "bioinformatik",
    title: "Bioinformatics Analysis",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/bioinformatik-cover.png",

    youtube:
      "/video/bioinformatik.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "clustering",
    title: "Clustering Analysis",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/clustering-cover.jpg",

    youtube:
      "/video/clustering.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "cafeorder",
    title: "Cafe Order System",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/cafeorder-cover.jpg",

    youtube:
      "/video/cafeorder.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "intersectawebsite",
    title: "Intersecta Website",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/personalwebsite-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "faceapp",
    title: "Face Recognition",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/faceapp-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
    {
    slug: "robloxmap",
    title: "Roblox Map Builder",

    icon: "#",

    desc:
      "A personal portfolio website showcasing my background, projects, research, and experiences as a Statistics student and aspiring data scientist.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GitHub",
      "Netlify"
    ],

    cover:
      "/images/roblox-cover.jpg",

    youtube:
      "/video/spatial.mp4",

    pdf:
      "#",

    github:
      "https://github.com/LouuRey/web/tree/main",

    demo:
      "https://mamm.netlify.app/",

    detail:
      "This project is my personal website designed to present my background, academic journey, projects, research interests, and technical skills in a clean and accessible way. Built using vanilla HTML, CSS, and JavaScript, the website serves as a digital portfolio where visitors can learn more about me, explore my work, and access my social and professional profiles. The site is deployed through Netlify and maintained using GitHub, providing a simple, fast, and responsive experience across devices.",

    gallery: [
      "/images/personalwebsite-gal1.jpg",
      "/images/personalwebsite-gal2.jpg",
      "/images/personalwebsite-gal3.jpg",
    ],

    features: [
      "Personal profile and biography",
      "Project portfolio showcase",
      "Research and academic highlights",
      "Responsive design for all devices",
      "Interactive navigation and animations",
      "Social media and contact links",
      "GitHub integration",
      "Netlify deployment"
    ],
  },
];

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const safeSlug = Array.isArray(slug)
    ? slug[0]
    : slug;

  const project = projects.find(
    (p) => p.slug === safeSlug
  );

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">

      {/* BACK BUTTON */}
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      {/* HEADER */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg opacity-70">
          {project.desc}
        </p>

        {/* LINKS */}
        <div className="mt-6 flex flex-wrap gap-3">


          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 hover:bg-muted"
          >
            <FileText className="h-4 w-4" />
            Documentation
          </a>
        </div>
      </div>

      {/* COVER */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Overview
        </h2>

        <img
          src={project.cover}
          alt={project.title}
          className="w-full rounded-3xl border object-cover"
        />
      </section>

      {/* DESCRIPTION */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          About This Project
        </h2>

        <p className="leading-8 opacity-80 text-justify">
          {project.detail}
        </p>
      </section>

      {/* VIDEO */}
      {project.youtube && (
        <section className="mb-16">
          <h2 className="mb-5 text-2xl font-bold">
            Demo Video
          </h2>

          <div className="overflow-hidden rounded-3xl border">
            <iframe
              src={project.youtube}
              className="aspect-video w-full"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Features
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border p-4"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Gallery
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className="h-64 overflow-hidden rounded-2xl border"
            >
              <img
                src={image}
                alt={`${project.title}-${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mb-16">
        <h2 className="mb-5 text-2xl font-bold">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className="rounded-xl border px-4 py-2"
            >
              {tag}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}