package OOP;

import java.util.Scanner;

public class Exceptions {

    // ? Manejo de excepciones

    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);
        System.out.print("Introduce un número: ");
        int num1 = read.nextInt();
        System.out.print("Introduce otro número: ");
        int num2 = read.nextInt();

        try {
            System.out.println(num1 / num2);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Programa finalizado.");
            read.close();
        }
    }
}
