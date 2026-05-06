import { useEffect, useRef, useState } from 'react';
import * as wanakana from 'wanakana';
import { db } from './db';
import { f } from './srs';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const [stats, setStats] = useState({ cards: 0 });

  // 1. Inicializar Wanakana para input en Kana
  useEffect(() => {
    if (inputRef.current) {
      // Convierte automáticamente al teclear: "konnichiwa" -> "こんにちは"
      wanakana.bind(inputRef.current, { IMEMode: 'toHiragana' });
    }
    return () => {
      if (inputRef.current) wanakana.unbind(inputRef.current);
    };
  }, []);

  // 2. Cargar estadísticas básicas de Dexie
  useEffect(() => {
    const loadStats = async () => {
      const count = await db.cards.count();
      setStats({ cards: count });
    };
    loadStats();
  }, []);

  return (
    <div className="app-container" lang="ja">
      <header>
        <h1>🌸 NihongoGo</h1>
        <p>Entorno de inmersión y adquisición</p>
      </header>

      <main>
        <section className="srs-card">
          <h2>Prueba de Input (Romaji a Kana)</h2>
          <p>Escribe en romaji y mira la magia:</p>
          <input 
            ref={inputRef} 
            id="answer" 
            type="text" 
            autoComplete="off" 
            autoCapitalize="off" 
            placeholder="escribe 'arigatou'..."
            className="kana-input"
          />
        </section>

        <section className="dashboard">
          <h3>Métricas (FSRS-6)</h3>
          <p>Tarjetas en la base de datos local: <strong>{stats.cards}</strong></p>
          <button onClick={() => db.cards.add({ type: 'vocab', due: new Date(), scheduler: 'fsrs-6' })}>
            Simular agregar tarjeta
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
