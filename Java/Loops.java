//? BUCLES

public class Loops {

    public static void main(String[] args) {
        forLoop();
        whileLoop();
        doWhileLoop();
    }

    static void forLoop() {
        System.out.println("For loop:");
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
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
}
