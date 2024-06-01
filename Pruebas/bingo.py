import random
import time

TACHADO = 'TACHADO'
DELAY = 1
SERIE_MIN = 100
SERIE_MAX = 200

def comprobar_linea(cartones):
    for serie, carton in cartones.items():
        for f in range(len(carton)):
            fila = carton[f]
            hay_linea = True
            for numero in fila:
                if numero != TACHADO:
                    hay_linea = False
                    break
            if hay_linea:
                return {"Serie": serie, "linea": f}
    return {}

def comprobar_bingo(cartones):
    for serie, carton in cartones.items():
        hay_bingo = True
        for fila in carton:
            for numero in fila:
                if numero != TACHADO:
                    hay_bingo = False
                    break
            if not hay_bingo:
                break
        if hay_bingo:
            return serie
    return None

def generar_cartones(jugadores):
    cartones = {}
    series = random.sample(range(SERIE_MIN, SERIE_MAX + 1), jugadores)
    for i in range(jugadores):
        cartones[series[i]] = [[random.randint(1, 90) for _ in range(5)] for _ in range(3)]
    return cartones

def extraer_bola(lista_bolas):
    bola = random.randint(1, 90)
    while bola in lista_bolas:
        bola = random.randint(1, 90)
    lista_bolas.append(bola)
    return bola

def marcar_bolas(cartones, bola):
    for carton in cartones.values():
        for fila in carton:
            for i in range(len(fila)):
                if fila[i] == bola:
                    fila[i] = TACHADO

def imprimir_cartones(cartones):
    for serie, carton in cartones.items():
        print(f"Cartón {serie}:")
        for fila in carton:
            print(fila)

def jugar():
    bingo = 0
    cont_bolas = 0
    bolas_sacadas = []
    lista_bolas = []

    jugadores = int(input("¿Cuántos jugadores van a jugar? "))
    lista_cartones = generar_cartones(jugadores)
    
    print("Comienza el juego con los siguientes cartones:")
    imprimir_cartones(lista_cartones)

    while comprobar_linea(lista_cartones) == {} and comprobar_bingo(lista_cartones) is None:
        bola = extraer_bola(lista_bolas)
        cont_bolas += 1
        bolas_sacadas.append(bola)
        
        print(f"Ha salido la bola {bola}")
        marcar_bolas(lista_cartones, bola)
        print("Estos son los números jugados hasta ahora: " + ", ".join(str(b) for b in bolas_sacadas))
        
        linea = comprobar_linea(lista_cartones)
        if linea:
            print(f"LÍNEA! Se ha completado la línea {linea.get('linea')} en el cartón {linea.get('Serie')}")
        
        imprimir_cartones(lista_cartones)
        time.sleep(DELAY)

    while comprobar_bingo(lista_cartones) is None:
        bola = extraer_bola(lista_bolas)
        cont_bolas += 1
        bolas_sacadas.append(bola)
        
        print(f"Ha salido la bola {bola}")
        marcar_bolas(lista_cartones, bola)
        print("Estos son los números jugados hasta ahora: " + ", ".join(str(b) for b in bolas_sacadas))

        imprimir_cartones(lista_cartones)
        time.sleep(DELAY)
    
    serie_ganadora = comprobar_bingo(lista_cartones)
    if serie_ganadora is not None:
        print(f"BINGO! El cartón {serie_ganadora} ha ganado")
    print(f"Se han sacado {cont_bolas} bolas")

jugar()
