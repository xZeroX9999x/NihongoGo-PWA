<div align="center">

# 🌸 NihongoGo PWA: Ecosistema de Aprendizaje 2026

**Infraestructura de alto rendimiento para la adquisición nativa del japonés, optimizada para hispanohablantes.**

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

</div>

---

## 📖 Visión Técnica
NihongoGo es una **Progressive Web App** construida sobre la premisa del *Input Comprensible*. Este repositorio actúa como el orquestador maestro para desplegar un entorno de desarrollo que integra algoritmos de repetición espaciada modernos y análisis morfológico en tiempo real.

## 🛠️ Stack Tecnológico Core
- **Motor SRS:** `ts-fsrs` (Algoritmo FSRS-6).
- **Escritura Nativa:** `wanakana` para conversión dinámica Romaji-Kana.
- **Análisis de Texto:** `kuroshiro` + `kuromoji` para generación de Furigana.
- **Persistencia:** `Dexie.js` (IndexedDB Wrapper) con migraciones declarativas.
- **Despliegue:** CI/CD automatizado vía GitHub Actions hacia Cloudflare Pages.

## 🚀 Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone [https://github.com/tu-usuario/nihongogo-pwa.git](https://github.com/tu-usuario/nihongogo-pwa.git)
cd nihongogo-pwa

# 2. Ejecutar el orquestador (Configura e inicia el Host)
python setup_env.py