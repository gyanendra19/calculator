import React, { useEffect, useState } from "react";


function CalcBody() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    const clearResult = () => {
        setInput('')
        setResult('')
    }

    const changeInput = (val) => {
        setInput(prev => prev + val)
    }

    const sign = ['+', '-', '/', '*']

    const changeSignInput = (val) => {   
        setInput(prev => {
            if(sign.some(sign => prev.includes(sign)) && sign.some(sign => prev.endsWith(sign))){
                console.log(prev)
                return prev.replace(/.$/ , val)
            }else{
                return prev + val
            }
        } )
    }

    const clearInput = () => {
        setInput(prev => prev.slice(0, prev.length - 1))
    }

    const calcResult = (exp) => {
        
        const res = eval(exp)
        setResult(res)
    }


    const btnFunc = (val) => {
        return <button key={val} value={val} onClick={(e) =>
            val === '+' ||
            val === '-' ||
            val === '*' ||
            val === '/'? changeSignInput(e.target.value) : 
            val === '=' ? calcResult(input) : 
            val === 'C' ? clearResult() : 
            val === 'X' ? clearInput() : changeInput(e.target.value) 
        } 
            className="w-full text-2xl h-14 bg-blue-500 rounded-full border-solid border border-black">{val}</button>
    }

    const btnValues = [["C", "**", "X", "/"],
                     ['9', "8", "7", "+"],
                      ["6", "5", "4", '-'],
                       ["3", "2", "1", '*'],
                        ["00","0", ".", "=" ]]


    return (
        <div className="m-auto w-3/12 h-3/4 max-sm:w-11/12 max-sm:m-1">
            <div className="w-full h-20 bg-pink-500">
                <div className="text-black/70 w-11/12 text-right pt-8 pr-3 ml-auto text-3xl">{result}</div>
            </div>
            <div className="h-12 bg-blue-400 w-full border-solid border border-black">
                <div className="w-11/12 ml-auto text-right pt-3 pr-3 text-2xl">{input}</div>
            </div>
            <div className="w-full h-auto grid grid-cols-4 gap-3 bg-pink-500 pt-6 pb-6 pl-4 pr-4">
                {btnValues.flat().map(el => {
                    return btnFunc(el)
                })}
            </div>
        </div>
    )
}

export default CalcBody