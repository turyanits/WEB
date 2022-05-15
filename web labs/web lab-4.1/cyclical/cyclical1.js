let stringElement = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
let row = prompt("Кількість рядків", "5")
let colm = prompt("Кількість стовпців", "5")
let string = "";


for (let i = 0; i < row; i++) {
    for (let j = 0; j < colm; j++) {
        string += " " + `${stringElement[j+i]}`
    }
    string += "\n";
}

alert(string);