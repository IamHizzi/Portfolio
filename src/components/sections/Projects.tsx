"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    description:
      "Scalable multi-tenant e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Handles 100K+ daily transactions.",
    image: "/thumbnails/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://shopify.com",
    githubUrl: "#",
    metrics: ["100K+ daily transactions", "99.99% uptime", "< 200ms response"],
  },
  {
    title: "Real-Time Collaboration Suite",
    description:
      "Google Docs-style collaborative editing platform with real-time sync, presence indicators, and version history. WebSocket-powered for instant updates.",
    image: "/thumbnails/collaboration.svg",
    tags: ["React", "Node.js", "WebSockets", "MongoDB", "AWS"],
    liveUrl: "https://notion.so",
    githubUrl: "#",
    metrics: ["10K concurrent users", "Real-time sync", "Auto-save"],
  },
  {
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant patient management platform with appointment scheduling, telemedicine integration, and electronic health records management.",
    image: "/thumbnails/healthcare.svg",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Kubernetes"],
    liveUrl: "https://zocdoc.com",
    githubUrl: "#",
    metrics: ["HIPAA compliant", "500K+ patients", "Telemedicine ready"],
  },
  {
    title: "FinTech Trading Dashboard",
    description:
      "Real-time cryptocurrency and stock trading platform with advanced charting, portfolio management, and automated trading strategies.",
    image: "/thumbnails/trading.svg",
    tags: ["React", "TypeScript", "WebSocket", "TradingView", "Node.js"],
    liveUrl: "https://tradingview.com",
    githubUrl: "#",
    metrics: ["Real-time data", "100+ indicators", "Algo trading"],
  },
  {
    title: "Developer Analytics Platform",
    description:
      "Engineering metrics dashboard tracking code quality, deployment frequency, and team velocity. Integrates with GitHub, GitLab, and Jira.",
    image: "/thumbnails/analytics.svg",
    tags: ["Next.js", "GraphQL", "TimescaleDB", "Docker", "GitHub API"],
    liveUrl: "https://linearb.io",
    githubUrl: "#",
    metrics: ["DORA metrics", "50+ integrations", "Custom reports"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-sm font-medium text-cyan-400 mb-4 tracking-wider uppercase"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Full-Stack<span className="gradient-text"> Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Enterprise-grade applications built with modern technologies,
            designed for scale and performance.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group relative rounded-2xl overflow-hidden glass-card hover:bg-white/[0.06] transition-all duration-500 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`flex flex-col ${
                  index === 0 ? "lg:flex-row" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "lg:w-1/2" : "w-full"
                  } h-64`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div
                  className={`p-6 ${
                    index === 0 ? "lg:w-1/2 lg:p-8" : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
