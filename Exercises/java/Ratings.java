package Exercises.java;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ratings {
    static final Scanner read = new Scanner(System.in);
    static final int numQuestions = 10;
    static final int rateKeys = 5;
    static final Map<Integer, Map<Integer, Integer>> globalRatings = new HashMap<>();

    public static void main(String[] args) {
        generateRandomData();
        int userNum = initRatings();
        showUserChoice(userNum);
    }

    static void generateRandomData() {
        for (int i = 1; i <= numQuestions; i++) {
            Map<Integer, Integer> questionRatings = new HashMap<>();

            for (int j = 1; j <= rateKeys; j++) {
                questionRatings.put(j, randomUserRates());
            }

            globalRatings.put(i, questionRatings);
        }
    }

    static int initRatings() {
        int userNum = 0;
        boolean valid = false;

        System.out.println("REVIEW RATINGS: Selecciona una pregunta a revisar (1-" + numQuestions);

        while (!valid) {
            if (read.hasNextInt()) {
                userNum = read.nextInt();

                if (userNum >= 1 && userNum <= numQuestions) {
                    valid = true;
                } else {
                    System.out.println("❌ El número debe estar entre 1 y " + numQuestions);
                }
            } else {
                System.out.println("❌ Debes introducir un número entero");
                read.next(); // descarta la entrada inválida
            }
        }

        return userNum;
    }

    static void showUserChoice(int userChoice) {
        Map<Integer, Integer> selectedQuestion = globalRatings.get(userChoice);

        System.out.println("RATINGS PREGUNTA " + userChoice);
        System.out.println(selectedQuestion);

        for (Map.Entry<Integer, Integer> entry : selectedQuestion.entrySet()) {
            System.out.println(
                    "Rating " + entry.getKey() +
                            " → " + entry.getValue());
        }

    }

    static int randomUserRates() {
        return (int) (Math.random() * 20);
    }
}
