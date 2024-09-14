import * as clients from './clients';

class Project {
    constructor(title, description, client){
        this.title = title;
        this.description = description;
        this.client = client;
    }
}

export const projects_en = {
    area1: [
        new Project('Production of Portland cement', 'Environmental audits, Environmental Operation Authorization, Waste Management Plan, Environmental Monitoring, Environmental Technical Advisory.', [clients.cielo_azul]),
        new Project('Production of Portland cement', 'Environmental legal compliance audits, Environmental Operation Authorization, Waste Management Plan, Environmental Monitoring, Stormwater Management Study for the Concrete Plant, Industrial Drainage Authorization, Environmental Technical Advisory.', [clients.cementos_artigas]),
        new Project('Production of asphalt mixtures', 'nvironmental audits, Environmental Operation Authorization, Waste Management Plan, Environmental Monitoring, Environmental Technical Advisory.', [clients.idalar]),
        new Project('Manufacturing, marketing, and distribution of beverages and snacks', 'Implementation of an Environmental Management System, Declaration of Packaging, Representation before CEMPRE.', [clients.pepsico]),
        new Project('Manufacture of sanitary and kitchen products, ceramic materials, and others for construction', 'Environmental Authorization, Study of Measures for Controlling Stormwater Associated with Territorial Impact Study.', [clients.acher]),
        new Project('Special Economic Zone for the creation of Audiovisual Industry Content', 'Project Communication and Environmental Feasibility of Location. Punta del Este Film Studios.', [clients.ancap]),
    ],
    area2: [
        new Project('Bulk Terminal at the Port of Montevideo', 'Expansion of Environmental Authorization for a new docking front and for the hydrocarbon unloading terminal, Construction Environmental Management Plan, Environmental Audits, Environmental Operation Authorization, Waste Management Plan, Environmental Monitoring, Atmospheric Emission Modeling, Environmental Performance Reports, Environmental Monitoring, Environmental Technical Advisory.', [clients.tgm]),
        new Project('Conditioning and drying of grains', 'Expansion of Environmental Authorization for the grain plant, Environmental Operation Authorization and Waste Management Plan, Environmental Monitoring, Atmospheric Emission Modeling, Environmental Performance Reports.', [clients.fadimax]),
        new Project('Formulation of phytosanitary and veterinary products', 'Expansion of environmental authorization, Environmental Performance Reports, Environmental Audit, Effluent Treatment, Industrial Drainage Authorization, Technical Assistance.', [clients.proquimur]),
        new Project('Specialized terminal for the storage and transshipment of bulk cargo in Nueva Palmira', 'Environmental Authorization for the new platform and crane, Construction Environmental Management Plan, Environmental Operation Authorization.', [clients.corporacion]),
        new Project('Production of biofuel, animal feed, energy, and sugar', 'Special Environmental Authorization for the Bella Unión plant. Industrial Drainage Authorization, Submarine Emissary Environmental Authorization, Solid Waste Management Plan.', [clients.alur]),
        new Project('Production and marketing of agrochemicals', 'AEnvironmental audits of waste management due to the closure of the agrochemical formulation plant.', [clients.cheminova]),
    ],
    area3: [
        new Project('Extraction, production, and supply of granitic stone of various granulometries', 'Environmental Performance Reports, Permits for the use of water reservoirs, Environmental Operation Authorization, Technical Assistance.', [clients.canteras_mdo]),
        new Project('Opening and operation project of two limestone rock quarries', 'Project Communication (preliminary Impact Study).', [clients.cementos_artigas]),
        new Project('Extraction and crushing of granite', 'Modeling of air quality dispersion from three quarries.', [clients.cass]),
    ],
    area4: [
        new Project('Construction of the Central Montevideo-Paso de los Toros Railroad', 'Structuring, implementation, and monitoring of the Environmental and Social Management System for the project (Environmental Project Management)', [clients.ccfc]),
        new Project('Construction of the Central Montevideo-Paso de los Toros Railroad', 'Environmental and Social Management Plan for the sleeper and welding plant, Environmental Monitoring, Archaeological Monitoring, Assessment of environmental liabilities', [clients.ccfc]),
        new Project('Program for the Improvement of Productive Rural Roads UR-L 1190 (PCRP II)', 'Environmental and Social Management System (SGAS), Environmental and Social Management Framework (MGAS), Strategic Environmental and Social Analysis (AAS), Environmental and Social Management Plan (PGAS), and Stakeholder Participation Plan (PPPI) according to the Environmental and Social Policy Framework (MPAS) of the IDB', [clients.bid, clients.opp]),
        new Project('CVU III Road Infrastructure Program - Route 6', 'Environmental and Social Management System (SGAS), Environmental and Social Management Framework (MGAS), Strategic Environmental and Social Analysis (AAS), Environmental and Social Management Plan (PGAS), and Expropriation Plan according to the Environmental and Social Policy Framework (MPAS) of the IDB', [clients.bid]),
        new Project('Subnational Development and Management Program (PDGS III) for the development and strengthening of subnational (departmental) governments', '36 priority projects in 18 departments of Uruguay (except Montevideo). Environmental and Social Management System (SGAS), Environmental and Social Management Framework (MGAS), Strategic Environmental and Social Evaluation (EASE), and Stakeholder Participation Plan (PPPI) according to the Environmental and Social Policy Framework (MPAS) of the IDB', [clients.bid]),
        new Project('Extension of the boardwalk in Boca del Cufré', 'Environmental Authorization.', [clients.san_jose]),
        new Project('Bypass to the cities of Carmelo and Rocha, bridges over the Vacas stream and routes 9, 15, and 54, corrections to the route 15', 'Environmental Authorization, Environmental Monitoring, Construction Environmental Management Plan, Communication Plan.', [clients.gvo, clients.hyg, clients.traxpalco, clients.ciemsa]),
    ],
    area5: [
        new Project('Specialized Cellulose Port Terminal at the Port of Montevideo', 'Environmental Authorization, Construction Environmental Management Plan, Waste Management Plan, Environmental Monitoring, Dredging Control Monitoring, Environmental Work Monitoring, Environmental Operation Authorization.', [clients.upm]),
        new Project('Port of Piriápolis (Maldonado department)', 'Environmental Operation Authorization, Environmental Monitoring, Waste Management Plan, Environmental Training.', [clients.ancap]),
        new Project('M´Bopicuá Logistics and Industrial Terminal (Uruguay River)', 'Environmental Operation Authorization, Environmental Performance Evaluation, Waste Management Plan, Hydrological Studies.', [clients.montes_del_plata]),
        new Project('Port terminal, expansion of unloading capacity, and new barge dock (Nueva Palmira)', 'Expansion of Environmental Authorization.', [clients.corporacion]),
        new Project('Uruguayan Bulk Terminals', 'Technical advice.', [clients.tgu]),
    ],
    area6: [
        new Project('Submarine Fiber Optic Cable System MALBEC', 'Environmental pre-feasibility study, documentation management with involved organizations, technical advice, process monitoring.', [clients.eye, clients.asn, clients.facebook]),
        new Project('Extension of the TANNAT Submarine Cable System', 'Environmental pre-feasibility study, documentation management with involved organizations, technical advice, process monitoring.', [clients.eye, clients.asn, clients.facebook]),
        new Project('Firmina Cable', 'Environmental authorizations, documentation management with involved organizations, environmental monitoring, coordination of environmental restoration works.', [clients.wsp, clients.google]),
    ],
    area7: [
        new Project('Arapey Solar Plant with a nominal power of 134 MW', 'Environmental authorizations, technical advice.', [clients.hive]),
        new Project('Esperanza Hybrid Park: 75.9 MW installed wind park and 49.4 MWp nominal solar park. ', 'Autorizaciones ambientales', [clients.sowitec]),
        new Project('Puntas del Queguay Hybrid Park: 190.4 MW installed wind park and 140.4 MWp nominal solar park.', 'Environmental authorizations.', [clients.ancap]),
        new Project('Terrasolar Solar Plant with a nominal capacity of 141.94 MWp', 'Environmental authorizations.', [clients.sowitec]),
        new Project('El Naranjal Solar Park with a nominal power of 50 MWca and Del Litoral Solar Park with a nominal power of 15,810 KWac', 'Operation environmental monitoring.', [clients.ergo]),
        new Project('Yaguarí Solar Plant with a nominal power of 119.7 MWac', 'Environmental authorizations..', [clients.tether]),
        new Project('Punta del Tigre Photovoltaic Plant with a nominal power of 53 MWA', 'Environmental authorizations, archaeological monitoring of the work.', [clients.ute]),
    ],
    area8: [
        new Project('Fuel transfer system and a pipeline connecting the TGM terminal to the La Teja Refinery of ANCAP', 'Environmental and Social Risk and Impact Assessment (ERIAS), Environmental and Social Management Plan (PGAS).', [clients.tgm, clients.banco_mundial]),
        new Project('Fuel transfer system and a pipeline connecting the TGM terminal to the La Teja Refinery of ANCAP', 'Environmental authorizations, construction environmental management plan.', [clients.tgm]),
        new Project('ANCAP Refinery', 'Compliance assessment of the quality management system requirements, environmental audits.', [clients.ancap]),
    ],
    area9: [
        new Project('Green hydrogen generation plant with 520 MW electrolysis power', 'Environmental authorizations', [clients.dh2]),
        new Project('Pilot Plant for Production, Storage, and Dispensing of Green Hydrogen', 'Environmental authorizations.', [clients.ancap, clients.bid]),
    ],
    area10: [
        new Project('Tire and inner tube storage and processing plant', 'Environmental Operation Authorization, Renewal of Environmental Operation Authorization, modifications of environmental authorizations, environmental performance reports, waste declaration, noise monitoring.', [clients.fadimax]),
        new Project('Clean waste management circuit in Ciudad Vieja', 'roposal for a clean waste management circuit plan.', [clients.progretec, clients.camara_comercio]),
        new Project('Felipe Cardoso final disposal site', 'Environmental authorizations, Environmental Operation Authorization, engineering project for the expansion of the final disposal site.', [clients.imm]),
        new Project('Semi-automatic waste sorting plant', 'Environmental authorizations.', [clients.imm]),
        new Project('National obsolete pesticide management plan', 'Preparation of the National plan for obsolete pesticide management, preliminary cost and financing estimate, preparation of terms of reference for the call to managers for plan implementation.', [clients.fao, clients.m_ambiente]),
        new Project('Tire retreading plant', 'Waste management plan.', [clients.rolcon]),
    ],
    area11: [
        new Project('Salto Grande Hydroelectric Complex', 'Manual for drinking water use, environmental audit of the monitoring plan.', [clients.salto_grande]),
        new Project('Casupá Dam to strengthen the Metropolitan drinking water system of the city of Montevideo', 'Environmental authorizations, construction environmental management plan, mapping, and valuation of ecosystems to be restored.', [clients.typsa, clients.ose]),
        new Project('Dams for the Bichadero Norte and Bichadero Sur irrigation system', 'Environmental authorizations.', [clients.ceibos]),
        new Project('Drinking water supply in the cities of Fray Bentos and Young', 'Construction environmental management plan, environmental audits, and environmental monitoring reports.', [clients.mantiba]),
        new Project('Construction of the sewage system for the city of Fray Marcos', 'Construction environmental management plan, environmental audits, and environmental monitoring reports.', [clients.mantiba]),
        new Project('Dredging of the Martín García binational channel', 'Environmental impact assessment, dredging environmental management plan.', [clients.jandenul]),
    ],
    area12: [
        new Project('Subdivision in Pando', 'Environmental authorizations.', [clients.ancap]),
        new Project('Subdivision in Boca del Cufré', 'Environmental authorizations.', [clients.ancap]),
        new Project('Plaza Colón Shopping Center', 'Environmental authorization and Waste Management Plan within the framework of the Territorial Impact Study.', [clients.taranto]),
    ],
    area13: [
        new Project('Margay Forestry Project', 'Environmental and social due diligence.', [clients.bergstein]),
        new Project('Forestry Plantations', 'Environmental and social due diligence.', [clients.bergstein]),
        new Project('Forestry Project', 'Social due diligence', [clients.fas]),
        new Project('Forestry Plantation', 'Environmental authorizations.', [clients.martinelli]),
    ],
    area14: [
        new Project('Packaging production plant and Packaging Recycling Plant', 'Due Diligence Phase I.', [clients.envase_mexico]),
        new Project('Mortar production plant', 'Due Diligence Phase I.', [clients.urumix]),
    ],
};

