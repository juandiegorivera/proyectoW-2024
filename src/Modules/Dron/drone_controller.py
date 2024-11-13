# Importamos las bibliotecas necesarias
from pyparrot.Mambo import Mambo      # Biblioteca para controlar el dron
from flask import Flask, jsonify      # Flask para crear la API, jsonify para respuestas JSON
from flask_cors import CORS           # Para permitir peticiones desde otros dominios

# Creamos la aplicación Flask
app = Flask(__name__)                 # Inicializa la aplicación Flask
CORS(app)                            # Habilita CORS en la aplicación

# Dirección Bluetooth del dron
mamboAddr = "e2:53:83:33:d2:5a"      # Cambiar por la dirección MAC de tu dron
# Añadir la dirección IP si se usa WiFi
droneIP = "192.168.99.33"             # Dirección IP predeterminada del Parrot Mambo

# Variables globales para rastrear el estado
mambo = None
is_connected = False

# Ruta para conectar con el dron
@app.route('/api/connect', methods=['POST'])    # Define endpoint POST en /api/connect
def toggle_drone():
    global mambo, is_connected
    try:
        if not is_connected:
            # Conectar el dron
            mambo = Mambo(mamboAddr, use_wifi=True)  # Cambiar use_wifi a True
            success = mambo.connect(num_retries=3)
            if success:
                is_connected = True
                return jsonify({"status": "connected", "message": "Dron conectado"})
            else:
                return jsonify({"error": "No se pudo conectar al dron"}), 500
        else:
            # Desconectar el dron
            if mambo:
                mambo.disconnect()
                is_connected = False
                mambo = None
                return jsonify({"status": "disconnected", "message": "Dron desconectado"})
            
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Ruta para hacer despegar el dron
@app.route('/api/takeoff', methods=['POST'])    # Define endpoint POST en /api/takeoff
def takeoff():
    global mambo, is_connected
    try:
        if not is_connected or not mambo:
            return jsonify({"error": "El dron no está conectado"}), 400
            
        mambo.safe_takeoff(5)
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Punto de entrada del programa
if __name__ == '__main__':           # Solo ejecuta si es el archivo principal
    app.run(port=5000)               # Inicia servidor en puerto 5000

print(f"Estado de conexión: {is_connected}")
print(f"Objeto mambo: {mambo}")