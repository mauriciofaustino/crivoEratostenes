
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
	for(var i=2 ; i<=n ; i++) {
		for(var j=0; j < n ; j++){
			if(this.arrayPrimos[j]!=i && this.arrayPrimos[j]%i == 0) { 
				this.arrayPrimos.splice(this.arrayPrimos.indexOf(this.arrayPrimos[j]), 1);
			}
		}
	}
}
