import React from 'react';
import styles from './Body.module.css';

const subjectData = [
  {
    id: 'resources',
    title: 'Comprehensive Educational Resources',
    img: '/images/photo1.jfif',
    desc: `We offer a variety of academic tools and resources to help learners succeed, including summarized and high-quality notes, past papers, questionnaires, study tutorials, and other helpful academic documents. Some files are shared free of charge to support open and inclusive education for all.`,
  },
  {
    id: 'educators',
    title: 'Connecting Learners with Skilled Educators',
    img: '/images/photo2.jfif',
    desc: `We believe that teaching should be practical, inspiring, and interactive. That’s why we help match students with talented teachers and trainers who use real-life examples and keep lessons meaningful. Online coaching is available via tools like Google Meet with affordable and timely arrangements.`,
  },
  {
    id: 'performance',
    title: 'Academic Performance Support',
    img: '/images/photo3.jfif',
    desc: `Academic failure is not always about capability. Often, it is missing the right learning method or tool. We analyze academic challenges and recommend personalized solutions, advice, and study tips to boost learners’ confidence and performance.`,
  },
  {
    id: 'tech',
    title: 'Affordable Educational Technology Solutions',
    img: '/images/photo4.jfif',
    desc: `Today’s learners need the right devices. NAEL SOLUTIONS connects you with trusted laptop suppliers at the best prices and offers advice on smart technology use for teaching and learning. We also provide digital safety tips to protect your devices and data.`,
  },
  {
    id: 'about',
    title: 'Join NAEL Solutions',
    img: '/images/photo5.jfif',
    desc: `NAEL SOLUTIONS is your partner in educational success, supporting students, parents, and teachers through quality resources, expert coaching, and modern technology solutions. Together, we build a brighter future for every learner.`,
  },
  {
    id: 'contact',
    title: 'Community & Support',
    img: '/images/photo6.jfif',
    desc: `We foster a vibrant community where learners and educators connect, share knowledge, and grow. Our support network ensures that everyone has access to the tools and guidance they need to thrive academically and personally.`,
  },
];

const Body = () => (
  <div className={styles.homePage}>
    <main className={styles.container}>
      <section id="welcome">
        <h1 className={styles.heading}>Welcome to NAEL E-Learning Solutions</h1>
        <p className={styles.introText}>
          This is the homepage. Please navigate using the menu above.
        </p>
      </section>

      <section>
        <h2 className={styles.subjectsTitle}>Our Services</h2>
        <p className={styles.introText}>
          Explore our featured services and resources designed to help you learn effectively.
        </p>

        <div className={styles.grid}>
          {subjectData.map((subject, index) => (
            <section key={index} id={subject.id} className={styles.subjectCard}>
              <img src={subject.img} alt={subject.title} className={styles.subjectImage} />
              <div className={styles.subjectContent}>
                <h3 className={styles.subjectTitle}>{subject.title}</h3>
                <p className={styles.subjectDesc}>{subject.desc}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default Body;
