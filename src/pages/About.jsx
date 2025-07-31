import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedText from '../components/ui/AnimatedText';

import AlexImage from '../images/alex.png';
import SarahImage from '../images/sarah.jpg';
import MichaelImage from '../images/michael.jpg';
import JessicaImage from '../images/jessica.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', image: AlexImage },
    { name: 'Sarah Chen', role: 'Chief Product Officer', image: SarahImage },
    { name: 'Michael Rivera', role: 'Lead 3D Developer', image: MichaelImage },
    { name: 'Jessica Kim', role: 'Creative Director', image: JessicaImage },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create immersive and useful experiences.',
      icon: '💡',
    },
    {
      title: 'Quality',
      description: 'Every detail matters - from our 3D models to our user interface, we strive for perfection.',
      icon: '✨',
    },
    {
      title: 'Customer Focus',
      description: 'We build solutions that solve real problems and delight our users.',
      icon: '👥',
    },
    {
      title: 'Sustainability',
      description: "We're committed to ethical business practices and environmental responsibility.",
      icon: '🌱',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-showcase-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedText
              text="About Vista Showcase"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6"
            />
            <p className="text-showcase-muted text-lg max-w-3xl mx-auto">
              We're revolutionizing online shopping through immersive 3D visualization technology and interactive product experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-showcase-medium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-showcase-accent1 uppercase tracking-wider font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Reimagining How You Experience Products</h2>
              <div className="space-y-6 text-showcase-muted">
                <p>
                  Founded in 2023, Vista Showcase was born from a simple observation: online shopping lacks the tactile experience of examining products in person.
                </p>
                <p>
                  Our team of developers, designers, and 3D artists works tirelessly to create photorealistic product models that customers can interact with.
                </p>
                <p>
                  Today, we partner with leading brands across technology, furniture, fashion, and more to bring their products to life in the digital realm.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1000&q=80" 
                  alt="Our team working on 3D models" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-showcase-accent1 text-white p-6 rounded-lg max-w-xs">
                <p className="text-lg font-medium">
                  "We're not just showing products; we're creating experiences."
                </p>
                <p className="mt-2 text-white/80 font-light">
                  — Alex Johnson, Founder
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gradient-to-b from-showcase-medium to-showcase-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide our work and company culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-panel p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-showcase-muted">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-showcase-dark">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The talented people behind our virtual showcase platform."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6 border-2 border-showcase-accent1/30">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-showcase-muted">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-showcase-accent1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '1M+', label: 'Monthly Users' },
              { value: '500+', label: 'Product Models Created' },
              { value: '50+', label: 'Brand Partners' },
              { value: '20+', label: 'Countries Served' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
