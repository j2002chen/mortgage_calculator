
console.log("this script is working");
function display() {
    var pp = document.getElementById("Purchase_Price").value;
    var dp = document.getElementById("Down_Payment").value;
    var ir = document.getElementById("Interest_rate").value;
    var ap = document.getElementById("Amortization_period").value;
    var pfform = document.getElementById("Payment_frequency").value;

    var pf;
    if(pfform == "Weekly"){
        pf = 4;
    }else if (pfform == "Bi-Weekly"){
        pf = 2;
    }else{
        pf = 1;
    }
    var mp = pp-dp;
    var p= mp*(ir/100)/(pf*12)*(1+(ir/100)/(pf*12))**(pf*12*ap) / ((1+(ir/100)/(pf*12))**(pf*12*ap)-1);
    p = Math.round(p*100)/100;
    document.getElementById("test").innerHTML = mp;
    document.getElementById("test2").innerHTML = dp;
    document.getElementById("test3").innerHTML = ir;
    document.getElementById("test4").innerHTML = ap;
    document.getElementById("test5").innerHTML = p;
}