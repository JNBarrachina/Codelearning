package Exercises.java;

import java.util.ArrayList;
import java.util.Scanner;

public class Collatz {
    public static void main(String[] args) {
        Scanner read = new Scanner(System.in);

        String msg = "Introduce un número entero mayor que 0: ";
        int userNum = 0;

        while (userNum <= 0) {
            System.out.println(msg);
            try {
                userNum = read.nextInt();
            } catch (Exception e) {
                read.nextLine();
            }
        }

        read.close();
        userNumCollatz(userNum);
    }

    public static void userNumCollatz(int userNum) {
        var numsList = new ArrayList<Integer>();
        numsList.add(userNum);

        System.out.println("Secuencia de Collatz para el número " + userNum);

        while (userNum != 1) {
            if (userNum % 2 == 0) {
                userNum /= 2;
                numsList.add(userNum);
                System.out.println("Step " + (numsList.size() - 1) + ": " + userNum);
            } else {
                userNum = (userNum * 3) + 1;
                numsList.add(userNum);
                System.out.println("Step " + (numsList.size() - 1) + ": " + userNum);
            }
        }

        System.out.println("Secuencia completa (" + (numsList.size() - 1) + " pasos): " + numsList);
    }

}
