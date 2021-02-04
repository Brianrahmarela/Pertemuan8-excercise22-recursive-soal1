

function voidEven(n){
  //cek angka genap & >= 0
  if(n%2 == 0 && n >= 0) {
    // console.log(n);
    voidEven(n-2);

    document.write(n); 
  } else if (n%2 == 1 && n >= 0){
    voidEven(n-1);
    // console.log(n)
  }
}

document.write(`hasil voidEven(1) : `); 
console.log(voidEven(1));
document.write(`<br>`); 
document.write(`hasil voidEven(5) : `); 
console.log(voidEven(5));
document.write(`<br>`); 
document.write(`hasil voidEven(8) : `); 
console.log(voidEven(8));


