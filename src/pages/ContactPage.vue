<template>
  <div class="contact-page">
    <section class="contact-hero">
      <div class="contact-hero-content">
        <h1 class="title-xl">CONTACT / DEVIS</h1>
        <p class="contact-subtitle">Let's create something great together</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <!-- Services Section -->
        <div class="services-grid">
          <div v-for="service in services" :key="service.id" class="service-card">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-examples">
              <p class="service-label">Examples:</p>
              <ul>
                <li v-for="example in service.examples" :key="example">
                  {{ example }}
                </li>
              </ul>
            </div>
            <p class="service-price">{{ service.price }}</p>
          </div>
        </div>

        <!-- Contact Form Section -->
        <div class="form-section">
          <h2 class="section-heading">REQUEST A QUOTE</h2>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="name">Name *</label>
              <input
                v-model="formData.name"
                type="text"
                id="name"
                required
                placeholder="Your name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input
                v-model="formData.email"
                type="email"
                id="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div class="form-group">
              <label for="company">Company</label>
              <input
                v-model="formData.company"
                type="text"
                id="company"
                placeholder="Your company name"
              />
            </div>

            <div class="form-group">
              <label for="projectType">Project Type *</label>
              <select v-model="formData.projectType" id="projectType" required>
                <option value="">Select a project type</option>
                <option value="art-direction">Art Direction</option>
                <option value="photography">Photography</option>
                <option value="video">Video</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="custom">Custom Project</option>
              </select>
            </div>

            <div class="form-group">
              <label for="budget">Budget *</label>
              <select v-model="formData.budget" id="budget" required>
                <option value="">Select a budget range</option>
                <option value="under-5k">Under €5,000</option>
                <option value="5k-10k">€5,000 - €10,000</option>
                <option value="10k-20k">€10,000 - €20,000</option>
                <option value="20k-50k">€20,000 - €50,000</option>
                <option value="50k+">€50,000+</option>
              </select>
            </div>

            <div class="form-group">
              <label for="timeline">Timeline *</label>
              <select v-model="formData.timeline" id="timeline" required>
                <option value="">Select a timeline</option>
                <option value="immediate">Immediate (0-2 weeks)</option>
                <option value="soon">Soon (1-3 months)</option>
                <option value="flexible">Flexible (3-6 months)</option>
                <option value="planning">Planning phase (6+ months)</option>
              </select>
            </div>

            <div class="form-group full-width">
              <label for="description">Project Description *</label>
              <textarea
                v-model="formData.description"
                id="description"
                rows="6"
                required
                placeholder="Tell me about your project, vision, and requirements..."
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">SEND REQUEST</button>
          </form>
        </div>

        <!-- Direct Contact -->
        <div class="direct-contact">
          <h2 class="section-heading">DIRECT CONTACT</h2>
          <div class="contact-info">
            <p>Email: <a href="mailto:hello@seachildoz.com">hello@seachildoz.com</a></p>
            <p>Phone: <a href="tel:+33612345678">+33 (0)6 12 34 56 78</a></p>
          </div>

          <div class="social-links">
            <h3>Follow</h3>
            <div class="links">
              <a href="https://www.instagram.com" target="_blank">Instagram</a>
              <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const services = [
  {
    id: 1,
    title: 'ART DIRECTION',
    description: 'Creative direction and visual concept development for your brand or campaign.',
    examples: ['Brand universe creation', 'Campaign concepts', 'Visual identity strategy'],
    price: 'Starting from €5,000'
  },
  {
    id: 2,
    title: 'PHOTOGRAPHY',
    description: 'Editorial, commercial, and artistic photography for various needs.',
    examples: ['Brand photography', 'Editorial shoots', 'Product photography'],
    price: 'Starting from €3,000'
  },
  {
    id: 3,
    title: 'VIDEO',
    description: 'Creative direction and production for video content.',
    examples: ['Brand films', 'Social content', 'Documentary-style production'],
    price: 'On quote'
  },
  {
    id: 4,
    title: 'GRAPHIC DESIGN',
    description: 'Comprehensive graphic design for brands and communications.',
    examples: ['Brand identity', 'Editorial design', 'Digital assets'],
    price: 'Starting from €2,000'
  },
  {
    id: 5,
    title: 'CUSTOM PROJECT',
    description: 'Combination of multiple disciplines for unique creative projects.',
    examples: ['Integrated campaigns', 'Art direction + photography', 'Complete branding'],
    price: 'On quote'
  }
]

