export const getOracle=async()=>{
    const url="https://yesno.wtf/api";
    const resp=await fetch(url);
    const data=await resp.json();
    //console.log(data);

    return data;
}