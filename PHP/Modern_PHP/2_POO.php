<?php
declare(strict_types=1);

//*PROGRAMACIÓN ORIENTADA A OBJETOS

//*Clases y objetos

//Clases
class Coche {
    public function __construct(
        public string $marca,
        public string $modelo,
        public int $velocidad,
    ) {}

    public function acelerar(): int {
        return $this->velocidad++;
    }

    public function frenar(): int {
        return $this->velocidad--;
    }
}

//Objetos
$coche = new Coche("Audi", "A3", 0);
echo $coche->marca . "\n";
echo $coche->modelo . "\n";
echo $coche->velocidad . "\n";
echo $coche->acelerar() . "\n";
echo $coche->velocidad . "\n";
echo $coche->frenar() . "\n";
echo $coche->velocidad . "\n";


//*Herencia

final class CocheElectrico extends Coche {  //Clase heredada de Coche, con final no se puede heredar de ella.
    public function __construct(
        public string $marca,
        public string $modelo,
        public int $velocidad,
        private bool $autonomia
    ) {
        parent::__construct($marca, $modelo, $velocidad);
    }

    public function autonomia(): bool {
        return $this->autonomia;
    }
}

$myElectricCar = new CocheElectrico("Tesla", "Model 3", 0, true);


//*Clases y métodos abstractos

//Una clase abstracta es una clase que no puede ser instanciada, pero puede ser heredada. Sus métodos abstractes deben ser implementados en las clases heredadas.

abstract class User {
    protected string $email;
    protected string $password;

    public function __construct(string $email, string $password) {
        $this->email = $email;
        $this->password = $password;
    }

    abstract public function register(): void;
    abstract public function login(): void;
}


//*Interfaces

//Una interfaz es como un contrato. Una clase puede implementar una o varias interfaces. De ser así, la clase debe implementar todos los métodos de la interfaz. Con ello simulamos herencia múltiple.

interface UserInterface {
    public function register(): void;
    public function login(): void;
}


//*Traits

//Un trait es como una clase, pero no se puede instanciar. Se utiliza para agrupar funciones que se pueden reutilizar en otras clases.

trait Timestamp {
    public \DateTime $created_at;
    public \DateTime $updated_at;

    public function setTimestamps(): void {
        $this->created_at = new \DateTime();
        $this->updated_at = new \DateTime();
    }

    public function getFormattedTimestamps(): string {
        return $this->created_at->format('d-m-Y') . ' ' . $this->updated_at->format('d-m-Y');
    }
}

class NewRegister {  //Utilizamos el trait
    use Timestamp;

    public function register(): void {
        $this->setTimestamps();
    }
}

//*Clase anónima
//Se consideran subclases que solo se utilizan dentro de una clase,para crear objetos sin tener que crear una clase.

class Article {
    public function __construct(
        public string $title,
        public string $content,
        private array $tags = [],
    ) {}

    public function addTag(string $name, string $category): void {
        $this->tags[] = new class($name, $category) {
            public function __construct(
                public string $name,
                public string $category,
            ) {}

            public function __toString(): string {
                return $this->name . ' - ' . $this->category;
            }
        };
    }

    public function getTags(): array {
        return $this->tags;
    }
}

$article = new Article('Article 1', 'Content 1');
$article->addTag('Tag 1', 'Category 1');
$article->addTag('Tag 2', 'Category 2');
echo $article->getTags()[0]; // Tag 1 - Category 1


//*Métodos mágicos

/*
    __construct
    __call
    __callStatic
    __get
    __set
    __isset
    __unset
    __toString
    __invoke
    __debugInfo
*/

//*Acceso a atributos, métodos y constantes

/*
    * public: se puede acceder desde cualquier objeto o instancia de la clase
    * private: solo se puede acceder desde la propia clase
    * protected: solo se puede acceder desde la propia clase y desde las clases heredadas

    TODO: BUENAS PRÁCTICAS - Atributos privados y getters/setters para acceder a ellos o modificarlos.

    * const: Inmutabeles, no pueden ser modificados
*/

?>