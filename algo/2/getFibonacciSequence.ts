/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  let index = 0;
  let n1 = 1;
  let n2 = 0;
  let n3 = 0;
  let tabToreturn = [0];

  if (size === 0 || size < 1) {
    return [];
  }
  if (size === 1) {
    return [0];
  }

  tabToreturn = [0];
  while (index < size - 1) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    tabToreturn.push(n3);
    index++;
  }

  return tabToreturn;
}

export default getFibonacciSequence;
