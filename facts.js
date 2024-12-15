let currentfact = 0;

const facts = [

    "travel makes one modest. You see what a tiny place you occupy in the world",

    "A group of flamingos is called a 'flamboyance'.",

    "Bananas are berries, but strawberries are not.",

    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",

    "An octopus has three hearts and blue blood."

];

function getnewfact(){

    currentfact++;

    if (currentfact >= facts.length) {

        currentfact = 0;

    }

    return facts[currentfact];

}

function updateFact() {

    const factContainer = document.getElementById('factContainer');

    factContainer.textContent = getnewfact();

}

document.getElementById('newFactButton').addEventListener('click', updateFact);

 