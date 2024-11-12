# Importamos las bibliotecas necesarias
from pyparrot.Mambo import Mambo      # Biblioteca para controlar el dron
from flask import Flask, jsonify      # Flask para crear la API, jsonify para respuestas JSON
from flask_cors import CORS           # Para permitir peticiones desde otros dominios

# Creamos la aplicación Flask
app = Flask(__name__)                 # Inicializa la aplicación Flask
CORS(app)                            # Habilita CORS en la aplicación

# Dirección Bluetooth del dron
mamboAddr = "e0:14:d0:63:3d:d0"      # Cambiar por la dirección MAC de tu dron

# Ruta para conectar con el dron
@app.route('/api/connect', methods=['POST'])    # Define endpoint POST en /api/connect
def connect_drone():
    try:
        mambo = Mambo(mamboAddr, use_wifi=False)    # Crea instancia del dron vía Bluetooth
        success = mambo.connect(num_retries=3)       # Intenta conectar 3 veces
        return jsonify({"connected": success})       # Devuelve el resultado de la conexión
    except Exception as e:
        return jsonify({"error": str(e)}), 500      # Si hay error, devuelve código 500

# Ruta para hacer despegar el dron
@app.route('/api/takeoff', methods=['POST'])    # Define endpoint POST en /api/takeoff
def takeoff():
    try:
        mambo.safe_takeoff(5)                       # Despega con 5 segundos de preparación
        return jsonify({"status": "success"})       # Confirma despegue exitoso
    except Exception as e:
        return jsonify({"error": str(e)}), 500      # Si hay error, devuelve código 500

# Punto de entrada del programa
if __name__ == '__main__':           # Solo ejecuta si es el archivo principal
    app.run(port=5000)               # Inicia servidor en puerto 5000