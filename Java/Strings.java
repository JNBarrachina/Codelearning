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

        // comparación
        // !CUIDAOO!; == : comparación de referencia de memoria
        System.out.println(stringLiteral == stringObject);
        // ? equals: comparación de contenido (BUENA PRACTICA).
        System.out.println(stringLiteral.equals(stringObject)); // false
        System.out.println(stringLiteral.equalsIgnoreCase(stringObject));

        // trim: elimina espacios en blanco al inicio y al final del String
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
