/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

/*function getFibonacciSequence(size: number): number[] {
  // Your code here !
  return [0, 1];
}*/

function getFibonacciSequence(n: number) {
  // Cas où n est inférieur ou égal à 0
  if (n <= 0) {
    return [];
  }

  // Initialisation de la séquence avec 0
  const sequence = [0];

  // Si n > 1, on ajoute 1
  if (n > 1) {
    sequence.push(1);
  }

  // Générer les nombres suivants de la séquence
  while (sequence.length < n) {
    const nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

export default getFibonacciSequence;
