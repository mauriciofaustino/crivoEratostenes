Crivo de Erat�stenes
=====

* Inicialmente, determina-se o maior n�mero a ser checado. Ele corresponde � raiz quadrada do valor limite, arredondado para baixo. No caso, a raiz de 30, arredondada para baixo, � 5.
* Crie uma lista de todos os n�meros inteiros de 2 at� o valor limite: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, e 30.
* Encontre o primeiro n�mero da lista. Ele � um n�mero primo, 2.
* Remova da lista todos os m�ltiplos do n�mero primo encontrado. No nosso exemplo, a lista fica: 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27 e 29.
* O pr�ximo n�mero da lista � primo. Repita o procedimento. No caso, o pr�ximo n�mero da lista � 3. Removendo seus m�ltiplos, a lista fica: 2, 3, 5, 7, 11, 13, 17, 19, 23, 25 e 29. O pr�ximo n�mero, 5, tamb�m � primo; a lista fica: 2, 3, 5, 7, 11, 13, 17, 19, 23 e 29. 5 � o �ltimo n�mero a ser verificado, conforme determinado inicialmente. Assim, a lista encontrada cont�m somente n�meros primos.

from: http://pt.wikipedia.org/wiki/Crivo_de_Erat�stenes