import os
import subprocess
import sys
import webbrowser
import time
import shutil

def check_requirements():
    """Verifica que Node.js y npm estén instalados."""
    tools = ["node", "npm"]
    for tool in tools:
        if shutil.which(tool) is None:
            print(f"❌ Error: '{tool}' no está instalado. Por favor, instálalo para continuar.")
            sys.exit(1)

def run_command(command):
    """Ejecuta comandos de forma segura en Windows/Linux/macOS."""
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"⚠️ Error al ejecutar: {command}\n{e}")
        sys.exit(1)

def main():
    print("🌸 NihongoGo: Iniciando Suite de Desarrollo 2026 🌸\n")
    check_requirements()

    project_name = "app"

    # Crear proyecto si no existe
    if not os.path.exists(project_name):
        print("📦 Generando base React + Vite...")
        run_command(f"npm create vite@latest {project_name} -- --template react")
    
    os.chdir(project_name)

    # Instalación de dependencias del Roadmap
    print("\n📚 Instalando librerías de aprendizaje y persistencia...")
    run_command("npm install ts-fsrs@4 wanakana kuroshiro kuroshiro-analyzer-kuromoji dexie@4")
    
    print("\n🛠️ Configurando plugins PWA y herramientas de calidad...")
    run_command("npm install -D vite-plugin-pwa workbox-window vitest eslint prettier")

    print("\n✅ Entorno configurado correctamente.")

    # Opción de Host
    choice = input("\n🚀 ¿Quieres lanzar el servidor con Host Externo (para probar en móviles)? (s/n): ").lower()
    if choice == 's':
        print("\n🌐 Iniciando servidor en red local...")
        time.sleep(1)
        # Intenta abrir el navegador local
        webbrowser.open("http://localhost:5173")
        # El comando --host permite el acceso desde el móvil vía IP
        run_command("npm run dev -- --host")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n🛑 Proceso cancelado.")