/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
function FizzBuzz(limit) {
    let List = [];
    for (let a = 1; a <= limit; a++) {
        //List.push(a);
        if (a % 3 == 0 && a % 5 == 0) {
            //console.log("fizzbuzz")
            List.push("fizzbuzz")
        }
        else if (a % 3 == 0) {
            //console.log("fizz")
            List.push("fizz")
        }
        else if (a % 5 == 0) {
            //console.log("buzz")
            List.push("buzz")
        }
        else {
            //console.log(a)
            List.push(a)
        }
    }
    //console.table(List)
    return List
}
//*/
function FizzBuzz(limit) {
    let List = [];
    for (let a = 1; a <= limit; a++) {
        List.push(a % 3 === 0 && a % 5 === 0 ? "fizzbuzz" :
            a % 3 === 0 ? "fizz" :
                a % 5 === 0 ? "buzz" :
                    a);
    }
    return List;
}

/*
Escribe una función que reciba dos palabras (String) y retorne
verdadero o falso (Bool) según sean o no anagramas.
- Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.

function Anagram(word1, word2) {
    word1 = word1.toLowerCase().replace(/\s+/g, '')
    word2 = word2.toLowerCase().replace(/\s+/g, '')

    if (word1.length !== word2.length) {
        return false
    }
    return word1.split('').sort().join('') == word2.split('').sort().join('')
}
//*/
function Anagram(word1, word2) {
    const normalizedWord1 = word1.toLowerCase().replace(/\s+/g, '');
    const normalizedWord2 = word2.toLowerCase().replace(/\s+/g, '');

    return normalizedWord1.length === normalizedWord2.length &&
        normalizedWord1.split('').sort().join('') === normalizedWord2.split('').sort().join('');
}
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...

function Fibonacci(Limit) {
    let fib = [0, 1];
    for (let i = 2; i <= limit; i++) {
        fib.push(fib[i - 1] + fib[i - 2])
    }
    return fib
}
//*/
function Fibonacci(limit) {
    const fib = [0, 1];
    while (fib.length <= limit) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.slice(0, limit + 1);
}

/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
function PrimeNumber(Limit) {
    let Prime = []
    for (let i = 2; i <= Limit; i++) {
        let arePrime = true
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                arePrime = false
                break
            }
        }
        if (arePrime) {
            Prime.push(i)
        }
    }
    return Prime
}

/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */
function PolygonArea(type, base, height) {
    type = type.toLowerCase().replace(/\s+/g, '')
    if (type == "triangulo") {
        //console.log("El área del triángulo es: " + (base * height) / 2)
        return (base * height) / 2
    }
    else if (type == "cuadrado" || type == "rectangulo") {
        if (type == "cuadrado" && base !== height) {
            return "Base y Altura deben ser iguales para ser cuadrado"
        }
        //console.log("El área del " + type + " es: " + (base * height))
        return base * height
    }

}

/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */
function AspectRatio(link) {
    let AR = []
    const img = document.createElement("img");
    img.src = link;
    const { width, height } = img;
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const ratio = gcd(width, height);
    AR.push({width: width/ratio, height: height/ratio})
    return (AR);
}

/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
function ReversingChains(Prhase) {
    Prhase = Prhase.toLowerCase().replace(/\s+/g, '')
    let Inverted = ""
    for (let i = Prhase.length - 1; i >= 0; i--) {
        Inverted += Prhase[i]
    }
    return Inverted
}

/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */
function WordCount(text) {
    //let texto = "Hola mundo, mundo! ¿Hola? ¿Hola? Hola"
    text = text.toLowerCase().replace(/[^\w\s]|_/g, "")
    let repeated = []
    let word = text.split(" ")
    let count = {}
    for (let i = 0; i < word.length; i++) {
        if (count[word[i]]) {
            count[word[i]] += 1
        } else {
            count[word[i]] = 1
        }
    }
    for (let clue in count) {
        //console.log(`La palabra ${clue} se repite ${count[clue]} veces`)
        repeated.push({ clue, count: count[clue] })
    }
    return repeated
}

