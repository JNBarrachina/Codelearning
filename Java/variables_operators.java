// Comentario de una línea
/** Comentario de documentación */

// ? VARIABLES

// * Declaración: tipo + nombre */
int a = 10;
float b = 3.14f;
char c = 'A';
boolean e = true;

// ? Las variables no inicializadas reciben un valor por defecto: 0, 0.0f, '\0',

// * Variables locales y globales
void main() {
    int num = 10; // Variable local
    System.out.println(num);
}

int num = 10; // Variable global

// * Constantes
final int NUM = 10;


// ? OPERADORES

// * */ Operadores aritméticos
int num1 = 5;
int num2 = 3;

int result = num1 + num2; // 8
result = num1 - num2; // 2
result = num1 * num2; // 15
result = num1 / num2; // 1
result = num1 % num2; // 2
result = num1++; // 6
result = num1--; // 5

//* Operadores relacionales
result = num1 == num2; // false
result = num1 != num2; // true
result = num1 > num2; // true
result = num1 < num2; // false
result = num1 >= num2; // true
result = num1 <= num2; // false

//* Operadores lógicos
result = num1 && num2; // false
result = num1 || num2; // true
result = !num1; // false

//* Operadores de asignación
num1 += 2; // 7
num1 -= 2; // 5
num1 *= 2; // 10
num1 /= 2; // 5
num1 %= 2; // 1

//* Operadores de incremento y decremento
num1++; // 6
num1--; // 5


//? FUNCIONES MATEMÁTICAS
int numInicial = 10;

// * pow() - Elevar un número a la potencia
numInicial = Math.pow(numInicial, 2); // 100
// * sqrt() - Raíz cuadrada
numInicial = Math.sqrt(numInicial); 
// * round() - Redondear
// * ceil() - Redondear hacia arriba
// * floor() - Redondear hacia abajo
// * rand() - Generar un número aleatorio
numRandom = Math.floor(Math.random() * 10);


//? INPUT-OUTPUT

Scanner read = new Scanner(System.in);
int num = read.nextInt();
System.out.println(num);