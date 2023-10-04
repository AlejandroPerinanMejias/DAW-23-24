num = int(input("Introduce un número : "))
if num < 2:
    print("No hay números primos")
else:
    primos = []
    for numero in range(2, num + 1):
        es_primo = True
        for divisor in range(2, int(numero**0.5) + 1):
            if numero % divisor == 0:
                es_primo = False
                break
        if es_primo:
            primos.append(numero)
    print("Números primos hasta", num, ":", primos)