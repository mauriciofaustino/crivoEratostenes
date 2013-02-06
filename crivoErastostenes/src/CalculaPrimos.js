
function CalculaPrimos() {
	this.arrayPrimos = [];
}

CalculaPrimos.prototype.calcular = function(n) {
	this.populaArrayComTodosNumeros(n);
	this.calculaErastos(n);
	return this.arrayPrimos;
};

CalculaPrimos.prototype.populaArrayComTodosNumeros = function(n) {
	for(var i=2; i<=n ; i++) {
		this.arrayPrimos.push(i);
	}
}

CalculaPrimos.prototype.calculaErastos = function(n) {
	var maiorNumeroChecado = Math.floor(Math.sqrt(this.arrayPrimos[this.arrayPrimos.length-1]));
	for(var i=0 ; this.arrayPrimos[i] <= maiorNumeroChecado; i++) {
		this.removeMutiplos(this.arrayPrimos[i]);
	}
}

CalculaPrimos.prototype.removeMutiplos = function(valor) {
	for(var j=0; j < this.arrayPrimos.length ; j++){
		if(this.isMutiplos(this.arrayPrimos[j],valor)) { 
			this.arrayPrimos.splice(j, 1);
		}
	}
}

CalculaPrimos.prototype.isMutiplos = function(num1,num2) {
	return num1!=num2 && num1%num2 == 0
}


