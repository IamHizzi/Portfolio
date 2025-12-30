"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Cpu, Zap, Activity, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const aiProjects = [
  {
    title: "Enterprise Multi-Modal AI Assistant (RAG)",
    description:
      "Production-grade RAG system supporting text, image, and PDF analysis. Built with GPT-4, LangChain, and ChromaDB. Processes 50K+ queries daily with contextual memory and citation tracking.",
    image: "/thumbnails/rag-system.svg",
    tags: ["GPT-4", "LangChain", "ChromaDB", "FastAPI", "AWS Lambda"],
    liveUrl: "https://openai.com/chatgpt",
    architecture: "Microservices",
    metrics: [
      { label: "Daily Queries", value: "50K+" },
      { label: "Accuracy", value: "94%" },
      { label: "Latency", value: "<2s" },
    ],
  },
  {
    title: "LLM Fine-Tuning Platform",
    description:
      "Distributed fine-tuning infrastructure for LLaMA, Mistral, and Falcon models. Supports LoRA/QLoRA for efficient training on multi-GPU clusters with experiment tracking.",
    image: "/thumbnails/llm-finetuning.svg",
    tags: ["LLaMA", "Mistral", "LoRA", "DeepSpeed", "MLflow"],
    liveUrl: "https://huggingface.co",
    architecture: "Distributed",
    metrics: [
      { label: "GPU Clusters", value: "8x A100" },
      { label: "Models Trained", value: "100+" },
      { label: "VRAM Savings", value: "70%" },
    ],
  },
  {
    title: "Real-Time Object Detection System",
    description:
      "Edge-optimized computer vision pipeline using YOLOv8 with TensorRT acceleration. Deployed on NVIDIA Jetson for industrial quality inspection with 60+ FPS inference.",
    image: "/thumbnails/object-detection.svg",
    tags: ["YOLOv8", "TensorRT", "NVIDIA Jetson", "OpenCV", "ONNX"],
    liveUrl: "https://ultralytics.com",
    architecture: "Edge AI",
    metrics: [
      { label: "FPS", value: "60+" },
      { label: "mAP", value: "92%" },
      { label: "Latency", value: "<16ms" },
    ],
  },
  {
    title: "Predictive Maintenance ML Pipeline",
    description:
      "End-to-end ML pipeline for industrial IoT predictive maintenance. Real-time sensor data processing with Kafka, time-series forecasting, and automated alerting system.",
    image: "/thumbnails/predictive-ml.svg",
    tags: ["Kafka", "Spark", "MLflow", "Prophet", "TimescaleDB"],
    liveUrl: "https://datadog.com",
    architecture: "Streaming",
    metrics: [
      { label: "Sensors", value: "10K+" },
      { label: "Accuracy", value: "96%" },
      { label: "Lead Time", value: "72hrs" },
    ],
  },
  {
    title: "Intelligent Recommendation Engine",
    description:
      "Hybrid recommendation system combining collaborative filtering with content-based approaches. Serves personalized recommendations for 1M+ users with real-time preference learning.",
    image: "/thumbnails/recommendation.svg",
    tags: ["PyTorch", "Redis", "FastAPI", "Pinecone", "A/B Testing"],
    liveUrl: "https://spotify.com",
    architecture: "Real-time ML",
    metrics: [
      { label: "Users", value: "1M+" },
      { label: "CTR Lift", value: "+35%" },
      { label: "P99 Latency", value: "<50ms" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AIProjects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="ai-projects"
      className="py-24 sm:py-32 relative"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

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
            className="inline-block text-sm font-medium text-purple-400 mb-4 tracking-wider uppercase"
          >
            AI & Machine Learning
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Intelligent<span className="gradient-text"> Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Production ML systems and LLM applications built for scale,
            from research prototype to enterprise deployment.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden glass-card hover:bg-white/[0.06] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f172a] lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent lg:hidden" />

                  {/* Architecture badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                    <Cpu className="h-3.5 w-3.5 text-purple-400" />
                    <span className="text-xs text-gray-300">
                      {project.architecture}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-purple-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center p-3 rounded-xl bg-white/5 border border-white/5"
                      >
                        <div className="text-lg font-bold gradient-text">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <Button asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                      <ArrowUpRight className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
