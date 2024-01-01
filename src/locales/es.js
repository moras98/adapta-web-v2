import { team } from "./routes/es/team";
import { about } from "./routes/es/about";
import { contact } from "./routes/es/contact";
import { home } from "./routes/es/home";
import { experience } from "./routes/es/experience";
import { categories } from "./routes/es/categories";

const es = {
  language: 'es',
  home: home,
  experience: experience,
  categories: categories,
  about: about,
  team: team,
  contact: contact,
};

export default es;
