import { areas_en, areas_es } from "./areas";

class Category {
    constructor(title, src, areas){
        this.title = title;
        this.src = src;
        this.areas = areas;
    }
}

export const categories_en = [
    new Category('Industry', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[0], areas_en[1]]),
    new Category('Mining', '/assets/images/mining-banner.jpg', [areas_en[2]]),
    new Category('Infrastructure', '/assets/images/infraestructure-banner.jpg', [areas_en[3], areas_en[4], areas_en[5]]),
    new Category('Energy', '/assets/images/energy-banner.jpg', [areas_en[6], areas_en[7], areas_en[8]]),
    new Category('Resource management', '/assets/images/resources-banner.jpg', [areas_en[9], areas_en[10]]),
    new Category('Urban developments', '/assets/images/urban-banner.jpg', [areas_en[11]]),
    new Category('Forestry', '/assets/images/forestry-banner.jpg', [areas_en[12]]),
    new Category('Others', '/assets/images/others-banner.jpg', [areas_en[13]]),
];

export const categories_es = [
    new Category('Industria', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[0], areas_es[1]]),
    new Category('Minería', '/assets/images/mining-banner.jpg', [areas_es[2]]),
    new Category('Infraestructura', '/assets/images/infraestructure-banner.jpg', [areas_es[3], areas_es[4], areas_es[5]]),
    new Category('Energía', '/assets/images/energy-banner.jpg', [areas_es[6], areas_es[7], areas_es[8]]),
    new Category('Gestíon de recursos', '/assets/images/resources-banner.jpg', [areas_es[9], areas_es[10]]),
    new Category('Desarrollos urbanos', '/assets/images/urban-banner.jpg', [areas_es[11]]),
    new Category('Forestal', '/assets/images/forestry-banner.jpg', [areas_es[12]]),
    new Category('Otros', '/assets/images/others-banner.jpg', [areas_es[13]]),
]