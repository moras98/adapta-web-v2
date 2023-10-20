import { projects_en, projects_es } from "./projects";

class Area {
    constructor(title, src, projects) {
        this.title = title;
        this.src = src;
        this.projects = projects;
    }
}


export const areas_en = [
    new Area('Industry and agribusiness', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area1),
    new Area('Infrastructure and logistics', '/assets/images/area-infraestructura-845x321.jpg', projects_en.area2),
    new Area('Energy', '/assets/images/area-energia.jpg', projects_en.area3),
    new Area('Waste management', '/assets/images/area-residuos-02-845x321.jpg', projects_en.area4),
    new Area('Management of water resources, drinking water and sanitation', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_en.area5),
    new Area('Others', '/assets/images/forest.jpg', projects_en.area6),
];
export const areas_es = [
    new Area('Industria y agroindustria', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area1),
    new Area('Infraestructura y logística', '/assets/images/area-infraestructura-845x321.jpg', projects_es.area2),
    new Area('Energía', '/assets/images/area-energia.jpg', projects_es.area3),
    new Area('Gestión de residuos', '/assets/images/area-residuos-02-845x321.jpg', projects_es.area4),
    new Area('Gestión de recursos hídricos, agua potable y saneamiento', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area5),
    new Area('Varios', '/assets/images/forest.jpg', projects_es.area6),
];
