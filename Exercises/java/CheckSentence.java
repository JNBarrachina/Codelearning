package Exercises.java;

import java.util.Scanner;

public class CheckSentence {
    static final Scanner read = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Escribe una frase: ");

        String userSentence = read.nextLine().trim();

        System.out.println("Comprobando...");
        if (userSentence.isBlank()) {
            System.out.println("No has escrito nada. Saliendo...");
        } else {
            System.out.println("Tu frase: " + userSentence);

            String modifiedSentence = checkUpperCaseandDot(userSentence);
            userSentenceLengthandSplit(modifiedSentence);
            replaceJavaWord(modifiedSentence);
        }
    }

    static String checkUpperCaseandDot(String userSentence) {
        String modifiedSentence = userSentence;

        char firstChar = userSentence.charAt(0);
        if (!Character.isUpperCase(firstChar)) {
            modifiedSentence = Character.toUpperCase(firstChar) + userSentence.substring(1);
        }

        if (!userSentence.endsWith(".")) {
            modifiedSentence += ".";
        }

        System.out.println("Normalización: " + modifiedSentence);
        return modifiedSentence;
    }

    static void userSentenceLengthandSplit(String modifiedSentence) {
        System.out.println("Longitud de tu frase: " + modifiedSentence.length() + " caracteres");
        String[] words = modifiedSentence.split("\\s+");
        System.out.println(words.length);
    }

    static void replaceJavaWord(String modifiedString) {
        System.out.println(modifiedString.replace("Java", "Python"));
    }
}