const formData = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: ''
})

const handleSubmit = () => {
  // In a real application, this would send the form data to a backend
  // For now, we'll just log it and show a success message
  console.log('Form submitted:', formData.value)

  // Create mailto link with form data
  const subject = `Devis - ${formData.value.projectType}`
  const body = `
Name: ${formData.value.name}
Email: ${formData.value.email}
Company: ${formData.value.company}
Project Type: ${formData.value.projectType}
Budget: ${formData.value.budget}
Timeline: ${formData.value.timeline}

Description:
${formData.value.description}
  `.trim()

  window.location.href = `mailto:hello@seachildoz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  // Reset form
  formData.value = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  }
}
</script>

<style scoped>
.contact-page {
  background-color: var(--color-black);
  color: var(--color-off-white);
  padding-top: 70px;
}

.contact-hero {
  background-color: var(--color-black);
  padding: 80px 20px;
  text-align: center;
  border-bottom: 1px solid var(--color-beige);
}

.contact-subtitle {
  font-family: var(--font-poppins);
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-top: 15px;
  opacity: 0.8;
}

.contact-content {
  padding: 100px 20px;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 100px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.service-card {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-beige);
  padding: 40px;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: var(--color-off-white);
  background-color: rgba(255, 255, 255, 0.05);
}

.service-title {
  font-family: var(--font-anton);
  font-size: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 15px;
}

.service-description {
  font-family: var(--font-poppins);
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-off-white);
  margin-bottom: 20px;
}

.service-examples {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-beige);
}

.service-label {
  font-family: var(--font-poppins);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 8px;
}

.service-examples ul {
  list-style: none;
}

.service-examples li {
  font-family: var(--font-poppins);
  font-size: 13px;
  color: var(--color-off-white);
  opacity: 0.8;
  margin-bottom: 6px;
}

.service-price {
  font-family: var(--font-poppins);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-brown);
}

/* Form Section */
.form-section {
  max-width: 800px;
  margin: 0 auto 100px;
  padding-bottom: 100px;
  border-bottom: 1px solid var(--color-beige);
}

.section-heading {
  font-family: var(--font-anton);
  font-size: clamp(28px, 4vw, 48px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 50px;
  line-height: 1.1;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.contact-form label {
  font-family: var(--font-poppins);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brown);
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  font-family: var(--font-poppins);
  font-size: 14px;
  padding: 12px 15px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-beige);
  color: var(--color-off-white);
  transition: all 0.3s ease;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-off-white);
  background-color: rgba(255, 255, 255, 0.05);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--color-off-white);
  opacity: 0.5;
}

.contact-form select {
  cursor: pointer;
}

.contact-form textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  font-family: var(--font-poppins);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 15px 40px;
  background-color: var(--color-off-white);
  color: var(--color-black);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: 20px;
}

.submit-btn:hover {
  background-color: var(--color-brown);
  color: var(--color-off-white);
}

/* Direct Contact */
.direct-contact {
  max-width: 800px;
  margin: 0 auto;
}

.contact-info {
  margin-bottom: 40px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-beige);
}

.contact-info p {
  font-family: var(--font-poppins);
  font-size: 15px;
  line-height: 1.8;
  color: var(--color-off-white);
  margin-bottom: 15px;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

.contact-info a {
  color: var(--color-brown);
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: var(--color-off-white);
}

.social-links {
  padding: 30px 0;
}

.social-links h3 {
  font-family: var(--font-poppins);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 15px;
}

.social-links .links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.social-links a {
  font-family: var(--font-poppins);
  font-size: 13px;
  padding: 10px 20px;
  border: 1px solid var(--color-beige);
  transition: all 0.3s ease;
}

.social-links a:hover {
  border-color: var(--color-off-white);
  background-color: rgba(245, 245, 245, 0.05);
}

@media (max-width: 768px) {
  .contact-page {
    padding-top: 60px;
  }

  .contact-hero {
    padding: 60px 20px;
  }

  .contact-content {
    padding: 60px 20px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    margin-bottom: 60px;
  }

  .form-section {
    margin-bottom: 60px;
    padding-bottom: 60px;
  }
}
</style>
