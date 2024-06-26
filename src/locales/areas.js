import { projects_en, projects_es } from "./projects";

class Area {
  constructor(title, src, projects) {
    this.title = title;
    this.src = src;
    this.projects = projects;
  }
}

export const areas_en = [
  new Area(
    "Industrial sector",
    "/assets/images/industry-banner.jpg",
    projects_en.area1,
  ),
  new Area(
    "Agroindustry",
    "/assets/images/agro-industry-banner.jpg",
    projects_en.area2,
  ),
  new Area(
    "Exploitation and extraction",
    "/assets/images/mining-banner-2.jpg",
    projects_en.area3,
  ),
  new Area(
    "Railway and Road Infrastructure",
    "/assets/images/vial-banner.jpg",
    projects_en.area4,
  ),
  new Area(
    "Port and Logistics Infrastructure",
    "/assets/images/port-banner.jpg",
    projects_en.area5,
  ),
  new Area(
    "Telecommunications Infrastructure",
    "/assets/images/telecom-banner.jpg",
    projects_en.area6,
  ),
  new Area(
    "Solar and Wind Energy",
    "/assets/images/solar-energy.jpg",
    projects_en.area7,
  ),
  new Area(
    "Hydrocarbons",
    "/assets/images/hydrocarbon-banner.jpg",
    projects_en.area8,
  ),
  new Area(
    "Green Hydrogen (H₂)",
    "/assets/images/h2-banner.jpg",
    projects_en.area9,
  ),
  new Area(
    "Solid Waste Management",
    "/assets/images/trash-banner.jpg",
    projects_en.area10,
  ),
  new Area(
    "Water Resources Management, Drinking Water, and Sanitation",
    "/assets/images/forest.jpg",
    projects_en.area11,
  ),
  new Area("", "/assets/images/urban-banner-2.jpg", projects_en.area12),
  new Area(
    "",
    "/assets/images/forestry-banner-2.jpg",
    projects_es.area13,
  ),
  new Area("", "/assets/images/others-banner-2.jpg", projects_en.area14),
];

export const areas_es = [
  new Area(
    "Sector industrial",
    "/assets/images/industry-banner.jpg",
    projects_es.area1,
  ),
  new Area(
    "Agroindustria",
    "/assets/images/agro-industry-banner.jpg",
    projects_es.area2,
  ),
  new Area(
    "Explotación y extracción",
    "/assets/images/mining-banner-2.jpg",
    projects_es.area3,
  ),
  new Area(
    "Infraestructura ferroviaria y vial",
    "/assets/images/vial-banner.jpg",
    projects_es.area4,
  ),
  new Area(
    "Infraestructura portuaria y logística",
    "/assets/images/port-banner.jpg",
    projects_es.area5,
  ),
  new Area(
    "Infraestructura de telecomunicaciones",
    "/assets/images/telecom-banner.jpg",
    projects_es.area6,
  ),
  new Area(
    "Energía solar y eólica",
    "/assets/images/solar-energy.jpg",
    projects_es.area7,
  ),
  new Area(
    "Hidrocarburos",
    "/assets/images/hydrocarbon-banner.jpg",
    projects_es.area8,
  ),
  new Area(
    "Hidrógeno (H₂) verde",
    "/assets/images/h2-banner.jpg",
    projects_es.area9,
  ),
  new Area(
    "Gestión de residuos sólidos",
    "/assets/images/trash-banner.jpg",
    projects_es.area10,
  ),
  new Area(
    "Gestión de recursos hídricos, agua potable y sanemiento",
    "/assets/images/area-recusos-hidricos-845x321.jpg",
    projects_es.area11,
  ),
  new Area("", "/assets/images/urban-banner-2.jpg", projects_es.area12),
  new Area(
    "",
    "/assets/images/forestry-banner-2.jpg",
    projects_es.area13,
  ),
  new Area("", "/assets/images/others-banner-2.jpg", projects_es.area14),
];
