import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import ContactPage from './pages/ContactPage.vue'
import ExpoPhotoPage from './pages/ExpoPhotoPage.vue'
import GaleriePage from './pages/GaleriePage.vue'
import HomePage from './pages/HomePage.vue'
import JournalPhotoPage from './pages/JournalPhotoPage.vue'
import WorkDetailPage from './pages/WorkDetailPage.vue'
import WorkPage from './pages/WorkPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/work',
    component: WorkPage,
    name: 'work'
  },
  {
    path: '/work/:id',
    component: WorkDetailPage,
    name: 'work-detail'
  },
  {
    path: '/expo-photo',
    component: ExpoPhotoPage,
    name: 'expo-photo'
  },
  {
    path: '/galerie',
    component: GaleriePage,
    name: 'galerie'
  },
  {
    path: '/journal-photo',
    component: JournalPhotoPage,
    name: 'journal-photo'
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about'
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'contact'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
