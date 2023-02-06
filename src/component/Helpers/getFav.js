import { Favoritos } from "../Data/Favoritos";

export const getFavById=(id)=>{
    return Favoritos.filter(favorito=>favorito.id===id);
}