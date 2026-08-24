<template>
  <div class="about-page">
    <section class="about-hero">
      <div class="about-hero-content">
        <h1 class="title-xl">À PROPOS DE MOI</h1>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <!-- WHO I AM -->
        <div class="about-section">
          <h2 class="section-heading">WHO I AM</h2>
          <div class="section-text-block">
            <p class="section-text">{{ aboutData.whoIAm }}</p>
          </div>
        </div>

        <!-- MY STORY -->
        <div class="about-section">
          <h2 class="section-heading">MY STORY</h2>
          <div class="section-text-block">
            <p class="section-text">{{ aboutData.myStory }}</p>
          </div>
        </div>

        <!-- MY JOURNEY -->
        <div class="about-section">
          <h2 class="section-heading">MY JOURNEY</h2>
          <div class="section-text-block">
            <p class="section-text">{{ aboutData.myJourney }}</p>
          </div>
        </div>

        <!-- EDUCATION -->
        <div class="about-section">
          <h2 class="section-heading">EDUCATION</h2>
          <div class="timeline">
            <div v-for="edu in aboutData.education" :key="edu.year" class="timeline-item">
              <p class="timeline-year">{{ edu.year }}</p>
              <div>
                <h3 class="timeline-title">{{ edu.degree }}</h3>
                <p class="timeline-institution">{{ edu.institution }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- PROFESSIONAL EXPERIENCE -->
        <div class="about-section">
          <h2 class="section-heading">PROFESSIONAL EXPERIENCE</h2>
          <div class="timeline">
            <div v-for="exp in aboutData.experience" :key="exp.period" class="timeline-item">
              <p class="timeline-year">{{ exp.period }}</p>
              <div>
                <h3 class="timeline-title">{{ exp.role }}</h3>
                <p class="timeline-description">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- SKILLS -->
        <div class="about-section">
          <h2 class="section-heading">SKILLS</h2>
          <div class="skills-grid">
            <span v-for="skill in aboutData.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- MY APPROACH -->
        <div class="about-section">
          <h2 class="section-heading">MY APPROACH</h2>
          <div class="section-text-block">
            <p class="section-text">{{ aboutData.approach }}</p>
          </div>
        </div>

        <!-- INSPIRATIONS -->
        <div class="about-section">
          <h2 class="section-heading">MY INSPIRATIONS</h2>
          <ul class="inspiration-list">
            <li v-for="inspiration in aboutData.inspirations" :key="inspiration">
              {{ inspiration }}
            </li>
          </ul>
        </div>

        <!-- RECOMMENDATIONS -->
        <div class="about-section">
          <h2 class="section-heading">CLIENT RECOMMENDATIONS</h2>
          <div class="recommendations">
            <div v-for="rec in aboutData.references" :key="rec.name" class="recommendation-card">
              <p class="recommendation-text">{{ rec.quote }}</p>
              <div class="recommendation-author">
                <p class="author-name">{{ rec.name }}</p>
                <p class="author-role">{{ rec.role }} — {{ rec.company }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- LINKS -->
        <div class="about-section about-footer">
          <h2 class="section-heading">LET'S CONNECT</h2>
          <div class="links-list">
            <a v-for="link in aboutData.links" :key="link.label" :href="link.url" class="link-item">
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { aboutData } from '../data/about.ts';
</script>

<style scoped>
.about-page {
  background-color: var(--color-black);
  color: var(--color-off-white);
  padding-top: 70px;
}

.about-hero {
  background-color: var(--color-black);
  padding: 80px 20px;
  text-align: center;
  border-bottom: 1px solid var(--color-beige);
}

.about-content {
  padding: 100px 20px;
  background-color: var(--color-black);
}

.about-section {
  max-width: 900px;
  margin: 0 auto 80px;
  padding-bottom: 80px;
  border-bottom: 1px solid var(--color-beige);
}

.about-section:last-of-type {
  border-bottom: none;
}

.section-heading {
  font-family: var(--font-anton);
  font-size: clamp(28px, 4vw, 48px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 40px;
  line-height: 1.1;
}

.section-text-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-text {
  font-family: var(--font-poppins);
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-off-white);
  opacity: 0.95;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 30px;
}

.timeline-year {
  font-family: var(--font-poppins);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brown);
}

.timeline-title {
  font-family: var(--font-poppins);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-off-white);
  margin-bottom: 8px;
}

.timeline-institution,
.timeline-description {
  font-family: var(--font-poppins);
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-off-white);
  opacity: 0.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.skill-tag {
  font-family: var(--font-poppins);
  font-size: 14px;
  padding: 12px 16px;
  border: 1px solid var(--color-beige);
  text-align: center;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  border-color: var(--color-off-white);
  background-color: rgba(245, 245, 245, 0.05);
}

.inspiration-list {
  list-style: none;
}

.inspiration-list li {
  font-family: var(--font-poppins);
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-off-white);
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(232, 228, 221, 0.2);
}

.inspiration-list li:last-child {
  border-bottom: none;
}

.recommendations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.recommendation-card {
  background-color: rgba(255, 255, 255, 0.02);
  padding: 30px;
  border: 1px solid var(--color-beige);
  transition: all 0.3s ease;
}

.recommendation-card:hover {
  border-color: var(--color-off-white);
  background-color: rgba(255, 255, 255, 0.05);
}

.recommendation-text {
  font-family: var(--font-poppins);
  font-size: 14px;
  line-height: 1.7;
  color: var(--color-off-white);
  margin-bottom: 20px;
  font-style: italic;
}

.recommendation-author {
  border-top: 1px solid var(--color-beige);
  padding-top: 15px;
}

.author-name {
  font-family: var(--font-poppins);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-off-white);
  margin-bottom: 4px;
}

.author-role {
  font-family: var(--font-poppins);
  font-size: 12px;
  color: var(--color-brown);
  opacity: 0.8;
}

.about-footer {
  border-bottom: none;
}

.links-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.link-item {
  font-family: var(--font-poppins);
  font-size: 14px;
  padding: 12px 24px;
  border: 1px solid var(--color-beige);
  transition: all 0.3s ease;
}

.link-item:hover {
  background-color: var(--color-off-white);
  color: var(--color-black);
  border-color: var(--color-off-white);
}

@media (max-width: 768px) {
  .about-page {
    padding-top: 60px;
  }

  .about-hero {
    padding: 60px 20px;
  }

  .about-content {
    padding: 60px 20px;
  }

  .about-section {
    margin-bottom: 60px;
    padding-bottom: 60px;
  }

  .timeline-item {
    grid-template-columns: 80px 1fr;
    gap: 20px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .recommendations {
    grid-template-columns: 1fr;
  }
}
</style>
