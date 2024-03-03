import { Quotes } from "../Data/Quotes";

export const getQuote=(id)=>{
    return Quotes.filter(quote=>quote.id===id);
}