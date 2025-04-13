import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Distributed Key-Value Store',
    description: 'A distributed key-value store ensuring linearizable consistency via the multi-Raft protocol for consensus. Features automated leader election, log compaction, dynamic membership changes, and is designed for high availability under concurrent load.',
    image: '/projects/distributed_key_value.png',
    technologies: ['Golang', 'gRPC', 'Raft Consensus', 'LSM Tree', 'WAL'],
    githubUrl: 'https://github.com/ritikchawla/distributed-kv-store'
  },
  {
    title: 'Load Balancer Implementation',
    description: 'An L7 load balancer implemented with consistent hashing, connection pooling, and custom TCP congestion control to optimize traffic distribution. Features distributed health checking using phi-accrual failure detection for enhanced resilience.',
    image: '/projects/lb.png',
    technologies: ['Golang', 'Docker', 'TCP/IP', 'Circuit Breakers', 'Lock-free Queues'],
    githubUrl: 'https://github.com/ritikchawla/load-balancer'
  },
  {
    title: 'Distributed Rate Limiter',
    description: 'A distributed rate limiting service using a sliding window algorithm backed by Redis (NoSQL) for shared state. Coordination relies on Redis Lua scripts for atomic operations, ensuring accurate limiting across multiple service instances.',
    image: '/projects/rate_limiter.png',
    technologies: ['Golang', 'Redis', 'Token Bucket', 'Leaky Bucket', 'Distributed Systems'],
    githubUrl: 'https://github.com/ritikchawla/distributed-rate-limiter'
  },
  {
    title: 'Kubernetes Operator Framework',
    description: 'A custom Kubernetes operator framework facilitating automated management and deployment of microservice configurations. Features GitOps workflow integration (ArgoCD) and service mesh compatibility (Istio) to improve operational efficiency.',
    image: '/projects/k8s-operator.png',
    technologies: ['Golang', 'Kubernetes', 'Operator SDK', 'ArgoCD', 'Istio'],
    githubUrl: 'https://github.com/ritikchawla/k8s-operator-framework'
  },
  {
    title: 'ML Model Serving Platform',
    description: 'A scalable platform for deploying and serving machine learning models. Supports automatic A/B testing, model versioning, and real-time performance monitoring, enabling rapid iteration and deployment for ML workflows.',
    image: '/projects/ml_serving.png',
    technologies: ['Python', 'Kubernetes', 'TensorFlow Serving', 'Prometheus', 'MLflow'],
    githubUrl: 'https://github.com/ritikchawla/ml-serving-platform'
  },
  {
    title: 'Feature Store Pipeline',
    description: 'An end-to-end feature engineering pipeline with automated feature extraction, transformation, and storage. Leverages Apache Spark for efficient processing of large datasets and ensures point-in-time correctness for ML models.',
    image: '/projects/feature_store.png',
    technologies: ['Python', 'Apache Spark', 'Feast', 'Airflow', 'Redis'],
    githubUrl: 'https://github.com/ritikchawla/feature-store-pipeline'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in distributed systems, infrastructure, and MLOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60 bg-gray-200 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
