export const getOracle=async(prop)=>{
    const url="https://yesno.wtf/api";
    const resp=await fetch(url);
    const {data}=await resp.json();

    const oracle=data.map(res=>{
        return{
            response: res.answer,
            url: res.image
        }
    })

    return oracle;
}