
function createCharacter(Name, HP, ...moves) {

    let hp = HP;
    let name = Name;
    let movesList = moves;
    return {
        getHP: function() {
            return hp;
        },
        getName: function() {
            return name;
        },
        appendMoves: function() {
            const movesDiv = document.querySelector('.moves');
            for (const move of movesList) {
                const moveParagraph = document.createElement('p');
                moveParagraph.textContent = move;
                movesDiv.appendChild(moveParagraph);
            }
        }
    };
}

const myCharacter = createCharacter("Player 1", 100, "Move 1", "Move 2", "Move 3");

myCharacter.appendMoves();

console.log("Character HP:", myCharacter.getHP());
console.log("Character Name:", myCharacter.getName());
