/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/


function getFibonacciSequence(size: number): number[] {
  if (size <= 0) {
    return [];

    // La méthode push() des instances Array ajoute les éléments spécifiés à la fin d'un tableau et renvoie la nouvelle longueur du tableau
  }
  const fibonacci: number[] = [0, 1];
  for (let i = 2; i < 1; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return [0, 1];
}

export default getFibonacciSequence;
