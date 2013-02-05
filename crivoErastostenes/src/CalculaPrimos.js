function calculaPrimos(n) {
	// Inicializa o array de números primos.
	var arrayPrimos = [];
	
	//Popula o array com todos os números de 2...n.
	for(var i=2; i<=n ; i++) {
		arrayPrimos.push(i);
	}
	
	//Utiliza o crivo de erastóstenes para remover os múltiplos.
	for(var i=2 ; i<=n ; i++) {
		for(var j=0; j < n ; j++){
			if(arrayPrimos[j]!=i && arrayPrimos[j]%i == 0) { 
				arrayPrimos.splice(arrayPrimos.indexOf(arrayPrimos[j]), 1);
			}
		}
	}
	return arrayPrimos;
}