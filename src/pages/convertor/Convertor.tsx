import { useEffect, useState, type ChangeEvent } from "react"
import { useLocation, useParams } from "react-router"
import { binToDeci, binToHex, deciToBin, deciToHex, deciToOct, hexToBin, hexToDeci, octToDeci } from "../utils/conventors";

type inputFieldType = {
  value1: string,
  value2: string,
}
export default function Convertor() {
  const [inputField, setInputField] = useState<inputFieldType>({
    value1:'',
    value2:'',
  })
  const {id} = useParams();
  const location = useLocation();
  
  const convertorType = [
    ['Hexacimal','Decimal'],
    ['Decimal','Binario'],
    ['Binario','Hexadecimal'],
    ['Octal','Decimal'],
  ];

  useEffect(()=>{
    setInputField(prev=>({
      ...prev,
    value1:'',
    value2:'',
    }));
  },[location])

  const handleChangeInputs= (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void=>{
    const {name,value} = e.target;
      setInputField({
        ...inputField,
        [name]:value,
    })

    if(name==='value1'){

      switch(id){
      case '0':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value2:hexToDeci(prev.value1)
        }))
        break;
      case '1':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value2:deciToBin(prev.value1)
        }))
        break;
      case '2':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value2:binToHex(prev.value1)
        }))
        break;
      case '3':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value2:octToDeci(prev.value1)
        }))
        break;
    }
  }
  
  if(name==='value2'){

      switch(id){
      case '0':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value1:deciToHex(prev.value2)
        }))
        break;
      case '1':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value1:binToDeci(prev.value2)
        }))
        break;
      case '2':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value1:hexToBin(prev.value2)
        }))
        break;
      case '3':
        setInputField(prev=>({
          ...prev,
          [name]:value,
          value1:deciToOct(prev.value2)
        }))
        break;
    }}
  }

  const finalConvertor = convertorType[Number(id)];
    
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 flex flex-col lg:auto-rows-min gap-10 w-full h-full pt-10 px-20">

        <div className="col-span-2 self-start mb-5">
          <h2 className="text-3xl mb-2">Convertidor de {finalConvertor[0]} a {finalConvertor[1]}</h2>
          <span className="text-gray-500">Esta hecho para que se pueda convertir de {finalConvertor[0]} a {finalConvertor[1]} o vise versa</span>
        </div>
        <div className="flex justify-center items-center flex-col">
          <label 
          htmlFor="value-1"
          className="block mb-2.5 text-sm font-medium text-heading ">
            {finalConvertor[0]}
          </label>

          <textarea 
          name="value1"
          id="value-1" 
          onChange={handleChangeInputs}
          value={inputField.value1}
          className="w-80 h-40 bg-gray-100 border border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand block p-3.5 shadow-xs placeholder:text-body resize-none" 
          placeholder={`Escribe tu numero ${finalConvertor[0].toLowerCase()}...`}>
          </textarea>
        </div>
        <div className="flex justify-center items-center flex-col">
          <label 
          htmlFor="value-2" 
          className="block mb-2.5 text-sm font-medium text-heading">
            {finalConvertor[1]}
          </label>

          <textarea 
          name="value2" 
          id="value-2"
          onChange={handleChangeInputs}
          value={inputField.value2}
          className="w-80 h-40 bg-gray-100 border border-gray-300 text-heading text-sm rounded focus:ring-brand focus:border-brand block p-3.5 shadow-xs placeholder:text-body resize-none" 
          placeholder={`Escribe tu numero ${finalConvertor[1].toLowerCase()}...`}>
          </textarea>
        </div>
      </div>
    </>
  )
}
