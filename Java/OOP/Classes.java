package OOP;

public class Classes {
    public static void main(String[] args) {
        var singlePerson = new Person("Paco", 23, "paco@paco", "1234");

        singlePerson.setAge(32);
        singlePerson.info();
        singlePerson.greet();
    }
}
