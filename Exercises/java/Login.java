package Exercises.java;

import java.util.Scanner;

public class Login {
    static final String EXIT = "exit";
    static final int NEWUSER = 1;
    static final int LOGIN = 2;
    static final Scanner read = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.println("USEREX: Gestión de usuarios");
        System.out.println("1. Nuevo usuario; 2. Login  (1/2)");

        int userOption = read.nextInt();
        if (userOption == 1) {
            createUser();
        } else {
            loginUser();
        }

    }

    public static void createUser() {
        System.out.println("Nuevo usuario");
    }

    public static void loginUser() {
        System.out.println("Login usuario");
    }
}

class User {
    String name;
    int password;

    User(String name, int password) {
        this.name = name;
        this.password = password;
    }
}