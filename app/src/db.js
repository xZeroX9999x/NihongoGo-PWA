import Dexie from 'dexie';

export const db = new Dexie('NihongoGoDB');

// v1 - Esquema inicial
db.version(1).stores({
  cards: '++id, type, due, leech',
  reviews: '++id, cardId, date',
  settings: 'key',
  dialogs: '++id, scenario, date'
});

// v2 - FSRS y Sentence Mining
db.version(2).stores({
  cards: '++id, type, due, leech, scheduler',
  mined: '++id, source, sentence, addedAt' 
}).upgrade(async tx => {
  await tx.table('cards').toCollection().modify(c => {
    c.scheduler = 'sm2'; // Marca vieja para migración
  });
});

// v3 - Pitch accent y audio TTS
db.version(3).stores({
  cards: '++id, type, due, leech, scheduler, pitch',
  reviews: '++id, cardId, date, rating',
  audio: 'hash' // tts cache local
});
