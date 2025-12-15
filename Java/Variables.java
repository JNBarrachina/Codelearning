
// Comentario de una línea
/** Comentario de documentación */

// ? VARIABLES

import java.util.Scanner; // Importamos la clase Scanner

public class Variables {

    public static void main(String[] args) {
        {
            Scanner read = new Scanner(System.in); // Scanner: lectura de datos

            // * Declaración: dataypeo + name

            int a = 10;
            System.out.printf("Entero: %d\n", a);
            float b = 3.14f;
            System.out.printf("Flotante: %f\n", b);
            double c = 3.14;
            System.out.printf("Doble: %f\n", c);
            char singleChar = 'A';
            System.out.printf("Caracter: %c\n", singleChar);
            String d = "Hola";
            System.out.printf("Cadena: %s\n", d);
            boolean e = true;
            System.out.printf("Booleano: %b\n", e);

            // ? Las variables no inicializadas reciben un valor por defecto: 0, 0.0f, '\0',

            // * Constantes
            final int NUM = 10;
            System.out.printf("Constante: %d\n", NUM);

            // ? INPUT-OUTPUT
            System.out.print("Introduce un número: ");

            if (read.hasNextInt()) {
                int num = read.nextInt();
                System.out.println(num);
            } else {
                System.out.println("No has introducido un número");
            }

            // * Close reader object
            read.close();
        }
    }
}