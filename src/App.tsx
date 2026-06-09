import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StickyCTA from './components/layout/StickyCTA';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';

import FaqPage from './pages/FaqPage';
import BlogPostPage from './pages/BlogPostPage';

import { LoadingScreen } from './components/LoadingScreen';
import { motion, AnimatePresence } from 'motion/react';

const PRELOAD_IMAGES = [
  // Hero Images
  "https://i.ibb.co/rRQ3XWRp/IMG-20260605-132311-1.png",
  "https://i.ibb.co/5hGMGxYk/IMG-20260607-120142.png",
  // Services
  "https://i.ibb.co/XZYCd16w/9f981f6dcfdfc41be4be80618be1b625.jpg",
  "https://i.ibb.co/Fb0LHfXR/9eb46adbf12967808e9a9ab34aca6756.jpg",
  "https://i.ibb.co/yFJ2tggC/cf0f095e8dcb0c4bb01a9e7ef707759b.jpg",
  "https://i.ibb.co/JWtyTc1m/d0abf53b406b5e5cac271063e61a2b08.jpg",
  "https://i.ibb.co/GfWLH0jh/af9dbdd64edd4dcd64eb0033ff9813d7.jpg",
  "https://i.ibb.co/Pv3Nh1Zr/e8b28f7a28f5b9db38278f68690d392b.jpg",
  "https://i.ibb.co/Z1dJcstv/693ba9b90928fcab28ee08f92bb5e535.jpg",
  // About Page Team
  "https://i.ibb.co/fYL0Jkck/1780752636022-6aulvm-2-1.jpg",
  "https://i.ibb.co/ZzjkXMqd/IMG-20260606-WA0042.jpg",
  "https://i.ibb.co/ccbThXPR/IMG-20260606-200004.jpg",
  "https://i.ibb.co/5xMqbftT/IMG-20260606-200025.jpg",
  "https://i.ibb.co/hF5N1Djg/IMG-20260606-202520.png",
  // About Page Awards
  "https://i.ibb.co/4RRFB4n5/file-0000000043bc7207a99532ea18f66c4d.png",
  "https://i.ibb.co/0VZyzrGX/IMG-20260606-203644.jpg"
];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-pearl-50 font-sans text-charcoal-900 selection:bg-pearl-200 selection:text-charcoal-900 flex flex-col">
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30, scale: 0.98, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -30, scale: 0.98, filter: 'blur(12px)', transition: { duration: 0.4, ease: 'easeIn' } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col flex-grow w-full"
        >
          <main className="flex-grow w-full">
            <Outlet />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
      <StickyCTA />
      <ScrollRestoration />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:serviceId', element: <ServiceDetailPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'service-areas', element: <ServiceAreasPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogPostPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-of-service', element: <TermsOfServicePage /> },
    ],
  },
]);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload images silently in the background while the loading screen displays
    PRELOAD_IMAGES.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[9999]"
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <RouterProvider router={router} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
