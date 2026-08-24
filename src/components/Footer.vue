<template>
  <footer class="footer">
    <!-- CTA Contact Section -->
    <div class="footer-cta">
      <div class="cta-content">
        <h2 class="cta-title">VOUS AVEZ UN PROJET ?</h2>
        <p class="cta-subtitle">Parlons de votre vision créative</p>
        <router-link to="/contact" class="cta-button">DEMANDER UN DEVIS</router-link>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="footer-content">
      <div class="footer-section">
        <h3>MANON LE BIHAN</h3>
        <p>Art Director · Photographer · Graphic Designer</p>
      </div>

      <div class="footer-section">
        <h4>NAVIGATE</h4>
        <ul>
          <li><router-link to="/work">Work</router-link></li>
          <li><router-link to="/expo-photo">Expo Photo</router-link></li>
          <li><router-link to="/about">À Propos</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>FOLLOW</h4>
        <ul>
          <li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
          <li><a href="mailto:hello@seachildoz.com">Email</a></li>
          <li><a href="https://www.linkedin.com" target="_blank">LinkedIn</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2024 Manon Le Bihan. All rights reserved.</p>
      <p>SEACHILDOZ — Personal Archive & Creative Universe</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background-color: var(--color-black);
  border-top: 1px solid var(--color-beige);
  color: var(--color-off-white);
  padding: 60px 20px 30px;
  margin-top: 120px;
}

/* CTA Section */
.footer-cta {
  max-width: 1400px;
  margin: 0 auto 80px;
  background: linear-gradient(135deg, rgba(139, 109, 80, 0.1) 0%, rgba(184, 155, 125, 0.1) 100%);
  border: 1px solid var(--color-beige);
  padding: 60px 40px;
  text-align: center;
}

.cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cta-title {
  font-family: var(--font-anton);
  font-size: clamp(24px, 5vw, 48px);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-off-white);
  line-height: 1.1;
}

.cta-subtitle {
  font-family: var(--font-poppins);
  font-size: 16px;
  color: var(--color-off-white);
  opacity: 0.8;
}

.cta-button {
  font-family: var(--font-poppins);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-black);
  background-color: var(--color-beige);
  padding: 16px 40px;
  border: 2px solid var(--color-beige);
  text-decoration: none;
  transition: all 0.4s ease;
  display: inline-block;
  margin-top: 10px;
}

.cta-button:hover {
  background-color: transparent;
  color: var(--color-beige);
  border-color: var(--color-beige);
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-family: var(--font-anton);
  font-size: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.footer-section h4 {
  font-family: var(--font-poppins);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.footer-section p {
  font-family: var(--font-poppins);
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.8;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  font-family: var(--font-poppins);
  font-size: 13px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.footer-section a:hover {
  opacity: 1;
}

.footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  border-top: 1px solid var(--color-beige);
  padding-top: 30px;
  text-align: center;
  font-family: var(--font-poppins);
  font-size: 12px;
  opacity: 0.6;
}

.footer-bottom p {
  margin: 5px 0;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer {
    padding: 40px 20px 20px;
    margin-top: 80px;
  }

  .footer-cta {
    padding: 40px 20px;
    margin-bottom: 60px;
  }

  .cta-title {
    font-size: clamp(20px, 4vw, 32px);
  }

  .cta-subtitle {
    font-size: 14px;
  }

  .cta-button {
    padding: 14px 30px;
    font-size: 12px;
  }
}
</style>
