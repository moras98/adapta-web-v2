import { areas_en, areas_es } from "./areas";

class Category {
    constructor(title, src, areas){
        this.title = title;
        this.src = src;
        this.areas = areas;
    }
}

export const categories_en = [
    new Category('A', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[0], areas_en[1]]),
    new Category('B', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[2]]),
    new Category('C', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[3], areas_en[4], areas_en[5]]),
    new Category('D', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[6], areas_en[7], areas_en[8]]),
    new Category('E', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[9], areas_en[10]]),
    new Category('F', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[11]]),
    new Category('G', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[12]]),
    new Category('H', '/assets/images/area-agro-industrial-845x321.jpg', [areas_en[13]]),
];

export const categories_es = [
    new Category('A', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[0], areas_es[1]]),
    new Category('B', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[2]]),
    new Category('C', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[3], areas_es[4], areas_es[5]]),
    new Category('D', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[6], areas_es[7], areas_es[8]]),
    new Category('E', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[9], areas_es[10]]),
    new Category('F', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[11]]),
    new Category('G', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[12]]),
    new Category('H', '/assets/images/area-agro-industrial-845x321.jpg', [areas_es[13]]),
]