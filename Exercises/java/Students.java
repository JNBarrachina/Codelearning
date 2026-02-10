package Exercises.java;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Students {
    static final Scanner read = new Scanner(System.in);
    static final Map<String, Boolean> studentsList = new HashMap<>();
    static boolean state = true;

    public static void main(String[] args) {
        putStudents();

        while (state) {
            userInterface();
            int userOption = checkUserOption();

            switch (userOption) {
                case 1:
                    newStudent();
                    break;
                case 2:
                    studentAttendance();
                    break;
                case 3:
                    classAttendance();
                    break;
                case 4:
                    state = false;
                    System.out.println("Saliendo...");
                    break;
                default:
                    break;
            }
        }
    }

    public static void putStudents() {
        studentsList.put("Misto", true);
        studentsList.put("Perico", true);
        studentsList.put("Ataulfo", true);
        studentsList.put("Eustaquio", true);
        studentsList.put("Anselmo", true);
        studentsList.put("Liloleo", true);

        System.out.println(studentsList);
    }

    public static void newStudent() {
        System.out.println("NUEVO ALUMN@. Introduce nombre: ");
        String newStudent = read.next();

        if (newStudent.isBlank()) {
            System.out.println("No has escrito nada.");
            return;
        }

        studentsList.putIfAbsent(newStudent, false);
        System.out.println("Alumn@ añadido correctamente.");
        return;
    }

    public static void studentAttendance() {
        System.out.println("Introduce el nombre del alumn@: ");
        String student = read.next();

        if (studentsList.containsKey(student)) {
            Boolean studentState = studentsList.get(student);

            if (studentState) {
                studentsList.replace(student, false);
                System.out.println("El alumn@ causa falta");
            } else {
                studentsList.replace(student, true);
                System.out.println("El alumn@ ha asistido");
            }

            return;
        }

        System.out.println("El alumn@ no existe");
        return;
    }

    public static void classAttendance() {
        studentsList.forEach((k, v) -> System.out.println(k + ": " + (v ? "Presente" : "Falta")));
    }

    public static void userInterface() {
        System.out.println("GESTIÓN ALUMNADO:");
        System.out.println("1. Añadir alumn@.");
        System.out.println("2. Gestionar asistencias.");
        System.out.println("3. Ver asistencia de aula.");
        System.out.println("4. Salir.");
        System.out.println("Selecciona una opción: (1-2-3-4)");
    }

    public static int checkUserOption() {
        int userOption = 0;
        boolean valid = false;

        while (!valid) {
            if (read.hasNextInt()) {
                userOption = read.nextInt();

                if (userOption >= 1 && userOption <= 4) {
                    valid = true;

                } else {
                    System.out.println("❌ No has seleccionado una opción permitida (1-2-3-4)");
                }
            } else {
                System.out.println("❌ Debes introducir un número entero");
                read.next(); // descarta la entrada inválida
            }
        }

        System.out.println("\n");
        return userOption;
    }
}
