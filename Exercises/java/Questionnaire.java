package Exercises.java;

import java.util.Arrays;

public class Questionnaire {
    static final int QUESTIONS = 10;
    static final int OPTIONS = 4;

    public static void main(String[] args) {
        int[] testAnswers = createTestAnswers();
        int[] studentAnswers = createStudentAnswers();
        TestResult testResults = checkTest(testAnswers, studentAnswers);
        double finalGrade = showTestGrade(testResults);
        System.out.println(finalGrade);
    }

    public static int[] createTestAnswers() {
        int[] testAnswers = new int[QUESTIONS];

        // for (int i = 0; i < testAnswers.length; i++) {
        // testAnswers[i] = ((int) Math.floor(Math.random() * 4 + 1));
        // }

        Arrays.setAll(testAnswers, i -> (int) (Math.random() * OPTIONS) + 1);

        return testAnswers;
    }

    public static int[] createStudentAnswers() {
        int[] studentAnswers = new int[QUESTIONS];
        Arrays.setAll(studentAnswers, i -> (int) (Math.random() * 5));

        return studentAnswers;

    }

    public static TestResult checkTest(int[] testAnswers, int[] studentAnswers) {
        int rightAnswers = 0;
        int wrongAnswers = 0;
        int noAnswer = 0;

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

        return new TestResult(rightAnswers, wrongAnswers, noAnswer);
    }

    public static double showTestGrade(TestResult testResult) {
        double testGrade = 0;

        System.out.println("Respuestas correctas: " + testResult.right);
        System.out.println("Fallos: " + testResult.wrong);
        System.out.println("No respondidas: " + testResult.noAnswer);

        if (testResult.right + testResult.wrong == 0) {
            return testGrade;
        } else {
            testGrade = (testResult.right - 0.33 * testResult.wrong) / (testResult.right + testResult.wrong);
            return testGrade;
        }
    }
}

class TestResult {
    final int right;
    final int wrong;
    final int noAnswer;

    TestResult(int right, int wrong, int noAnswer) {
        this.right = right;
        this.wrong = wrong;
        this.noAnswer = noAnswer;
    }
}