import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBookOpen, FiCoffee, FiLayers } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know me better - my background, expertise, and what drives me as a software and infrastructure engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Engineering Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m a Software Engineer specializing in building and scaling resilient distributed systems and cloud-native infrastructure, primarily using Go and Python. My journey began with a deep curiosity about how large-scale systems operate efficiently and reliably, driving me to focus on robust system design and architecture.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              At Gojek and MAQ Software, I honed my skills in designing, developing, and debugging high-throughput microservices, RESTful APIs, and event-driven systems. I have hands-on experience engineering data pipelines processing millions of events daily, achieving sub-second latency and high availability (e.g., 99.99% uptime).
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I possess strong problem-solving skills and I&apos;m passionate about infrastructure automation (Kubernetes, Terraform), optimizing system performance, enhancing observability (Prometheus, Grafana), and implementing efficient CI/CD and GitOps workflows to improve deployment velocity and system resilience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card p-6">
                <FiLayers className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Core Focus</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing, building, and operating scalable distributed systems & cloud infrastructure.
                </p>
              </div>
              
              <div className="card p-6">
                <FiCode className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Key Technologies</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Golang, Python, Kubernetes, Docker, Kafka, SQL/NoSQL, AWS/GCP.
                </p>
              </div>
              
              <div className="card p-6">
                <FiBookOpen className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Technology in Computer Science with a focus on distributed computing and systems design.
                </p>
              </div>
              
              <div className="card p-6">
                <FiCoffee className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Interests</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  System optimization, infrastructure tooling, open-source, and exploring new developments in distributed computing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
