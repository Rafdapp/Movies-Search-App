import React from "react";

export default function SearchMovies(){

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitmitting");

        const query = "Jurassic Park";

        const url = `https://api.themoviedb.org/3/movie/550?api_key=8a17457a6fe6d64552584b5a2e8f6241&query=${query}&page=1&
        include_adult=false`;

        try {
            const res = await fetch(url);
            const data =await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="form" onSubmit={searchMovies}>
           <label className="label" htmlFor="query">Movie Name</label> 
           <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Park"/>
            <button className="button" type="submit">Seach</button>
                  
        </form>
    )
}
