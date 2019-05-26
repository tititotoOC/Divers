/* 
Activité : gestion des contacts
*/

class Contact {
	constructor(nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	}

	decrire() {
		return `Nom : ${this.nom}, prénom : ${this.prenom}`;
	}

	
}

carnet = []

contact01 = new Contact("Lévisse", "Carole");
carnet.push(contact01);
contact02 = new Contact("Nelsonne", "Mélodie");
carnet.push(contact02);

let quit = 0;

while (quit !== 1) {

	console.log(
		"\nBienvenue dans le gestionnaire de contacts.",
		"\nChoisissez l'une des options suivantes :",
		"\n1 : Lister les contacts",
		"\n2 : Ajouter un  contact",
		"\n0 : Quitter");

	let choix = ""
	try {
		choix = prompt("Entrez un numéro d'option :");
	}
	catch(error) {
		console.error(error);
	}

	if (choix === "0") {
		console.log("Vous avez choisi de quitter le gestionnaire de contacts. À bientôt !")
		quit = 1;
	} else if (choix === "1") {
		console.log("\nVoici la liste des contacts :")
		for (let contact of carnet) {
			console.log(`${contact.decrire()}`);
		}
	} else if (choix === "2") {
		let nom = prompt("Entrez tout d'abord le nom de votre contact :");
		let prenom = prompt("Entrez désormais le prénom de votre contact :");
		let contact = new Contact(nom, prenom);
		carnet.push(contact)
		console.log("Un nouveau contact a été ajouté au carnet.")
	} else {
		console.log("Choix d'option incorrect !")
	}
}
