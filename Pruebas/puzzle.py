from random import shuffle

N = 4
TOTAL_NUMEROS = N * N

def hacer_lista(matriz):
    lista_numeros = []
    for f in range(len(matriz)):
        for c in range(len(matriz[f])):
            lista_numeros.append(matriz[f][c])
    return lista_numeros

def generar_matriz_resultado():
    matriz_resultado = []
    n = 1 
    for i in range(N):
        fila = []
        for j in range(N):
            fila.append(n)
            n += 1
        matriz_resultado.append(fila)
    matriz_resultado[N-1][N-1] = 0
    return matriz_resultado

def generar_matriz_inicial(lista):
    shuffle(lista)
    matriz_inicial = []
    pos = 0
    for i in range(N):
        fila = []
        for j in range(N):
            fila.append(lista[pos])
            pos += 1
        matriz_inicial.append(fila)
    return matriz_inicial

def actualizar_matriz(matriz, movimiento):
    return mover_pieza(movimiento, matriz)

def jugar():
    matriz_inicial = generar_matriz_inicial(hacer_lista(generar_matriz_resultado()))
    matriz_objetivo = generar_matriz_resultado()
    print("Bienvenido al puzzle deslizante, este es el tablero al que hay que llegar:")
    dibujar_matriz(matriz_objetivo)
    print("Aquí tienes el tablero inicial, suerte:")
    dibujar_matriz(matriz_inicial)
    while not compara_matrices(matriz_inicial, matriz_objetivo):
        movimiento = input("Dime que movimiento vas a realizar (WASD): ").upper()
        matriz_inicial = actualizar_matriz(matriz_inicial, movimiento)
        dibujar_matriz(matriz_inicial)
    print("¡Has ganado!")

def mover_pieza(movimiento, matriz):
    puede_moverse = True
    for f in range(len(matriz)):
        for c in range(len(matriz[f])):
            if matriz[f][c] == 0:
                if movimiento == "W" and f < N - 1:
                    matriz[f][c], matriz[f + 1][c] = matriz[f + 1][c], matriz[f][c]
                elif movimiento == "S" and f > 0:
                    matriz[f][c], matriz[f - 1][c] = matriz[f - 1][c], matriz[f][c]
                elif movimiento == "A" and c < N - 1:
                    matriz[f][c], matriz[f][c + 1] = matriz[f][c + 1], matriz[f][c]
                elif movimiento == "D" and c > 0:
                    matriz[f][c], matriz[f][c - 1] = matriz[f][c - 1], matriz[f][c]
                else:
                    puede_moverse = False
                if not puede_moverse:
                    print("No se puede realizar el movimiento")
                return matriz
    return matriz

def dibujar_matriz(matriz):
    print()
    print(" -----------------")
    for f in range(N):
        for c in range(N):
            if matriz[f][c] < 10:
                print(end=" ")
                print(matriz[f][c], end=" | ")
            else:
                print(matriz[f][c], end=" | ")
        print()
    print(" -----------------")

def compara_matrices(matriz_inicial, matriz_objetivo):
    for f in range(len(matriz_inicial)):
        for c in range(len(matriz_inicial[f])):
            if matriz_inicial[f][c] != matriz_objetivo[f][c]:
                return False
    return True

if __name__ == "__main__":
    jugar()
