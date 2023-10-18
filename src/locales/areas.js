import { projects_en, projects_es } from "./projects";

class Area {
    constructor(title, src, projects) {
        this.title = title;
        this.src = src;
        this.projects = projects;
    }
}


export const areas_en = [
    new Area('area1', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area1),
    new Area('area2', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area2),
    new Area('area3', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area3),
    new Area('area4', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area4),
    new Area('area5', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area5),
    new Area('area6', '/assets/images/area-agro-industrial-845x321.jpg', projects_en.area6),
];
export const areas_es = [
    new Area('area1', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area1),
    new Area('area2', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area2),
    new Area('area3', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area3),
    new Area('area4', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area4),
    new Area('area5', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area5),
    new Area('area6', '/assets/images/area-agro-industrial-845x321.jpg', projects_es.area6),
];
