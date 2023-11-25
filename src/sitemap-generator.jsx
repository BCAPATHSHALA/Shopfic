import Sitemap from "react-router-sitemap";
import { BrowserRouter } from "react-router-dom";
import routes from "./App"; // Replace with the actual path to your routes file

const generateSitemap = () => {
  const sitemap = new Sitemap(BrowserRouter, routes);
  return sitemap.toString();
};

const sitemap = generateSitemap();

export default sitemap;
