//? ESTRUCTURAS DE DATOS

import java.util.Arrays;

import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;

import java.util.Map;
import java.util.HashMap;

import java.util.Set;
import java.util.HashSet;

import java.util.Queue;
import java.util.Stack;

public class DataStructures {
    public static void main(String[] args) {
        arrays();
        arraylist();
        sets();
        maps();
        queue();
        stack();
    }

    // * Arrays
    static void arrays() {
        // * Arrays

        // Declaración e instanciado de un array y un ArrayList
        int[] numsArray = { 2, 1, 5, 4, 3 };
        String[] namesArray = new String[5];

        // Length
        System.out.println(namesArray.length); // 5

        // Sort
        System.out.println(Arrays.toString(numsArray)); // Arrays.method: utilidades para arrays
        Arrays.sort(numsArray); // Array sorting
        System.out.println(Arrays.toString(numsArray));

        // Buscar un elemento del array
        System.out.println(numsArray[0]); // 1
        System.out.println(Arrays.binarySearch(numsArray, 1)); // Búsqueda ultrarápida: retorna el index del valor
                                                               // buscado
        System.out.println(namesArray[0]); // null: Existe el elemento, pero no tiene valor

        // Modificación de un array
        namesArray[0] = "Juancho";
        Arrays.fill(namesArray, 1, 5, "Juanchi"); // Llenar un array con un valor indicado
        System.out.println(Arrays.toString(namesArray));
        // namesArray[1] = 1; Error de compilación: tipo incorrecto.

    }

    // * ArrayList
    static void arraylist() {
        // * ArrayList: listas dinámicas

        var numsList = new ArrayList<Integer>();
        List<String> namesList = new ArrayList<>();

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
        // * Sets: colecciones sin duplicados

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
        // * Mapas: colecciones de pares clave-valor

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

    static void queue() {
        // * Queues: FIFO (First in, First Out)

        Queue<String> myQueue = new LinkedList<>();

        // Add
        myQueue.add("Juan");
        myQueue.add("Marcos");
        myQueue.add("Carlos");
        myQueue.add("Alberto");

        // Peek: devuelve el primer elemento de la cola (element: exception if empty)
        System.out.println(myQueue.peek());

        // Poll: devuelve y elimina el primer elemento de la cola (remove: exception if
        // empty)
        System.out.println(myQueue.poll());

    }

    static void stack() {
        // * Stacks: LIFO (Last in, First out)

        Stack<Integer> myStack = new Stack<>();

        myStack.add(12);
        myStack.add(34);
        myStack.add(120);

        System.out.println(myStack.peek());
        System.out.println(myStack.pop());

    }
}
