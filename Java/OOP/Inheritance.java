package OOP;

public class Inheritance {

    public static void main(String[] args) {
        var animal = new Animal("Animal", "123");
        animal.eat();

        var dog = new Dog("Noa", "123", 5);
        dog.eat();
        dog.bark();
    }

    public static class Animal { // Superclass
        String name;
        String animalId;

        public Animal(String name, String animalId) {
            this.name = name;
            this.animalId = animalId;
        }

        public void eat() {
            System.out.println("I am eating");
        }
    }

    public static class Dog extends Animal { // Subclass

        private int age;

        public Dog(String name, String animalId, int age) {
            super(name, animalId);
            this.age = age;
        }

        public void bark() {
            System.out.println(name + " says: Woof");
        }
    }

    public static class Bird extends Animal {

        public Bird(String name, String animalId) {
            super(name, animalId);
        }

        public void fly() {
            System.out.println("I am flying");
        }
    }

}
