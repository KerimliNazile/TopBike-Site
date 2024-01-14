import React, { useEffect, useState } from 'react'

const useLocalStorage = (key) => {
    const[local,setlocal]=useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)):[])
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(local))
    },[local])

function handleLocal(data){
    setlocal(data)
}
  return [local,handleLocal]

}

export default useLocalStorage