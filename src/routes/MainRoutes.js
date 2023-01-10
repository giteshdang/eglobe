import { lazy } from 'react';
import Loadable from '../components/Loadable';
import MainLayout from '../Layout/Layout';

// project imports
// dashboard routing
const HomeViews = Loadable(lazy(() => import('../views/Home.js')));
const Services = Loadable(lazy(() => import('../views/Service.js')));
const About = Loadable(lazy(() => import('../views/About.js')));
const Blog = Loadable(lazy(() => import('../views/Blog.js')));
const BlogInsiders = Loadable(lazy(() => import('../views/BlogInsiders.js')));
const Career = Loadable(lazy(() => import('../views/Career.js')));
const ContactUs = Loadable(lazy(() => import('../views/ContacUs')));
const Hauoli = Loadable(lazy(() => import('../views/Hauoli')));



const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeViews />
        },
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/blog-we-care',
            element: <Blog />
        },
        {
            path: '/blog-business-insiders',
            element: <BlogInsiders />
        },
        {
            path: '/career',
            element: <Career />
        },
        {
            path: '/contact-us',
            element: <ContactUs />
        },
        {
            path: '/hau-oli-page',
            element: <Hauoli />
        }
    ]
};

export default MainRoutes;