//? CONDICIONALES

public class Conditionals {
    public static void main(String[] args) {
        int age = 20;

        // * IF-ELSE

        if (age >= 18) {
            System.out.println("You are an adult");
        } else {
            System.out.println("You are not an adult");
        }

        // * IF-ELSE-IF

        if (age >= 18) {
            System.out.println("You are an adult");
        } else if (age >= 13) {
            System.out.println("You are a teenager");
        } else {
            System.out.println("You are a child");
        }

        // * SWITCH

        switch (age) {
            case 18:
                System.out.println("You are an adult");
                break;
            case 13:
                System.out.println("You are a teenager");
                break;
            default:
                System.out.println("You are a child");
                break;
        }
    }
}
