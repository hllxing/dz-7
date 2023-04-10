let numOrString = prompt('input number or string');
console.log(numOrString);

switch (true) {
    case null:
        console.log('Ви скасували');
        break;
    case numOrString.trim()==='':
        console.log('Empty string');
        break;
    case isNaN(+numOrString):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}
