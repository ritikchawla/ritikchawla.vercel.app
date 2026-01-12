import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <StorySection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
