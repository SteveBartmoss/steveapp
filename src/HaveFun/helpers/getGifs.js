export const getGifs=async(prop)=>{
    
    const url=`https://api.giphy.com/v1/gifs/search?api_key=EgCmS5NAfDFkbjdQePCgH4s4UUlYJ1l8&q=${prop}&limit=10`;
    const resp=await fetch(url);
    const {data}=await resp.json();

    const gifs=data.map(img=>{
        return{
            id: img.id, 
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    
    //console.log(gifs);
    return gifs;
}
