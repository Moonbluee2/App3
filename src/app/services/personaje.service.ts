import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  // 🔹 Arreglo de personajes Marvel (solo se muestra parte por espacio)
  private personajes: Personaje[] = [
    {
        nombre: "Tony Stark",
        alias: "Iron Man",
        equipo: "Los Vengadores",
        poderPrincipal: "Armadura de alta tecnología, genio inventor",
        primeraAparicion: 1963,
    },
    {
        nombre: "Steve Rogers",
        alias: "Capitán América",
        equipo: "Los Vengadores",
        poderPrincipal: "Fuerza, agilidad y resistencia sobrehumanas, escudo de Vibranium",
        primeraAparicion: 1941,
    },
    {
        nombre: "Thor Odinson",
        alias: "Thor",
        equipo: "Los Vengadores",
        poderPrincipal: "Dios del Trueno, control del clima, Mjolnir/Stormbreaker",
        primeraAparicion: 1962,
    },
    {
        nombre: "Bruce Banner",
        alias: "Hulk",
        equipo: "Los Vengadores",
        poderPrincipal: "Fuerza y resistencia ilimitadas, transformación por ira",
        primeraAparicion: 1962,
    },
    {
        nombre: "Natasha Romanoff",
        alias: "Viuda Negra",
        equipo: "Los Vengadores",
        poderPrincipal: "Maestra espía y artista marcial, armamento avanzado",
        primeraAparicion: 1964,
    },
    {
        nombre: "Clint Barton",
        alias: "Ojo de Halcón",
        equipo: "Los Vengadores",
        poderPrincipal: "Maestro arquero, excelente puntería",
        primeraAparicion: 1964,
    },
    {
        nombre: "Peter Parker",
        alias: "Spider-Man",
        equipo: "Los Vengadores (a veces), Defensores",
        poderPrincipal: "Sentido arácnido, fuerza y agilidad proporcionales a una araña, telarañas",
        primeraAparicion: 1962,
    },
    {
        nombre: "James 'Logan' Howlett",
        alias: "Lobezno (Wolverine)",
        equipo: "X-Men",
        poderPrincipal: "Factor curativo regenerativo, esqueleto de Adamantium, garras retráctiles",
        primeraAparicion: 1974,
    },
    {
        nombre: "Charles Xavier",
        alias: "Profesor X",
        equipo: "X-Men",
        poderPrincipal: "Telepatía, genio intelectual",
        primeraAparicion: 1963,
    },
    {
        nombre: "Ororo Munroe",
        alias: "Tormenta (Storm)",
        equipo: "X-Men",
        poderPrincipal: "Manipulación del clima",
        primeraAparicion: 1975,
    },
    {
        nombre: "Scott Summers",
        alias: "Cíclope (Cyclops)",
        equipo: "X-Men",
        poderPrincipal: "Rayos ópticos contusivos",
        primeraAparicion: 1963,
    },
    {
        nombre: "T'Challa",
        alias: "Pantera Negra",
        equipo: "Los Vengadores (a veces)",
        poderPrincipal: "Fuerza, velocidad y sentidos mejorados, traje de Vibranium",
        primeraAparicion: 1966,
    },
    {
        nombre: "Stephen Strange",
        alias: "Doctor Strange",
        equipo: "Maestros de las Artes Místicas, Los Vengadores",
        poderPrincipal: "Hechicero Supremo, manipulación de la magia",
        primeraAparicion: 1963,
    },
    {
        nombre: "Wanda Maximoff",
        alias: "Bruja Escarlata",
        equipo: "Los Vengadores",
        poderPrincipal: "Manipulación de la magia del caos, alteración de la realidad",
        primeraAparicion: 1964,
    },
    {
        nombre: "Vision",
        alias: "Vision",
        equipo: "Los Vengadores",
        poderPrincipal: "Fuerza sobrehumana, vuelo, manipulación de densidad",
        primeraAparicion: 1968,
    },
    {
        nombre: "James 'Bucky' Barnes",
        alias: "Soldado de Invierno",
        equipo: "Los Vengadores, Thunderbolts",
        poderPrincipal: "Brazo biónico, combate avanzado, longevidad",
        primeraAparicion: 1941,
    },
    {
        nombre: "Sam Wilson",
        alias: "Falcon / Capitán América",
        equipo: "Los Vengadores",
        poderPrincipal: "Vuelo con alas mecánicas, combate aéreo",
        primeraAparicion: 1969,
    },
    {
        nombre: "Carol Danvers",
        alias: "Capitana Marvel",
        equipo: "Los Vengadores",
        poderPrincipal: "Vuelo, fuerza sobrehumana, manipulación de energía",
        primeraAparicion: 1968,
    },
    {
        nombre: "Groot",
        alias: "Groot",
        equipo: "Guardianes de la Galaxia",
        poderPrincipal: "Regeneración, fuerza, manipulación de plantas",
        primeraAparicion: 1960,
    },
    {
        nombre: "Rocket Raccoon",
        alias: "Rocket",
        equipo: "Guardianes de la Galaxia",
        poderPrincipal: "Genio táctico, experto en armas, mejoras cibernéticas",
        primeraAparicion: 1976,
    },
    {
        nombre: "Peter Quill",
        alias: "Star-Lord",
        equipo: "Guardianes de la Galaxia",
        poderPrincipal: "Combate, armas especiales, herencia celestial (antes)",
        primeraAparicion: 1976,
    },
    {
        nombre: "Gamora",
        alias: "Gamora",
        equipo: "Guardianes de la Galaxia",
        poderPrincipal: "Maestra asesina, fuerza y curación mejoradas",
        primeraAparicion: 1975,
    },
    {
        nombre: "Drax",
        alias: "Drax el Destructor",
        equipo: "Guardianes de la Galaxia",
        poderPrincipal: "Fuerza y resistencia sobrehumanas",
        primeraAparicion: 1973,
    },
    {
        nombre: "Thanos",
        alias: "El Titán Loco",
        equipo: "La Orden Oscura (antes)",
        poderPrincipal: "Fuerza, inteligencia, manipulación cósmica (con Guantelete del Infinito)",
        primeraAparicion: 1973,
    },
    {
        nombre: "Loki Laufeyson",
        alias: "Loki",
        equipo: "Ninguno (Dios de las Mentiras)",
        poderPrincipal: "Manipulación de magia, ilusionismo, cambio de forma",
        primeraAparicion: 1949,
    },
    {
        nombre: "Magneto",
        alias: "Magneto",
        equipo: "Hermandad de Mutantes",
        poderPrincipal: "Control del magnetismo",
        primeraAparicion: 1963,
    },
    {
        nombre: "Sue Storm",
        alias: "Mujer Invisible",
        equipo: "Los 4 Fantásticos",
        poderPrincipal: "Invisibilidad, campos de fuerza",
        primeraAparicion: 1961,
    },
    {
        nombre: "Reed Richards",
        alias: "Mister Fantástico",
        equipo: "Los 4 Fantásticos",
        poderPrincipal: "Elasticidad, super-genio",
        primeraAparicion: 1961,
    },
    {
        nombre: "Johnny Storm",
        alias: "Antorcha Humana",
        equipo: "Los 4 Fantásticos",
        poderPrincipal: "Vuelo, piroquinesis (control del fuego)",
        primeraAparicion: 1961,
    },
    {
        nombre: "Ben Grimm",
        alias: "La Cosa (The Thing)",
        equipo: "Los 4 Fantásticos",
        poderPrincipal: "Fuerza y resistencia sobrehumanas, piel rocosa",
        primeraAparicion: 1961,
    },
    {
        nombre: "Namor McKenzie",
        alias: "Sub-Mariner",
        equipo: "Defensores (a veces)",
        poderPrincipal: "Fuerza sobrehumana, respiración subacuática, vuelo",
        primeraAparicion: 1939,
    },
    {
        nombre: "Matt Murdock",
        alias: "Daredevil",
        equipo: "Defensores",
        poderPrincipal: "Sentidos aumentados (excluyendo la vista), combate experto",
        primeraAparicion: 1964,
    },
    {
        nombre: "Jessica Jones",
        alias: "Jewel",
        equipo: "Defensores",
        poderPrincipal: "Fuerza sobrehumana, vuelo limitado",
        primeraAparicion: 2001,
    },
    {
        nombre: "Danny Rand",
        alias: "Iron Fist (Puño de Hierro)",
        equipo: "Defensores",
        poderPrincipal: "Puño de Hierro (golpe potenciado por chi), maestro de artes marciales",
        primeraAparicion: 1974,
    },
    {
        nombre: "Luke Cage",
        alias: "Power Man",
        equipo: "Defensores",
        poderPrincipal: "Piel impenetrable, fuerza sobrehumana",
        primeraAparicion: 1972,
    },
    {
        nombre: "Frank Castle",
        alias: "Punisher (Castigador)",
        equipo: "Ninguno (vigilante)",
        poderPrincipal: "Combate, estrategia militar, uso de armas",
        primeraAparicion: 1974,
    },
    {
        nombre: "Stephen Strange (Tierra-838)",
        alias: "Defensor Strange",
        equipo: "Illuminati",
        poderPrincipal: "Hechicero, manipulación de magia",
        primeraAparicion: 2022, // Primera aparición relevante en un contexto diferente (MCU)
    },
    {
        nombre: "Miles Morales",
        alias: "Spider-Man (Ultimate)",
        equipo: "Ultimate Vengadores",
        poderPrincipal: "Sentido arácnido, camuflaje, toque venom (bioelectricidad)",
        primeraAparicion: 2011,
    },
    {
        nombre: "Gwen Stacy",
        alias: "Spider-Gwen / Ghost-Spider",
        equipo: "Guerreros de la Red (Web-Warriors)",
        poderPrincipal: "Sentido arácnido, fuerza y agilidad arácnidas",
        primeraAparicion: 2014,
    },
    {
        nombre: "Norrin Radd",
        alias: "Silver Surfer (Silver Surfer)",
        equipo: "Heraldo de Galactus (antes)",
        poderPrincipal: "Manipulación de energía cósmica, velocidad luz, tabla de surf",
        primeraAparicion: 1966,
    },
    {
        nombre: "Jennifer Walters",
        alias: "She-Hulk",
        equipo: "Los Vengadores (a veces), Defensores",
        poderPrincipal: "Fuerza sobrehumana, intelecto conservado en forma Hulk",
        primeraAparicion: 1980,
    },
    {
        nombre: "Max Eisenhardt",
        alias: "Chico Omega (Kid Omega)",
        equipo: "X-Men",
        poderPrincipal: "Telepatía, telequinesis",
        primeraAparicion: 2003,
    },
    {
        nombre: "Kurt Wagner",
        alias: "Rondador Nocturno (Nightcrawler)",
        equipo: "X-Men",
        poderPrincipal: "Teletransporte",
        primeraAparicion: 1975,
    },
    {
        nombre: "Raven Darkhölme",
        alias: "Mística (Mystique)",
        equipo: "Hermandad de Mutantes",
        poderPrincipal: "Cambio de forma (metamorfo)",
        primeraAparicion: 1978,
    },
    {
        nombre: "Remy LeBeau",
        alias: "Gambito (Gambit)",
        equipo: "X-Men",
        poderPrincipal: "Carga cinética de objetos, maestro de cartas",
        primeraAparicion: 1990,
    },
    {
        nombre: "Wade Wilson",
        alias: "Deadpool",
        equipo: "X-Force (a veces)",
        poderPrincipal: "Factor curativo regenerativo, combate experto, romper la cuarta pared",
        primeraAparicion: 1991,
    },
    {
        nombre: "Kamala Khan",
        alias: "Ms. Marvel",
        equipo: "Los Vengadores",
        poderPrincipal: "Alargamiento, cambio de tamaño, bio-luminescencia (en el MCU)",
        primeraAparicion: 2013,
    },
    {
        nombre: "Marc Spector",
        alias: "Caballero Luna (Moon Knight)",
        equipo: "Ninguno (Servidor de Khonshu)",
        poderPrincipal: "Fuerza mejorada por la luna, combate experto, múltiples personalidades",
        primeraAparicion: 1975,
    },
    {
        nombre: "Shuri",
        alias: "Pantera Negra (temporalmente)",
        equipo: "Wakanda",
        poderPrincipal: "Intelecto genio (científica), tecnología de Vibranium",
        primeraAparicion: 1967,
    },
    {
        nombre: "Dr. Otto Octavius",
        alias: "Doctor Octopus",
        equipo: "Los Seis Siniestros (Sinister Six)",
        poderPrincipal: "Brazos tentáculos mecánicos, genio científico",
        primeraAparicion: 1963,
      },

  ];

  constructor() {}

  // 🔹 Obtener todos los personajes o un rango
  getPersonajes(inicio?: number, fin?: number): Personaje[] {
    if (inicio !== undefined && fin !== undefined) {
      return this.personajes.slice(inicio, fin);
    }
    return this.personajes;
  }

  // 🔹 Obtener personaje por índice
  getPersonaje(indice: number): Personaje | undefined {
    return this.personajes[indice];
  }
}