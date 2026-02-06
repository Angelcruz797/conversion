
const regexValidator:Record<string, RegExp> ={
    decimal:/^[\d\s]+$/,
    binario:/^[0-1\s]+$/,
    octal:/^[0-7\s]+$/,
    hexadecimal:/^[0-9a-fA-F\s]+$/,
}

export const deciToBin = (value:string)=>{
    const newValue:string = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.decimal.test(newValue)) return 'Hay un error en el texto, revisa eso';
    
    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]===''){ 
                finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 10).toString(2);
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 10).toString(2);
}
export const binToDeci = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.binario.test(newValue)) return 'Hay un error en el texto, revisa eso';

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ (parseInt(valueSplit[i], 2)).toString();
            }
        }
        return finalValue.trim();
    }

    return (parseInt(newValue, 2)).toString();
}



export const deciToHex = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.decimal.test(newValue)) return 'Hay un error en el texto, revisa eso'

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 10).toString(16).toUpperCase();
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 10).toString(16).toUpperCase();
}

export const hexToDeci = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.hexadecimal.test(newValue)) return 'Hay un error en el texto, revisa eso'

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 16).toString();
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 16).toString();
}




export const binToHex = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.binario.test(newValue)) return 'Hay un error en el texto, revisa eso';

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 2).toString(16);
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 2).toString(16);
}
export const hexToBin = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.hexadecimal.test(newValue)) return 'Hay un error en el texto, revisa eso'

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 16).toString(2);
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 16).toString(2);
}




export const deciToOct = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.decimal.test(newValue)) return 'Hay un error en el texto, revisa eso';

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 10).toString(8);
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 10).toString(8);
}

export const octToDeci = (value:string)=>{
    const newValue = value.trim();
    if(newValue.length==0) return '';
    if(!regexValidator.octal.test(newValue)) return 'Hay un error en el texto, revisa eso';

    const valueSplit:Array<string> = newValue.split(' ');
    if(valueSplit.length>1){
            let finalValue:string='';
        for (let i = 0; i < valueSplit.length; i++) {
            if(valueSplit[i]==='') {finalValue += '';
            } else {
            finalValue=finalValue +' '+ parseInt(valueSplit[i], 8).toString(10);
            }
        }
        return finalValue.trim();
    }

    return parseInt(newValue, 8).toString(10);
}

