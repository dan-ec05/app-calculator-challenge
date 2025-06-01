export const mainCalc = (values = []) => {
    values = values.join().replaceAll(",", "");
    values = mathOpPickerAndResolver(values, "/");
    values = mathOpPickerAndResolver(values, "x");
    values = mathOpPickerAndResolver(values, "+");
    values = mathOpPickerAndResolver(values, "-");

    return values;
};

function mathOpPickerAndResolver(string = "", op = "/" | "x" | "-" | "+"){
    for (const s of string){
        if (s == op){
            let indexOp = string.indexOf(s);
            let vA = "";
            for (let i = indexOp - 1; i >= 0; i--){
                if (isNaN(string[i]) && string[i] != ".") break;
                else vA += string[i];
            }
            vA = vA.split("").reverse().join("");
            
            let vB = "";
            for (let i = indexOp + 1; i >= 0; i++){
                if(isNaN(string[i]) && string[i] != ".") break;
                else vB += string[i];
            }

            let resultOp;
            if (op == "/") resultOp = (Number(vA) / Number(vB));
            if (op == "x") resultOp = (Number(vA) * Number(vB));
            if (op == "+") resultOp = (Number(vA) + Number(vB));
            if (op == "-") resultOp = (Number(vA) - Number(vB));
            
            if (checkIfValueHasDecimals(resultOp)) resultOp = resultOp.toFixed(2);

            string = string.replace(`${vA}${op}${vB}`, resultOp);
        }
    }
    return string;
}

function checkIfValueHasDecimals (value){
    if (isNaN(value)) {
        throw Error(`${value} is not a number`);
    }

    if (value % 1 == 0) return false;
    return true;
}