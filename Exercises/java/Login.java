package Exercises.java;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Login {
    static final Scanner read = new Scanner(System.in);
    static final String EXIT = "exit";
    static final List<User> usersData = new ArrayList<>();

    public static void main(String[] args) {
        mockSomeUsers();

        System.out.println("USEREX: Gestión de usuarios");
        System.out.println("1. Nuevo usuario; 2. Login  (1/2)");

        int userOption = read.nextInt();
        if (userOption == 1) {
            createUser();
        } else if (userOption == 2) {
            loginUser();
        }
    }

    public static void mockSomeUsers() {
        usersData.add(new User("Juan", "juanito"));
        usersData.add(new User("Juancho", "juanchito"));
        usersData.add(new User("Joan", "joanot"));

        showAllUsers();
    }

    public static void showAllUsers() {
        for (User user : usersData) {
            user.showUser();
        }
    }

    public static void createUser() {
        System.out.println("NUEVO USUARIO");

        System.out.println("Nombre: ");

        String userName = read.next();
        for (User user : usersData) {
            if (user.name.equals(userName)) {
                System.out.println("El usuario ya existe");

                createUser();
                break;
            }
        }

        System.out.println("Password: ");
        String userPass = read.next();

        usersData.add(new User(userName, userPass));
        System.out.println("Nuevo usuario añadido: ");

        showAllUsers();
        loginUser();
    }

    public static void loginUser() {
        System.out.println("LOGIN");
        System.out.println("Introduce tu nombre de usuario: ");

        String userName = read.next();
        boolean found = false;

        for (User user : usersData) {
            if (user.name.equals(userName)) {
                found = true;
                System.out.println("Introduce tu contraseña: ");

                String userPass = read.next();
                if (user.password.equals(userPass)) {
                    loggedUser(user);
                } else {
                    System.out.println("Contraseña incorrecta");
                }
                break;
            }
        }

        if (!found) {
            System.out.println("Usuario no encontrado");

            loginUser();
        }
    }

    public static void loggedUser(User loggedUser) {
        System.out.println("BIENVENIDO, " + loggedUser.name);
        System.out.println("1. Cambiar contraseña; 2. Cerrar la sesión; (1 / 2)");

        int userOption = read.nextInt();
        if (userOption == 1) {
            System.out.println("Introduce tu nueva contraseña: ");

            String newPassword = read.next();
            if (!newPassword.isBlank()) {
                loggedUser.password = newPassword;
                System.out.println("Contraseña cambiada correctamente");

                showAllUsers();
                loggedUser(loggedUser);
            }
        } else if (userOption == 2) {
            System.out.println("NOS VEMOS");
        }
    }
}

class User {
    String name;
    String password;

    User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public void showUser() {
        System.out.println("Usuario: " + name + " ; " + "Password: " + password);
    }
}