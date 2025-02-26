from machine import Pin
import time
import network
import urequests
FIREBASE_URL = "https://iotdatabase-6d965-default-rtdb.firebaseio.com/" # Substitua pelo seu URL
FIREBASE_SECRET = "AIzaSyCMOLltUbE2ji2Y9mddGf87L9fclkAD5Lg"  # Substitua pela sua chave do Firebase


def conectar_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect('Wokwi-GUEST', '')

    time.sleep(20)
    if wlan.isconnected():
        print("Conectado:", wlan.ifconfig())
    else:
        print("debug2") 

#if wlan.isconnected():
    #led= Pin(21,Pin.OUT)

    #while True:
        #led.value(1)
   
def enviar_para_firebase(dado):
    url = f"https://iotdatabase-6d965-default-rtdb.firebaseio.com//dados.json?auth=AIzaSyCMOLltUbE2ji2Y9mddGf87L9fclkAD5Lg"
    resposta = urequests.patch(url, json=dado)
    print("Resposta Firebase:", resposta.text)
    resposta.close()

# Exemplo de envio de dado
conectar_wifi()
enviar_para_firebase({"temperatura": 25, "umidade": 60})