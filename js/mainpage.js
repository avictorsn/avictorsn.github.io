function escreverNome(){
	var x = prompt("Digite o seu nome: ");
	document.getElementById("mostragem").innerHTML= x;


}

/*
var x = prompt("Digite o seu nome: ");

function z(nome){

	if(nome == "VICTOR")
		return " SANTIAGO";
}

document.getElementById("mostragem").innerHTML= x + z(x);

*/

var pessoa = {

	nome: "Victor",
	idade: "21"
};

function expandirAba(id){
	var element = document.getElementById(id);
	element.style.backgroundColor = "#121460";
	element.style.color = "#228831";
	element.style.height = "300px";
	if(id == 'b2')
		document.getElementById("container_b2").style.visibility = "visible";
}

function contrairAba(id){
	var element = document.getElementById(id);
	element.style.backgroundColor = "#D3D3D3";
	element.style.color = "#672231";
	element.style.height ="92px";
	if(id == 'b2')
		document.getElementById("container_b2").style.visibility = "hidden";

}


