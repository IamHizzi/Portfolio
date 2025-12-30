"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Brain, Boxes, Zap, Users, Globe } from "lucide-react";

const achievements = [
  {
    icon: Brain,
    title: "Production ML at Scale",
    description:
      "Architected and deployed ML pipelines processing 2M+ inferences daily, optimizing for sub-100ms latency across distributed systems.",
  },
  {
    icon: Boxes,
    title: "Enterprise LLM Systems",
    description:
      "Built production RAG pipelines and fine-tuned LLMs (LLaMA, Mistral) using LoRA/QLoRA for domain-specific enterprise applications.",
  },
  {
    icon: Code2,
    title: "Full-Stack Architecture",
    description:
      "Designed microservices architectures handling millions of requests, with expertise in React, Next.js, Node.js, and cloud-native technologies.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Reduced inference latency by 60% through model quantization, TensorRT optimization, and intelligent caching strategies.",
  },
  {
    icon: Users,
    title: "Cross-Functional Leadership",
    description:
      "Led distributed teams across timezones, bridging ML research and engineering to deliver production-ready AI solutions.",
  },
  {
    icon: Globe,
    title: "Cloud & MLOps",
    description:
      "Expert in AWS, GCP, Kubernetes, and MLOps tooling (MLflow, Kubeflow) for scalable, reproducible ML deployments.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

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
            className="inline-block text-sm font-medium text-blue-400 mb-4 tracking-wider uppercase"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Building the Future of
            <span className="gradient-text"> Intelligent Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m Khizer Hayat, a Full-Stack & AI/ML Engineer with 4+ years of experience
            building production systems that scale. From enterprise LLM pipelines to
            high-performance web applications, I bridge the gap between cutting-edge
            research and real-world deployment.
          </motion.p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl glass-card hover:bg-white/[0.08] transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 group-hover:border-blue-400/40 transition-colors">
                <achievement.icon className="h-6 w-6 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {achievement.description}
              </p>

              {/* Hover gradient border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl glass-card"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99.9%", label: "System Uptime" },
              { value: "10x", label: "Performance Gains" },
              { value: "24/7", label: "Global Deployment" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
