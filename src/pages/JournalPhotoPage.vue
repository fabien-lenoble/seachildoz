<template>
  <div class="journal-photo-page">
    <div class="container">
      <div class="journal-content">
        <!-- Articles List (Sidebar on desktop, tabs on mobile) -->
        <div class="journal-sidebar">
          <div
            v-for="entry in journalEntries"
            :key="entry.id"
            @click="selectEntry(entry.id)"
            :class="['journal-entry-preview', { active: selectedEntryId === entry.id }]"
          >
            <p class="entry-date">{{ formatDate(entry.date) }}</p>
            <h3 class="entry-preview-title">{{ entry.title }}</h3>
            <p class="entry-excerpt">{{ entry.excerpt }}</p>
          </div>
        </div>

        <!-- Full Article -->
        <div class="journal-article">
          <article v-if="selectedEntry">
            <h1 class="article-title">{{ selectedEntry.title }}</h1>
            <p class="article-date">{{ formatDate(selectedEntry.date) }}</p>

            <div class="article-body">
              <p v-for="(paragraph, index) in selectedEntry.fullText.split('\n\n')"
                :key="index"
                class="article-paragraph"
              >
                {{ paragraph }}
              </p>
            </div>

            <div class="article-images">
              <img
                v-for="(image, index) in selectedEntry.images"
                :key="index"
                :src="image"
                :alt="`${selectedEntry.title} - Image ${index + 1}`"
                class="article-image"
              />
            </div>

            <div class="article-tags">
              <span v-for="tag in selectedEntry.tags" :key="tag" class="tag">
                #{{ tag }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { journalEntries } from '../data/gallery.ts'

const selectedEntryId = ref(journalEntries[0].id)

const selectedEntry = computed(() => {
  return journalEntries.find(e => e.id === selectedEntryId.value)
})

const selectEntry = (entryId) => {
  selectedEntryId.value = entryId
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.journal-photo-page {
  background-color: var(--color-black);
  padding: 80px 20px;
}

.journal-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 6rem;
}

.journal-sidebar {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: sticky;
  top: 100px;
  height: fit-content;
  max-height: 80vh;
  overflow-y: auto;
}

.journal-entry-preview {
  padding-bottom: 30px;
  border-bottom: 1px solid var(--color-beige);
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.journal-entry-preview:last-child {
  border-bottom: none;
}

.journal-entry-preview:hover {
  opacity: 0.8;
}

.journal-entry-preview.active {
  opacity: 1;
}

.journal-entry-preview.active .entry-preview-title,
.journal-entry-preview.active .entry-date {
  color: var(--color-off-white);
}

.entry-date {
  font-family: var(--font-poppins);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 8px;
}

.entry-preview-title {
  font-family: var(--font-anton);
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 10px;
  line-height: 1.2;
}

.entry-excerpt {
  font-family: var(--font-poppins);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-off-white);
  opacity: 0.7;
}

.journal-article {
  background-color: rgba(255, 255, 255, 0.01);
  padding: 60px;
  border: 1px solid var(--color-beige);
}

.article-title {
  font-family: var(--font-anton);
  font-size: clamp(32px, 5vw, 56px);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-off-white);
  margin-bottom: 20px;
  line-height: 1.1;
}

.article-date {
  font-family: var(--font-poppins);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brown);
  margin-bottom: 40px;
}

.article-body {
  margin-bottom: 60px;
}

.article-paragraph {
  font-family: var(--font-poppins);
  font-size: 16px;
  line-height: 1.8;
  color: var(--color-off-white);
  margin-bottom: 24px;
  opacity: 0.95;
}

.article-images {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
}

.article-image {
  width: 100%;
  height: auto;
  display: block;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  border-top: 1px solid var(--color-beige);
  padding-top: 30px;
}

.tag {
  font-family: var(--font-poppins);
  font-size: 12px;
  letter-spacing: 0.05em;
  color: var(--color-brown);
}

@media (max-width: 768px) {
  .journal-photo-page {
    padding: 60px 20px;
  }

  .journal-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .journal-sidebar {
    position: relative;
    top: auto;
    max-height: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .journal-entry-preview {
    padding-bottom: 20px;
  }

  .journal-article {
    grid-column: 1 / -1;
    padding: 30px;
  }

  .article-title {
    font-size: clamp(24px, 5vw, 36px);
  }

  .article-paragraph {
    font-size: 14px;
  }
}

/* Scrollbar styling for sidebar */
.journal-sidebar::-webkit-scrollbar {
  width: 6px;
}

.journal-sidebar::-webkit-scrollbar-thumb {
  background: var(--color-brown);
  border-radius: 3px;
}
</style>
