import { fsrs, generatorParameters } from 'ts-fsrs';

// Parámetros: 0.9 retención objetivo (sweet spot recomendado)
const params = generatorParameters({
  request_retention: 0.90,
  maximum_interval: 36500,
  enable_fuzz: true,      // Dispersa cargas diarias
  enable_short_term: true // Soporta pasos de aprendizaje cortos
});

export const f = fsrs(params);
