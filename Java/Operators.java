//? OPERADORES

public class Operators {
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 3;

        opsAritmeticos(num1, num2);
        opsRelacionales(num1, num2);
        opsLogicos(num1, num2);
        opsAsignacion(num1, num2);
        opsIncrementoDecremento(num1, num2);
        opsTernario(num1, num2);
        mathFunctions(num1, num2);
    }

    public static void opsAritmeticos(int num1, int num2) {
        System.out.println("Operadores aritméticos:");

        int suma = num1 + num2; // 8
        System.out.println(suma);
        int resta = num1 - num2; // 2
        System.out.println(resta);
        int multi = num1 * num2; // 15
        System.out.println(multi);
        int divi = num1 / num2; // 1
        System.out.println(divi);
        int mod = num1 % num2; // 2);
        System.out.println(mod);
    }

    public static void opsRelacionales(int num1, int num2) {
        System.out.println("Operadores relacionales:");

        System.out.println(num1 == num2); // false
        System.out.println(num1 != num2); // true
        System.out.println(num1 > num2); // true
        System.out.println(num1 < num2); // false
        System.out.println(num1 >= num2); // true
        System.out.println(num1 <= num2); // false
    }

    public static void opsLogicos(int num1, int num2) {
        System.out.println("Operadores lógicos:");

        System.out.println(num1 > num2 && num1 < num2); // false
        System.out.println(num1 > num2 || num1 < num2); // true
    }

    public static void opsAsignacion(int num1, int num2) {
        System.out.println("Operadores de asignación:");

        num1 += num2; // 8
        System.out.println(num1);
        num1 -= num2; // 2
        System.out.println(num1);
        num1 *= num2; // 15
        System.out.println(num1);
        num1 /= num2; // 1
        System.out.println(num1);
        num1 %= num2; // 2
        System.out.println(num1);
    }

    public static void opsIncrementoDecremento(int num1, int num2) {
        System.out.println("Operadores de incremento y decremento:");

        num1++; // 6
        System.out.println(num1);
        num1--; // 5
        System.out.println(num1);
    }

    public static void opsTernario(int num1, int num2) {
        System.out.println("Operadores ternarios:");

        int result = num1 > num2 ? num1 : num2;
        System.out.println(result);
    }

    public static void mathFunctions(int num1, int num2) {
        System.out.println("Funciones matemáticas:");

        // * max: Devuelve el mayor de los argumentos.
        System.out.println(Math.max(num1, num2)); // 5
        // * min: Devuelve el menor de los argumentos.
        System.out.println(Math.min(num1, num2)); // 3
        // * pow: Devuelve el valor de la potencia de un número.
        System.out.println(Math.pow(num1, num2)); // 125
        // * sqrt: Devuelve la raiz cuadrada de un número.
        System.out.println(Math.sqrt(num1)); // 2.23606797749979
        // * random: Devuelve un número aleatorio entre 0.0 y 1.0.
        // Math.floor(Math.random() * 10): Devuelve un número aleatorio entre 0 y 10
        System.out.println(Math.random()); // 0.123456789
        System.out.println(Math.floor(Math.random() * 10)); // 3
    }
}
