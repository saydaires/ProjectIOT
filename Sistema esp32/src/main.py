from machine import Pin
from time import sleep 
import network

wlan = network.WLAN(network.WLAN.IF_STA)
wlan.active(True)
wlan.scan()
wlan.isconnected()
wlan.connect('ssid', 'key') #ssid e senha
led= Pin(21,Pin.OUT)
import firebase_admin
from firebase_admin import credentials, firestore


cred = credentials.Certificate("caminho do certificado")
firebase_admin.initialize_app(cred)


db = firestore.client()

count_test
doc_ref = db.collection("token")
doc = doc_ref.get()

if doc.exists:
    print("Dados do documento:", doc.to_dict())
else:
    print("Documento não encontrado!")


usuarios_ref = db.collection("usuarios")
docs = usuarios_ref.stream()

print("Documentos na coleção 'usuarios':")
for documento in docs:
    print(f"{documento.id} => {documento.to_dict()}")

while True:
    led.value(1)

    
