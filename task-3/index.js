const a = 'aababba';
const b = 'abbaabcd';

console.log(`Исходные строки: '${a}' '${b}'`)

const calculation = (str1, str2) => {
arr = [];
str1.split('').reduce((last,item)=>{
if (str2.indexOf(`${last}${item}`) !== -1) {
 arr.push(`${last}${item}`);
 return `${last}${item}`;
}
else return item;
}, '');
return arr.sort((a, b)=>b.length-a.length)[0]
}

console.log('Общая подстрока: ' + calculation(a, b));