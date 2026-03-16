import { createBrowserRouter } from "react-router-dom";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ServicesPage } from "@/pages/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
