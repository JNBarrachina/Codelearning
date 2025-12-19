package Exercises.java;

import java.util.Arrays;

public class Questionnaire {
    public static void main(String[] args) {
        int[] testAnswers = createTestAnswers();
        int[] studentAnswers = createStudentAnswers();
        System.out.println("NOTA FINAL: " + checkTest(testAnswers, studentAnswers));
    }

    public static int[] createTestAnswers() {
        int[] testAnswers = new int[10];

        // for (int i = 0; i < testAnswers.length; i++) {
        // testAnswers[i] = ((int) Math.floor(Math.random() * 4 + 1));
        // }

        Arrays.setAll(testAnswers, i -> (int) (Math.random() * 4) + 1);

        return testAnswers;
    }

    public static int[] createStudentAnswers() {
        int[] studentAnswers = new int[10];
        Arrays.setAll(studentAnswers, i -> (int) (Math.random() * 5));

        return studentAnswers;

    }

    public static double checkTest(int[] testAnswers, int[] studentAnswers) {
        int rightAnswers = 0;
        int wrongAnswers = 0;
        int noAnswer = 0;
        double testGrade = 0;

        System.out.println("Test: " + Arrays.toString(testAnswers));
        System.out.println("Estudiante: " + Arrays.toString(studentAnswers));

        for (int i = 0; i < studentAnswers.length; i++) {
            if (studentAnswers[i] == testAnswers[i]) {
                rightAnswers++;
            } else if (studentAnswers[i] == 0) {
                noAnswer++;
            } else {
                wrongAnswers++;
            }
        }

        System.out.println("Respuestas correctas: " + rightAnswers);
        System.out.println("Fallos: " + wrongAnswers);
        System.out.println("No respondidas: " + noAnswer);

        if (rightAnswers + wrongAnswers == 0) {
            return testGrade;
        } else {
            testGrade = (rightAnswers - 0.33 * wrongAnswers) / (rightAnswers + wrongAnswers);
            return testGrade;
        }
    }
}
