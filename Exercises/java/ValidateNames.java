package Exercises.java;

public class ValidateNames {
    static final String[] userNames = { "pipo", "Juan Narros", "juanchito@J-CHITO   ", "1945pedro", "Jacinto37",
            "@RandomName",
            "pep", "Debombi Van Debumbo" };

    public static void main(String[] args) {
        checkNames();
    }

    static void checkNames() {
        for (String name : userNames) {
            System.out.println("\n");

            System.out.println("Nombre: " + name);

            String validateName = name;
            validateName = checkAlphanumericChars(validateName);
            validateName = checkFirstChar(validateName);
            validateName = checkBlankName(validateName);
            validateName = checkNameLength(validateName);

            finalCheck(name, validateName);
        }
    }

    static String checkAlphanumericChars(String name) {
        StringBuilder suggestedName = new StringBuilder();

        System.out.println("1. Ajustando a alfanuméricos...");
        for (char c : name.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                suggestedName.append(c);
            }
        }

        return suggestedName.toString();
    }

    static String checkFirstChar(String name) {
        char firstChar = name.charAt(0);

        if (!Character.isDigit(firstChar)) {
            System.out.println("2. Primer caracter alfabético: CORRECTO");
            return name;
        } else {
            System.out.println("2. Primer caracter alfabético: FALLO");

            String suggestedName = generateSingleChar() + name.substring(1);

            return suggestedName;
        }
    }

    static String checkBlankName(String name) {
        if (name.contains(" ")) {
            System.out.println("3. Ausencia de whitespaces: FALLO");

            String suggestedName = name.replace(" ", "");
            return suggestedName;
        } else {
            System.out.println("3. Ausencia de whitespaces: CORRECTO");
            return name;
        }
    }

    static String checkNameLength(String name) {

        String suggestedName = name;

        if (name.length() < 5) {
            System.out.println("4. Longitud del nombre: FALLO");

            while (suggestedName.length() < 5) {
                suggestedName += generateSingleChar();
            }

            return suggestedName;
        } else if (name.length() > 12) {
            System.out.println("4. Longitud del nombre: FALLO");

            suggestedName = suggestedName.substring(0, 12);
            return suggestedName;
        }

        System.out.println("4. Longitud del nombre: CORRECTO");
        return name;
    }

    static char generateSingleChar() {
        char randomLetter;
        if (Math.random() < 0.5) {
            randomLetter = (char) ('A' + (int) (Math.random() * 26));
        } else {
            randomLetter = (char) ('a' + (int) (Math.random() * 26));
        }

        return randomLetter;
    }

    static int generateSingleInt() {
        return (int) (Math.random() * 10) + 1;
    }

    static void finalCheck(String name, String validateName) {
        if (!validateName.equals(name)) {
            System.out.println("Nombre sugerido: " + validateName);
        } else {
            System.out.println("NOMBRE CHEQUEADO CORRECTAMENTE");
        }
    }
}
