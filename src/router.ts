import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import ConfidentialitePage from './pages/ConfidentialitePage.vue'
import ContactPage from './pages/ContactPage.vue'
import HomePage from './pages/HomePage.vue'
import JournalDetailPage from './pages/JournalDetailPage.vue'
import JournalPhotoPage from './pages/JournalPhotoPage.vue'
import MentionsLegalesPage from './pages/MentionsLegalesPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
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
    path: '/work/:universe(client|personnel)',
    component: WorkPage,
    name: 'work-universe'
  },
  {
    path: '/work/:id',
    component: WorkDetailPage,
    name: 'work-detail'
  },
  {
    path: '/expo-photo',
    redirect: '/galerie'
  },
  {
    path: '/galerie',
    redirect: '/work/personnel'
  },
  {
    path: '/journal-photo',
    component: JournalPhotoPage,
    name: 'journal-photo'
  },
  {
    path: '/journal-photo/:slug',
    component: JournalDetailPage,
    name: 'journal-detail'
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about'
  },
  {
    path: '/services',
    redirect: '/prestations'
  },
  {
    path: '/prestations',
    component: ServicesPage,
    name: 'services'
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'contact'
  },
  {
    path: '/mentions-legales',
    component: MentionsLegalesPage,
    name: 'mentions-legales'
  },
  {
    path: '/confidentialite',
    component: ConfidentialitePage,
    name: 'confidentialite'
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: 'not-found'
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
