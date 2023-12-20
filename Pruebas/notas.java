import java.util.Scanner;

public class notas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Dime una nota: ");
        double nota = sc.nextDouble();
        sc.nextLine();
        int nota2 = (int) nota;
        switch(nota2){
            case 1: case 2: case 3: case 4:
                System.out.println("Suspenso");
                break; 
            case 5:
                System.out.println("Aprobado");
                break;
            case 6: 
                System.out.println("Bien");
                break;
            case 7: case 8:
                System.out.println("Notable");
                break;
            case 9:
                System.out.println("Sobresaliente");
                break;
            case 10:
                System.out.println("Matricula de honor");
                break;
            default:
                System.out.println("Nota no válida");
        }
    }
}
