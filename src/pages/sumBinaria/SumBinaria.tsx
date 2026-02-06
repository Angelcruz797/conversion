import { Divider, Fab, IconButton } from "@mui/material";
import { useEffect, useState, type ChangeEvent } from "react";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { binToDeci, deciToBin } from "../../utils/conventors";

export default function SumBinaria() {
    const [valueField, setValueField] = useState<Array<string[]>>([['',''],['','']])
    const [lineAmount, setLineAmount] = useState<number>(1);
    const [result, setResult] = useState<[string,string]>(['',''])

    useEffect(() => {
        let deciResult:number=0;
        let isMulti:[boolean,number]=[false,0];
        valueField.forEach((element,i) => {
            if(element[1].split(' ').length>1) {
                isMulti[0] = true;
                isMulti[1] = i+1;
            }
            deciResult=deciResult+Number(element[1]);
        });
        if(isMulti[0]){
            setResult(['Tienes un error; pista value '+isMulti[1],'Tienes un error; pista value '+isMulti[1]])
        }else if(!Number.isNaN(deciResult)){
            setResult([deciToBin(deciResult.toString()),deciResult.toString()])
        } else{
            setResult(['Hay un error, porfa ingresa un caracter correcto','Hay un error, porfa ingresa un caracter correcto'])
        }

    }, [valueField])
    

    const handleChangeInputBin= (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>{
        const {name,value} = e.target;
        const order = Number(name.split('value')[1]);


        setValueField(prev=>{
            const copy = [...prev];
            copy[order-1][0] = value;
            copy[order-1][1] = binToDeci(value).includes('Hay un error')?'Hay un error':binToDeci(value);
            
            return copy;
        })
    }

    const handleChangeInputDeci= (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>{
        const {name,value} = e.target;
        const order = Number(name.split('value')[1]);

        setValueField(prev=>{
            const copy = [...prev];
            copy[order-1][1] = value;
            copy[order-1][0] = deciToBin(value);
            
            return copy;
        })     
    }

    const addInput=()=>{
        setLineAmount(prev=>prev++)
        setValueField(prev=>([
            ...prev,
            prev[lineAmount]=['',''],
        ])) 
        console.log(lineAmount)
    }

    const removeValue =(index:number)=>{
        setValueField(prev => prev.filter((_, i) => i !== index))
    }


  return (
    <>
        <div className="w-full h-full scroll-auto">
            <h2 className="text-2xl">Suma de Binarios</h2>
            <span className="text-gray-500 ">Aqui podras realizar la suma de la cantidad de binarios que desees</span>
            <div className="flex w-full flex-col gap-3 items-center mt-2">
                <div className="flex flex-col w-full">
                    {valueField.map((prev,i)=>{
                        return (
                            <div key={i} className="flex flex-row items-center lg:grid lg:grid-cols-2 lg:gap-x-30 gap-x-10 flex-wrap mb-5">
                                <div className="w-full flex flex-row lg:gap-x-30 gap-x-10 lg:col-span-2">   
                                    <label 
                                    htmlFor={'value-'+(i+1)} 
                                    className="block mb-2.5 text-sm font-medium text-heading w-1/2">
                                        Valor {(i+1)} <span className="text-gray-400"> (binario)</span>
                                    </label>
                                    <label 
                                    htmlFor={'value-'+(i+1)} 
                                    className="block mb-2.5 text-sm font-medium text-heading w-1/2">
                                        Valor {(i+1)} <span className="text-gray-400"> (decimal)</span>
                                    </label>
                                </div>
                                <input
                                type="text"
                                id={"value-"+(i+1)} 
                                name={'value'+(i+1)}
                                onChange={handleChangeInputBin}
                                value={valueField[i][0]}
                                className="lg:w-4/4 w-5/12 bg-gray-100 border border-gray-300
                                text-heading text-sm rounded-base focus:ring-brand
                                focus:border-brand block px-3 py-2.5 shadow-xs
                                placeholder:text-body"
                                placeholder="valor" />

                                <div className="flex flex-row w-5/12">
                                    <input
                                    type="text"
                                    id={"value-"+(i+1)} 
                                    name={'value'+(i+1)}
                                    onChange={handleChangeInputDeci}
                                    value={valueField[i][1]}
                                    className="w-full bg-gray-100 border border-gray-300
                                    text-heading text-sm rounded-base focus:ring-brand
                                    focus:border-brand block px-3 py-2.5 shadow-xs
                                    placeholder:text-body"
                                    placeholder="valor" />
                                    
                                    {i>1?(<IconButton onClick={()=>removeValue(i)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    ):<div className="w-12"></div>}
                                </div>
                            </div>
                        )
                    })}

                </div>
                <Fab 
                size="small" 
                className="mb-10" 
                aria-label="add"
                onClick={addInput}
                >
                    <AddIcon />
                </Fab>
                <Divider className="w-full" />
                <div className="flex flex-col w-full gap-x-5 lg:flex-row h-auto mt-10">
                    <div className="flex flex-col w-full">
                        <label 
                        htmlFor="result-bin" 
                        className="block mb-2.5 text-sm font-medium text-heading">
                            Resultado <span className="text-gray-400"> (binario)</span>
                        </label>
                        <input 
                        type="text" 
                        id="result-bin" 
                        value={result[0]}
                        className="lg:h-3/5 w-full bg-gray-100 border border-gray-300
                        text-heading text-sm rounded-base focus:ring-brand 
                        focus:border-brand block px-3 py-2.5 shadow-xs 
                        placeholder:text-body"
                        disabled
                        />
                    </div>
                    <div className="flex flex-col w-full lg:m-0 mt-5">
                        <label 
                        htmlFor="result-deci"
                        className="block mb-2.5 text-sm font-medium text-heading">
                            Resultado <span className="text-gray-400"> (decimal)</span>
                        </label>
                        <input 
                        type="text" 
                        id="result-deci" 
                        value={result[1]}
                        className="w-full bg-gray-100 border border-gray-300
                        text-heading text-sm rounded-base focus:ring-brand 
                        focus:border-brand block px-3 py-2.5 shadow-xs 
                        placeholder:text-body" 
                        disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
