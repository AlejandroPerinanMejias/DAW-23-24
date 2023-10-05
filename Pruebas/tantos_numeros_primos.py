cantidad = int(input("Introduce un numero para obtener esa cantidad de números primos: "))
if cantidad <= 0:
    print("Introduce un numero mayor que cero")
else:
    primos = []
    numero = 2 
    while len(primos) < cantidad:
        es_primo = True
        for i in range(2, int(numero**0.5) + 1):
            if numero % i == 0:
                es_primo = False
                break
        if es_primo:
            primos.append(numero)
        numero += 1
    print(primos)