/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 
function DecimalBinary(decimal) {
    let binary = ""
    if (decimal == 0) {
        return "0"
    }
    else if (decimal < 0) {
        decimal *= -1
        console.log("No se puede convertir un número negativo")
    }
    while (decimal > 0) {
        binary = (decimal % 2) + binary
        decimal = Math.floor(decimal / 2)
    }
    return binary

}//*/
function DecimalBinary(decimal) {
    if (decimal < 0) {
      console.log("No se puede convertir un número negativo");
      return null; // o throw new Error("No se puede convertir un número negativo");
    }
    if (decimal === 0) return "0";
    let binary = "";
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
    return binary;
  }

/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */
const morseCode = {
    "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..",
    "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-",
    "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--",
    "Z": "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....",
    "7": "--...", "8": "---..", "9": "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
    "/": "-..-.", "(": "-.--.", ")": "-.--.-", " ": "/"
}

/*
const reverseMorseCode = {};
for (const key in morseCode) {
    if (morseCode.hasOwnProperty(key)) {
        const value = morseCode[key];
        reverseMorseCode[value] = key;
    }
}

const convertToMorse = (str) => {
    return str.toUpperCase().split("").map(el => {
        return morseCode[el] ? morseCode[el] : el;
    }).join(" ");
}

const convertFromMorse = (str) => {
    return str.split("   ").map(word => {
        return word.split(" ").map(char => {
            return reverseMorseCode[char] ? reverseMorseCode[char] : char;
        }).join("");
    }).join(" ");
}

const MorseCode = (str) => {
    if (/[.-]/.test(str)) {
        return convertFromMorse(str);
    } else {
        return convertToMorse(str);
    }
}*/

const reverseMorseCode = Object.fromEntries(Object.entries(morseCode).map(([k, v]) => [v, k]));

const convertToMorse = (str) => str.toUpperCase().split("").map(el => morseCode[el] || el).join(" ");
const convertFromMorse = (str) => str.split("   ").map(word => word.split(" ").map(char => reverseMorseCode[char] || char).join("")).join(" ");

const MorseCode = (str) => /[.-]/.test(str) ? convertFromMorse(str) : convertToMorse(str);

/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */
function BalancedExpressions(str) {
    this.stack = [];
    this.pairs = { '(': ')', '[': ']', '{': '}' };
    for (let char of str) {
        if (Object.keys(this.pairs).includes(char)) {
            this.stack.push(char);
        } else if (Object.values(this.pairs).includes(char)) {
            if (this.stack.length === 0 || this.pairs[this.stack.pop()] !== char) return false;
        }
    }
    return this.stack.length === 0;
}
/*const balancedExpressions = new BalancedExpressions();
console.log(balancedExpressions.isBalanced('{ [ a * ( c + d ) ]- 5 }')); // true
console.log(balancedExpressions.isBalanced('{ a * ( c + d ) ] -5 }')); // false*/


/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */
function RemovingCharacters() {
    this.removeChars = function (str1, str2) {
        let out1 = '', out2 = '';
        for (let char of str1) {
            if (!str2.includes(char)) out1 += char;
        }
        for (let char of str2) {
            if (!str1.includes(char)) out2 += char;
        }
        return [out1, out2];
    };

}
const removingCharacters = new RemovingCharacters();
//console.log(removingCharacters.removeChars('abcd', 'bcdf')); // Output: ["a", "f"]
//console.log(removingCharacters.removeChars('hello', 'world')); // Output: ["he","wrld"]

/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */
function Palindrome() {

}

/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */
function RecursiveFactorial() {

}

/*
 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */
function Arstrom() {

}
/*Exporta todas las funciones
*/
export {
    FizzBuzz,
    Anagram,
    Fibonacci,
    PrimeNumber,
    PolygonArea,
    AspectRatio,
    ReversingChains,
    WordCount,
    DecimalBinary,
    MorseCode,
    BalancedExpressions,
    RemovingCharacters,
    Palindrome,
    RecursiveFactorial,
    Arstrom
}