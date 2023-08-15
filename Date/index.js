// const tresHoras = 60*60*3*1000;
// const data = new Date(0+tresHoras);

// console.log(data.toString())

// const data = new Date(2024,4,1,12,0,14);

const data = new Date();
console.log('Dia',data.getDate());
console.log('Mes',data.getMonth()+1);
console.log('Ano',data.getFullYear());

// console.log(data.toString(),data.getMonth());
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth()+1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const databr = formataData(data);
console.log(databr)