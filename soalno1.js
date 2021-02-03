//sblmnya
function voidEven(n){
  //cek angka genap & >= 0
  if(n%2 == 0 && n >= 0) {
    console.log(n);
    voidEven(n-2);
  } else if (n%2 == 1 && n >= 0){
    voidEven(n-1);
    // console.log(n)
  }
}

console.log(voidEven(8));
console.log(voidEven(5));


