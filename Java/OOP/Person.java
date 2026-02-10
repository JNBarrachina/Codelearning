package OOP;

public class Person {

    // Atributos
    protected String name;
    private Integer age = 0;
    protected String email;
    private String id; // Atributo privado: solo puede ser accedido desde la propia clase

    // Constructor
    public Person(String name, Integer age, String email, String id) {
        this.name = name;
        this.setAge(age);
        this.email = email;
        this.id = id;
    }

    // Métodos
    public void info() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Email: " + email);
        System.out.println("ID: " + id);
    }

    public void greet() {
        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");
    }

    // Getter
    public String getId() {
        return id;
    }

    // Setter
    public void setAge(Integer age) {
        if (age >= 0) {
            this.age = age;
        } else {
            System.out.println("Invalid age");
        }
    }

    /**
     * Encapsulamiento y Modificadores de Acceso 1. Public: Puede ser accedidodesde
     * cualquier parte; 2. Private: Solo puede ser accedido desde la propia clase;
     * 3. Protected: Solo puede ser accedido desde la propia clase y desde las
     * clases heredadas.
     */

}
