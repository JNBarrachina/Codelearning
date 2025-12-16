//? ESTRUCTURAS DE DATOS

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class DataStructures {
    public static void main(String[] args) {
        arrays();
        lists();
        sets();
        maps();
    }

    // * Arrays
    static void arrays() {
        // Creación de un array
        String[] namesArray = new String[5];
        int[] numsArray = { 1, 2, 3, 4, 5 };

        System.out.println(namesArray[0]); // null
        System.out.println(numsArray[0]); // 1

        // Modificación de un array
        namesArray[0] = "Juancho";
        System.out.println(namesArray[0]); // Juancho
        // namesArray[1] = 1; Error de compilación: tipo incorrecto.

        // Lenght
        System.out.println(namesArray.length); // 5
    }

    // * Listas
    static void lists() {
        // ArrayList: listas dinámicas
        var numsList = new ArrayList<Integer>();
        ArrayList<String> namesList = new ArrayList<>();

        // Agregar elementos
        numsList.add(15);
        numsList.add(24);
        namesList.add("Juanito");
        namesList.add("Pedrito");

        // Acceso a elementos
        System.out.println(numsList.getFirst()); // 1
        System.out.println(namesList.get(0)); // Juancho

        // Size
        System.out.println(numsList.size()); // 2

        // Modificar elementos
        numsList.set(0, 10);

        // Eliminar elementos
        numsList.remove(0); // Elimina por index
        namesList.removeLast();

        // Buscar elementos
        numsList.contains(10); // true

        // Limpiar
        numsList.clear();
    }

    // * Sets
    static void sets() {
        // Conjuntos: colecciones sin duplicados
        HashSet<Integer> numsSet = new HashSet<>();
        var namesSet = new HashSet<String>();

        // Agregar elementos
        numsSet.add(15);
        numsSet.add(24);
        numsSet.add(24); // ! Duplicado: no se agrega
        namesSet.add("Juanito");
        namesSet.add("Pedrito");

        // Size
        System.out.println(numsSet); // ! Estructura desordenada

        // Buscar elementos
        numsSet.contains(24); // true

        // Eliminar elementos
        numsSet.remove(24); // Elimina por valor

        // Limpiar
        numsSet.clear();
    }

    // * Maps
    static void maps() {
        // Mapas: colecciones de pares clave-valor
        HashMap<String, Integer> mapNameTlf = new HashMap<>();
        var mapNameEmail = new HashMap<String, String>();

        // Acceso a maps
        System.out.println(mapNameTlf); // Se muestran todos los pares DESORDENADOS
        System.out.println(mapNameTlf.get("Juancho")); // Acceso por clave

        // Agregar elementos
        mapNameTlf.put("Juancho", 123456789);
        mapNameTlf.put("Pedrito", 987654321);
        mapNameEmail.put("Juancho", "r9b5H@example.com");

        // Modificar
        mapNameTlf.replace("Juancho", 987654321); // Si existe, lo reemplaza
        mapNameTlf.putIfAbsent("Pedrito", 123456789); // Si no existe, lo agrega

        // Comprobar existencia de claves y valores
        mapNameTlf.containsKey("Juancho"); // true
        mapNameTlf.containsValue(123456789); // true

        // Eliminar elementos
        mapNameTlf.remove("Juancho");

        // Limpiar
        mapNameTlf.clear();
    }
}
