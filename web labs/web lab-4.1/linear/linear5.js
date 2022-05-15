let A = parseInt(prompt("A: ", ""))
let B = parseInt(prompt("B: ", ""))
let C = parseInt(prompt("C: ", ""))

alert(`A = ${A} B = ${B} C = ${C}`)
let x = A
A = B
B = C
C = x
alert(`A = ${A} B = ${B} c = ${C}`)