package OOP;

public class Abstraction {

    public static void main(String[] args) {

    }

    // ? Clase abstracta
    public static abstract class Animal {

        public abstract void sound(); // Método sin implementación
    }

    public static class Dog extends Animal {
        // Clase concreta que hereda de la clase abstracta.
        public void sound() {
            System.out.println("Guau");
        }
    }

    // * Clase abstracta: Una clase abstracta nos permite definir métodos no
    // implementados que deberán ser implementados en las clases heredadas. Las
    // clases
    // abstractas no pueden ser instanciadas. */

    // ? Interfaz

    public interface Flyable {
        public void fly();
    }

    public static class Bird extends Animal implements Flyable {
        public void sound() {
            System.out.println("Cocorico");
        }

        public void fly() {
            System.out.println("I am flying");
        }
    }
}
