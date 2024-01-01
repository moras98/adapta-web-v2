import { projects_en, projects_es } from "./projects";

class Area {
    constructor(title, src, projects) {
        this.title = title;
        this.src = src;
        this.projects = projects;
    }
}


export const areas_en = [
    new Area('Industry', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area1),
    new Area('Agroindustry', '/assets/images/area-infraestructura-845x321.jpg', projects_en.area2),
    new Area('Mining', '/assets/images/area-energia.jpg', projects_en.area3),
    new Area('Road and Railway Infrastructure', '/assets/images/area-residuos-02-845x321.jpg', projects_en.area4),
    new Area('Port and Logistics Infrastructure', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_en.area5),
    new Area('Telecommunications Infrastructure', '/assets/images/forest.jpg', projects_en.area6),
    new Area('Solar and Wind Energy', '/assets/images/forest.jpg', projects_en.area7),
    new Area('Hydrocarbons', '/assets/images/forest.jpg', projects_en.area8),
    new Area('Green Hydrogen (H₂)', '/assets/images/forest.jpg', projects_en.area9),
    new Area('Solid Waste Management', '/assets/images/forest.jpg', projects_en.area10),
    new Area('Water Resources Management, Drinking Water, and Sanitation', '/assets/images/forest.jpg', projects_en.area11),
    new Area('Urban Developments', '/assets/images/forest.jpg', projects_en.area12),
    new Area('Forestry', '/assets/images/forest.jpg', projects_es.area13),
    new Area('Others', '/assets/images/forest.jpg', projects_en.area14),
];
export const areas_es = [
    new Area('Industria', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area1),
    new Area('Agroindustria', '/assets/images/area-infraestructura-845x321.jpg', projects_es.area2),
    new Area('Minería', '/assets/images/area-energia.jpg', projects_es.area3),
    new Area('Infraestructura vial y ferroviaria', '/assets/images/area-residuos-02-845x321.jpg', projects_es.area4),
    new Area('Infraestructura portuaria y logística', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area5),
    new Area('Infraestructura de telecomunicaciones', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area6),
    new Area('Energía solar y eólica', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area7),
    new Area('Hidrocarburos', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area8),
    new Area('Hidrógeno (H₂) verde', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area9),
    new Area('Gestión de residuos sólidos', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area10),
    new Area('Gestión de recursos hídricos, agua potable y sanemiento', '/assets/images/area-recusos-hidricos-845x321.jpg', projects_es.area11),
    new Area('Desarrollos urbanos', '/assets/images/forest.jpg', projects_es.area12),
    new Area('Forestal', '/assets/images/forest.jpg', projects_es.area13),
    new Area('Otros', '/assets/images/forest.jpg', projects_es.area14),
];
