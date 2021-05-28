var i;
var array = [1,45,32,21,5,17,43,93]
var standard = 25
for(i=0;i<array.length;i++){
  if (array[i]< standard){
    console.log("under!");
  }
  else{
    console.log("over!");
  }
}
