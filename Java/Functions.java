//? FUNCIONES

import java.util.Scanner;

public class Functions {

    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);

        System.out.print("Introduce un primer número: ");
        int num1 = read.nextInt();
        System.out.print("Introduce un segundo número: ");
        int num2 = read.nextInt();

        System.out.println("Selecciona una operación: 1. Suma; 2. Resta; 3. Multiplicación; 4. División");
        int operation = read.nextInt();

        read.close();

        switch (operation) {
            case 1:
                System.out.println(add(num1, num2));
                break;
            case 2:
                System.out.println(sub(num1, num2));
                break;
            case 3:
                System.out.println(mult(num1, num2));
                break;
            case 4:
                System.out.println(div(num1, num2));
                break;
            default:
                System.out.println("Operación no reconocida");
        }
    }

    public static int add(int a, int b) { // Función con retorno
        return a + b; // return: devuelve el valor y sale de la función
    }

    public static int sub(int a, int b) {
        return a - b;
    }

    public static int mult(int a, int b) {
        return a * b;
    }

    public static int div(int a, int b) {
        return a / b;
    }
}
