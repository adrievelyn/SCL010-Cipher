# **Salud y Crossfit SanFer**
> Nació de la idea, que particularmente me gusta el Crossfit, y la buena alimentación y me encanta poder dar tips, recetas, decirle a las personas lo bueno y reconfortante que se siente ir viendo los cambios en el cuerpo y mente que se generan, cuando uno decide este tipo de rutinas en la vida cotidiana.

## **Usuarios y Relación con el producto**
> Este producto funciona para usuarios de 10 años en adelante, quienes desean cambiar su estilo de vida, y apuestan por un entrenamiento Crossfit, ya que es la nueva tendencia que trabaja el cuerpo en general, combinando cardio, pesas y sana alimentación.
> En Salud y CrossFit SanFer, le entregamos una opción personalizada para aquellas personas que se les complica por las diversas rutinas que se les genera durante el día, como colegios, empleos, etc. Y pueden elegir un horario de entrenamiento, según las pautas que se les indiquen y según los reuqerimientos de cada usuario.
> Al decidir quedarse con nuestra metodología, es cuando ingresan en la página, se le solicitan ciertos datos los cuales enviarán de manera Encriptada, y nos llega al correo al dar click al botón enviar, y recibirán su información de igual manera encriptada, para que alguna otra persona no pueda acceder a sus rutinas personales.
> Dicho esto le colocampos un ejemplo de encriptación al usuario en nuestra página Web, para que comprenda como debe realizarle, al recibir nuestro correo con la rutina de la opción que seleccionó

### Código del Cifrado César
> Ya enfocandome en la tarea encomendada del del cifrado y descifrado César, fue una tarea, de mucha concentración, ya que primero había que entender como se debía usar la fórmula, ya que era la pista principal para desarrollar el resto del proyecto.

Incluyo dos imagenes, una con la maqueta final con la que decidí quedarme, ya que elaboré muchas, hasta llegar a entender lo que se debía definir con lo solicitado. Y la otra imágen es el proyecto que tenía al principio ya avanzado, hasta que recibí el feedback, el cuál me sirvió de muchísima ayuda.




# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.



## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [X] `README.md` incluye info sobre proceso y decisiones de diseño.
* [X] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [X] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [X] Usa VanillaJS.
* [X] No utiliza `this`.
* [X] Implementa `cipher.encode`.
* [X] Implementa `cipher.decode`.
* [X] Pasa linter con configuración provista.
* [X] Pasa pruebas unitarias.
* [X] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [X] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [X] Interfaz permite escribir un texto para ser cifrado.
* [X] Interfaz muestra el resultado del cifrado correctamente.
* [X] Interfaz permite escribir un texto para ser descifrado.
* [X] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [X] Cifra/descifra minúsculas
* [X] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
