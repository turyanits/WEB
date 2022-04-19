var wordlist = new Map();
wordlist.set("УЖНУ, Математичний, факультет, Джава, Юпітер, Нептун, Марс, Венера, Сатурн")
print(wordlist)
const wordLengthCount = (map, min, max) => 
       str
        .split(' ')
        .filter(({length}) => length >= min && length <= max)
        .length 
alert(wordLengthCount(wordlist, 5, 100));

alert('Кількість слів, довжина яких більше п\'яти')