export const projects_es = {
    area1: [
        new Project('Producción de cemento portland', 'Auditorías ambientales de obra, Autorización Ambiental de Operación, Plan de Gestión de Residuos, Monitoreos ambientales,  Asesoría técnica ambiental.', [clients.cielo_azul]),
        new Project('Producción de cemento portland', 'Auditorías de cumplimiento legal ambiental, Autorización Ambiental de Operación, Plan de Gestión de Residuos, Monitoreos ambientales, Estudio de manejo de pluviales de planta  de Hormigones, Autorización de Desague Industrial, Asesoría técnica ambiental', [clients.cementos_artigas]),
        new Project('Producción de mezclas asfálticas', 'Auditorías ambientales, Autorización Ambiental de Operación, Plan de Gestión de Residuos, Monitoreos ambientales, Asesoría técnica ambiental', [clients.idalar]),
        new Project('Fabricación, comercialización y distribución de bebidas y aperitivos', 'Implementación de un Sistema de Gestión Ambiental, Declaraciòn Jurada de Envases, Representación ante CEMPRE.', [clients.pepsico]),
        new Project('Fabricación de productos de sanitaria y mobiliario de baños y cocinas, materiales cerámicos y otros para la construcción.', 'Autorización Ambiental, Estudio de Medidas de Control de Escurrimiento Pluvial asociadas Estudio de Impacto Territorial', [clients.acher]),
        new Project('Zona Económica Especial para la creación de Contenidos de la Industria Audiovisual', 'Comunicación de proyecto y Viabilidad Ambiental de Localización.Punta del Este Film Studios.', [clients.ancap]),
    ],
    area2: [
        new Project('Terminal de Graneles en Puerto de Montevideo', 'Ampliación de la Autorización Ambiental para nuevo frente de atraque, y para terminal de descarga de hidrocarburos, Plan de Gestión Ambiental de Construcción, Auditorías ambientales de obra, Autorización Ambiental de Operación y Plan de Gestión de Residuos, Monitoreos ambientales, Modelación de emisiones a la atmósfera, Informes de desempeño ambiental, Seguimiento ambiental, Asesoría técnica ambiental.', [clients.tgm]),
        new Project('Acondicionamiento y secado de granos', 'Ampliación de la Autorización Ambiental de la planta de granos, Autorización Ambiental de Operación y Plan de Gestión de Residuos, Monitoreos ambientales, Modelación de emisiones a la atmósfera, Informes de desempeño.', [clients.fadimax]),
        new Project('Formulación de productos fitosanitarios y veterinarios', 'Ampliación de la Autorización ambiental, Informes de Desempeño Ambintal, Auditoría ambiental, Tramiento de efluentes, Autorización de desague industrial, Asesoramiento técnico.', [clients.proquimur]),
        new Project('Terminal especializada en almacenamiento y trasbordo de cargas a granel en Nueva Palmira.', 'Autorización Ambiental de nueva explanada y grúa, Plan de Gestión Ambiental de Contrucción, Autorización Ambiental de Operación.', [clients.corporacion]),
        new Project('Producción de biocumbustible, alimento animal, energía y azúcar', 'Autorización Ambiental especial de planta de Bella Unión, Autorización de Desague Industrial, Autorización Ambiental de emisario subacuático, Plan de Gestión de Residuos Sólidos.', [clients.alur]),
        new Project('Producción y comercialización de agroquímicos', 'Auditorías ambientales de gestión de residuos por cierre de actividades de planta de formulación de agroquímicos', [clients.cheminova]),
    ],
    area3: [
        new Project('Extracción producción y suministro de piedra granítica de diversas granulometrías', 'Informes de Desempeño Ambiental, Permisos para el uso de resevorios de agua, Autorización Ambiental de Operación, Asesoramiento Técnico', [clients.canteras_mdo]),
        new Project('Proyecto de apertura y explotación de dos canteras de roca caliza', 'Comunicación de Proyecto (estudio de Impacto preliminar).', [clients.cementos_artigas]),
        new Project('Extracción y trituración de granito', 'Modelación de la dispersión de calidad de aire de tres canteras.', [clients.cass]),
    ],
    area4: [
        new Project('Construcción del Ferrocarril Central Montevideo- Paso de los Toros', 'Estructuración, implantación y seguimiento del Sistema de Gestión ambiental y Social de obra (Gerenciamiento ambiental de obra)', [clients.ccfc]),
        new Project('Construcción del Ferrocarril Central Montevideo (Paso de los Toros)', 'Plan de Gestión Ambiental y Social de planta de durmientes y planta de soldadura, Monitoreos Ambientales, Seguimiento arqueológico, Relevamiento de pasivos ambientales', [clients.ccfc]),
        new Project('Programa para el Mejoramiento de Caminos Rurales Productivos UR-L 1190 (PCRP II)', 'Sistema de Gestión Ambiental y Social (SGAS), Marco de Gestión Ambiental y Social (MGAS) , Análisis Ambiental y Social Estratégica (AAS), Plan de Gestión Ambiental y Social (PGAS) y Plan de Participación de las Partes Interesadas (PPPI) de acuerdo al Marco de Política Ambiental y Social (MPAS) del BID', [clients.bid, clients.opp]),
        new Project('Programa de Infraestructura Vial CVU III - Ruta 6', 'Sistema de Gestión Ambiental y Social (SGAS), Marco de Gestión Ambiental y Social (MGAS), Análisis Ambiental y Social Estratégica (AAS), Plan de Gestión Ambiental y Social (PGAS) y Plan de Expropiaciones.de acuerdo al Marco de Política Ambiental y Social (MPAS) del BID', [clients.bid]),
        new Project('Programa de Desarrollo y Gestión Subnacional (PDGS III) para el desarrollo y fortalecimiento de gobiernos subnacionales (departamentales).', '36 proyectos de interés prioritario en 18 de departamentos de Uruguay (excepto Montevideo). Sistema de Gestión Ambiental y Social (SGAS), Marco de Gestión Ambiental y Social (MGAS), Evaluación Ambiental y Social Estratégica (EASE) y Plan de Participación de las Partes Interesadas (PPPI) de acuerdo al Marco de Política Ambiental y Social (MPAS) del BID', [clients.bid]),
        new Project('Extensión de la rambla de la localidad Boca del Cufré', 'Autorización Ambiental.', [clients.san_jose]),
        new Project('Bypass a las ciudades de Carmelo y Rocha, puentes sobre arroyo de las Vacas y  las rutas 9, 15 y 54, correcciones de trazado sobre la ruta 15. ', 'Autorización Ambiental, Monitoreos ambientales, Plan de Gestión Ambiental de Construcción, Plan de Comunicación.', [clients.gvo, clients.hyg, clients.traxpalco, clients.ciemsa]),
    ],
    area5: [
        new Project('Terminal Portuaria Especializada en Celulosa en el Puerto de Montevideo', 'Autorización Ambiental, Plan de Gestión Ambiental de Construcción, Plan de Gestión de Residuos, Monitoreos ambientales, Monitoreo de control de dragado, Seguimiento Ambiental de Obra, Autorización Ambiental de Operación.', [clients.upm]),
        new Project('Puerto de Piriápolis (departamento de Maldonado)', 'Autorización Ambiental de Operación, Monitoreos ambientales, Plan de Gestión de Residuos, Capacitaciones ambientales.', [clients.ancap]),
        new Project('Terminal Logística e Industrial M´Bopicuá. (río Uruguay)', 'Autorización Ambiental de Operación,  Evaluación de Desempeño Ambiental, Plan de Gestión de Residuos, Estudios hidrológicos', [clients.montes_del_plata]),
        new Project('Terminal portuaria, ampliación de la capacidad de descarga y nuevo muelle de barcazas ( río Uruguay, Nueva Palmira)', 'Ampliación de Autorización Ambiental.', [clients.corporacion]),
        new Project('Terminales Graneleras Uruguayas', 'Asesoramiento técnico.', [clients.tgu]),
    ],
    area6: [
        new Project('Sistema de cable de fibra óptica submarino MALBEC', 'Estudio de prefactibilidad ambiental, gestión de documentación ante organismos involucrados, asesoramiento técnico, seguimiento del proceso.', [clients.eye, clients.asn, clients.facebook]),
        new Project('Extensión del Sistema de cable submarino TANNAT', 'Estudio de prefactibilidad ambiental, gestión de documentación ante organismos involucrados, asesoramiento técnico, seguimiento del proceso.', [clients.eye, clients.asn, clients.facebook]),
        new Project('Cable Firmina', 'Autorizaciones ambientales, gestión de documentación ante organismos involucrados, seguimiento ambiental, coordinación de obras de restauración ambiental.', [clients.wsp, clients.google]),
    ],
    area7: [
        new Project('Planta solar Arapey de 134 MW de potencia nominal', 'Autorizaciones ambientales, asesoramiento técnico.', [clients.hive]),
        new Project('Parque híbrido Esperanza: parque eólico de 75,9 MW de potencia instalada y parque solar de 49,4 MWp de potencia nominal', 'Autorizaciones ambientales', [clients.sowitec]),
        new Project('Parque híbrido Puntas del Queguay: parque eólico de 190,4 MW de potencia instalada y parque solar de 140,4, MWp de potencia nominal', 'Autorizaciones ambientales.', [clients.ancap]),
        new Project('Planta solar Terrasolar de 141,94 MWp de capacidad nominal', 'Autorizaciones ambientales.', [clients.sowitec]),
        new Project('Parque solar El Naranjal de 50 MWca de potencia nominal y Parque solar Del Litoral de 15.810 KWac de potencia nominal', 'Monitoreos ambientales de operación.', [clients.ergo]),
        new Project('Planta solar Yaguarí de 119,7 MWac de potencia nominal', 'Autorizaciones ambientales.', [clients.tether]),
        new Project('Planta fotovoltaica de Punta del Tigre de 53 MWA de potencia nominal', 'Autorizaciones ambientales, seguimiento arqueológico de obra.', [clients.ute]),
    ],
    area8: [
        new Project('Sistema de transferencia de combustibles y un oleoducto que conecta la terminal de TGM con la Refinería La Teja de ANCAP', 'Evaluación de Riesgos e Impactos Ambientales y Sociales (ERIAS), plan de Gestión Ambiental y Social (PGAS).', [clients.tgm, clients.banco_mundial]),
        new Project('Sistema de transferencia de combustibles y un oleoducto que conecta la terminal de TGM con la Refinería La Teja de ANCAP', 'Autorizaciones ambientales, plan de gestión ambiental de construcción.', [clients.tgm]),
        new Project('Refinería ANCAP', 'Evaluación de cumplimiento de los requisitos del sistema de gestión de calidad, auditorías ambientales.', [clients.ancap]),
    ],
    area9: [
        new Project('Planta de generación de hidrógeno verde con potencia de electrólisis de 520 MW', 'Autorizaciones ambientales', [clients.dh2]),
        new Project('Planta Piloto de Producción, Almacenamiento y Dispensado de Hidrógeno Verde', 'Autorizaciones ambientales.', [clients.ancap, clients.bid]),
    ],
    area10: [
        new Project('Planta de acopio y procesamiento de neumáticos y cámaras fuera de uso (NFU)', 'Autorización Ambiental de Operación, Renovación de la Autorización ambiental de operación, modificaciones de autorizaciones ambientales, informes de desempeño ambiental Declaración jurada de residuos, monitoreos de ruido.', [clients.fadimax]),
        new Project('Circuito limpio de gestión de residuos en Ciudad Vieja', 'Propuesta de plan de circuito limpio de gestión de residuos.', [clients.progretec, clients.camara_comercio]),
        new Project('Sitio de disposición final Felipe Cardoso', 'Autorizaciones ambientales, Autorización Ambiental de Operación, proyecto de ingeniería para la ampliación del sitio de disposición final.', [clients.imm]),
        new Project('Planta de clasificación semiautomática de residuos', 'Autorizaciones ambientales.', [clients.imm]),
        new Project('Plan nacional de gestión de plaguicidas obsoletos', 'Elaboración del Plan nacional de gestión de plaguicidas obsoletos, estimación preliminar de costos y financiamiento, elaboración de los términos de referencia para el llamado a gestores para la implementación del plan de gestión de plaguicidas obsoletos.', [clients.fao, clients.m_ambiente]),
        new Project('Planta de recauchutaje de neumáticos', 'Plan de gestión de residuos.', [clients.rolcon]),
    ],
    area11: [
        new Project('Complejo hidroeléctrico de Salto Grande', 'Manual de uso de agua potable, auditoría ambiental del Plan de monitoreo.', [clients.salto_grande]),
        new Project('Represa Casupá para robustecer el sistema Metropolitano de agua potable de la ciudad de Montevideo', 'Autorizaciones ambientales, plan de gestión ambiental de construcción, mapeo y valoración de ecosistemas a restaurar.', [clients.typsa, clients.ose]),
        new Project('Represas para sistema de riego Bichadero Norte y Bichadero Sur', 'Autorizaciones ambientales.', [clients.ceibos]),
        new Project('Abastecimiento de agua potable en la ciudad de Fray Bentos y Young', 'Plan de gestión ambiental de construcción, auditorías ambientales e informes de seguimiento ambiental de obra.', [clients.mantiba]),
        new Project('Construcción del sistema de saneamiento de la ciudad de Fray Marcos', 'Plan de gestión ambiental de construcción, auditorías ambientales e informes de seguimiento ambiental de obra.', [clients.mantiba]),
        new Project('Dragado del canal binacional Martín García', 'Evaluación de impacto ambiental, Plan de Gestión Ambiental del dragado.', [clients.jandenul]),
    ],
    area12: [
        new Project('Fraccionamiento en Pando', 'Autorizaciones ambientales.', [clients.ancap]),
        new Project('Fraccionamiento en Boca del Cufré', 'Autorizaciones ambientales.', [clients.ancap]),
        new Project('Shopping Plaza Colón', 'Autorización ambiental y Plan de gestión de residuos en el marco del Estudio de Impacto Territorial.', [clients.taranto]),
    ],
    area13: [
        new Project('Proyecto Forestal Margay', 'Due Diligence ambiental y social.', [clients.bergstein]),
        new Project('Plantaciones Forestales', 'Due Diligence ambiental y social.', [clients.bergstein]),
        new Project('Proyecto forestal', 'Due Diligence social', [clients.fas]),
        new Project('Plantación forestal', 'Autorizaciones ambientales.', [clients.martinelli]),
    ],
    area14: [
        new Project('Planta de producción de envases y Planta de Reciclaje de envases', 'Due Diligence fase I', [clients.envase_mexico]),
        new Project('Planta de producción de morteros', 'Due Diligence fase I', [clients.urumix]),
    ],
};
