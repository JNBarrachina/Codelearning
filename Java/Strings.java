//? STRINGS

public class Strings {
    public static void main(String[] args) {
        String stringLiteral = "Hello"; // String literal
        String stringObject = new String("Juancho"); // String object

        // * OPERACIONES BÁSICAS
        // Concatenation
        String result = stringLiteral + " " + stringObject;
        System.out.println(result);

        // Length
        System.out.println(stringLiteral.length()); // 5

        // chatAt
        System.out.println(stringLiteral.charAt(0)); // H

        // Substring
        System.out.println(stringLiteral.substring(2)); // llo
        System.out.println(stringLiteral.substring(2, 4)); // ll

        // toUpperCase
        System.out.println(stringLiteral.toUpperCase()); // HELLO

        // toLowerCase
        System.out.println(stringLiteral.toLowerCase()); // hello

        // contains
        System.out.println(stringLiteral.contains("ll")); // true

        // equals
        System.out.println(stringLiteral.equals(stringObject)); // false
        // !CUIDAOO; == : comparación de referencia de memoria, mientras que equals :
        // comparación de contenido (BUENA PRACTICA).

        // trim: elimina espacios en blanco
        System.out.println(stringLiteral.trim());

        // replace
        System.out.println(stringLiteral.replace("H", "J"));

        // split
        System.out.println(stringLiteral.split("l"));

        // * INTERPOLATION AND FORMAT
        String name = "Juancho";
        int age = 25;

        // INTERPOLACIÓN
        System.out.println("Mi nombre es " + name + " y tengo " + age);

        // FORMAT
        System.out.println(String.format("Mi nombre es %s y tengo %d", name, age));
    }
}
