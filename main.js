let countA = 0;
let takimArttirA = document.getElementById(takim-a-arttir);
let takimAResetle = document.getElementById(takim-a-resetle);
let takimADüşür = document.getElementById(takim-a-düşür);
let takimBArttir = document.getElementById(takim-b-arttir);
let takimBResetle = document.getElementById(takim-b-resetle);
let takimBDüşür = document.getElementById(takim-b-düşür);


function takimAdiA() {
    
    let takimAdiA = prompt("Yeni takım girin:");
    
  
    document.getElementById("takim-name-a").innerText = takimAdiA
}
function takimAdiB() {
    
    let takimAdiB = prompt("Yeni takım girin:");
    
  
    document.getElementById("takim-name-b").innerText = takimAdiB
}



takimArttirA.addEventListener ("click", function(){
    countA++;
    document.getElementById("p").innerHTML = countA;
})




