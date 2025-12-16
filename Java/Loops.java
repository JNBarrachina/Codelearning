//? BUCLES

public class Loops {

    public static void main(String[] args) {
        forLoop();
        whileLoop();
        doWhileLoop();
        forEachLoop();
    }

    static void forLoop() {
        System.out.println("For loop:");

        Integer[] nums = { 1, 2, 3, 4, 5 };

        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        for (int index = 0; index < nums.length; index++) {
            System.out.println(nums[index]);
        }
    }

    static void whileLoop() {
        System.out.println("While loop:");

        int i = 0;
        while (i < 3) {
            System.out.println(i);
            i++;
        }
    }

    static void doWhileLoop() {
        System.out.println("Do-while loop:");

        int i = 0;
        do {
            System.out.println(i);
            i++;
        } while (i < 2);
    }

    static void forEachLoop() {
        // ? Funciona con arrays, ArrayList y Sets

        System.out.println("For-each loop:");

        Integer[] nums = { 1, 2, 3, 4, 5 }; // ArrayList de enteros

        for (int num : nums) {
            System.out.println(num);
        }
    }

    // ? break & continue: para salir del bucle y saltar a la siguiente iteración
}
