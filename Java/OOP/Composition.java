package OOP;

public class Composition {

    public static void main(String[] args) {

        var car = new Car();
        car.on();
    }

    public static class Engine {
        public void on() {
            System.out.println("Encendiendo motor");
        }
    }

    public static class Car {
        final private Engine engine = new Engine();

        public void on() {
            engine.on();
        }
    }

}
