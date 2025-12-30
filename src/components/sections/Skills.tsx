"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Brain,
  Sparkles,
  Cloud,
  Database,
} from "lucide-react";

const skillCategories = [
  {
    title: "Full-Stack Engineering",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Node.js / NestJS", level: 90 },
      { name: "PostgreSQL / MongoDB", level: 88 },
      { name: "GraphQL / REST APIs", level: 90 },
      { name: "TailwindCSS", level: 95 },
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PyTorch", level: 92 },
      { name: "TensorFlow / Keras", level: 88 },
      { name: "Hugging Face", level: 90 },
      { name: "Computer Vision", level: 85 },
      { name: "NLP / Transformers", level: 88 },
      { name: "Scikit-learn", level: 90 },
    ],
  },
  {
    title: "LLMs & Generative AI",
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "LangChain / LlamaIndex", level: 90 },
      { name: "RAG Systems", level: 92 },
      { name: "Fine-Tuning (LoRA/QLoRA)", level: 88 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Vector Databases", level: 88 },
      { name: "OpenAI / Anthropic APIs", level: 92 },
    ],
  },
  {
    title: "MLOps & Cloud",
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "AWS / GCP", level: 88 },
      { name: "Docker / Kubernetes", level: 90 },
      { name: "MLflow / Kubeflow", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Terraform / IaC", level: 82 },
      { name: "Monitoring & Logging", level: 85 },
    ],
  },
  {
    title: "Data Engineering",
    icon: Database,
    color: "from-rose-500 to-red-500",
    skills: [
      { name: "Apache Kafka", level: 85 },
      { name: "Apache Spark", level: 82 },
      { name: "ETL Pipelines", level: 88 },
      { name: "Data Modeling", level: 85 },
      { name: "Redis / Caching", level: 90 },
      { name: "Time-Series DBs", level: 80 },
    ],
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

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
            className="inline-block text-sm font-medium text-indigo-400 mb-4 tracking-wider uppercase"
          >
            Technical Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Skills &<span className="gradient-text"> Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive toolkit spanning full-stack development, machine learning,
            and modern cloud infrastructure.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group relative p-6 rounded-2xl glass-card hover:bg-white/[0.08] transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}
                >
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10" />

            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-8 py-4"
            >
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "PyTorch",
                "TensorFlow",
                "AWS",
                "Docker",
                "Kubernetes",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "GraphQL",
                "Node.js",
                "FastAPI",
                "LangChain",
                "OpenAI",
                "Hugging Face",
                "React",
                "Next.js",
                "TypeScript",
                "Python",
                "PyTorch",
                "TensorFlow",
                "AWS",
                "Docker",
                "Kubernetes",
                "PostgreSQL",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="text-2xl font-bold text-white/10 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
