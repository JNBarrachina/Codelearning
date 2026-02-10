package OOP;

public class Polymorphism {

    public static void main(String[] args) {

        var dog = new Dog();
        dog.sound();

        var calculator = new Calculator();
        System.out.println(calculator.sum(1, 2));
        System.out.println(calculator.sum(1.2, 2.2));
    }

    // * Polimorfismo por herencia

    public static class Animal {
        public void sound() {
            System.out.println("Animal sound");
        }
    }

    public static class Dog extends Animal {
        public void sound() {
            System.out.println("Guau");
        }
    }

    // * Polimorfismo por sobreescritura

    public static class Calculator {
        public int sum(int a, int b) {
            return a + b;
        }

        public double sum(double a, double b) {
            return (double) (a + b);
        }
    }
}
