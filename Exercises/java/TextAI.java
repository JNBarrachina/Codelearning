package Exercises.java;

public class TextAI {
    static final int initIndex = 0;
    static final String trapWord = "trabajo";
    static final String text = "El trabajo que venimos realizando en el centro es un trabajo acreditado por las organizaciones regulares del trabajo. Esto nos permite asegurarnos de que prestamos un servicio a la comunidad a través de nuestro trabajo diario, un trabajo duro pero que, si es constante, dará sus frutos";

    public static void main(String[] args) {
        String[] splitText = text.toLowerCase().replaceAll("[^\\p{L}\\s]", "").split(" ");
        int count = contarPalabra(splitText, 0, trapWord, 0);
        System.out.println("La palabra aparece: " + count + " veces.");
    }

    public static int contarPalabra(String[] splitText, int initIndex, String trapWord, int counter) {
        if (initIndex < splitText.length) {
            if (splitText[initIndex].equals(trapWord)) {
                counter++;
                initIndex++;

                return contarPalabra(splitText, initIndex, trapWord, counter);
            }

            initIndex++;
            return contarPalabra(splitText, initIndex, trapWord, counter);
        } else {
            return counter;
        }
    }
}
