const a = prompt('Enter A');
const b = prompt('Enter B');
const c = prompt('Enter C');

document.write(quadraticEquation(a,b,c));

function quadraticEquation(a,b,c){
    const d=discriminant(a,b,c);
    
    if(d>0){
        var x1=(-b+Math.sqrt(d))/(2*a);
        var x2=(-b-Math.sqrt(d))/(2*a);
    }
    if(d==0){
        var x1=-b/(2*a);
        return "x="+x1;
    }
    if(d<0){
        return "Помилка! Дискримінант<0";
    }
    
    return "x1="+x1+" x2="+x2;
}

function discriminant(a,b,c){
    var result=b*b-4*a*c;
    return result;
}


