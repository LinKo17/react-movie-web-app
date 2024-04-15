const configuration  = {
    main   : "https://api.themoviedb.org/3",

    key    : "b4844965f36533bdaa743f9f5bb77237",

    access_token : "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDg0NDk2NWYzNjUzM2JkYWE3NDNmOWY1YmI3NzIzNyIsInN1YiI6IjY2MDhlMjFiYTg5NGQ2MDE3YzY2NTU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ic63CrFWPzWVlkW9zW58wdY6QjfrXOGu0mppSAE64EU",

    movies : {
        movie   : "/movie",
        popular :"/popular?language=en-US",
        video:"/videos?language=en-US", //need movie id (video only)
        tags :"&append_to_response=videos",//need movie id (tag and video)
        details : ""
    },

    series : {
        series : "",
    },

    image : {
        original : "https://image.tmdb.org/t/p/original/",
        w_500    : "https://image.tmdb.org/t/p/w500/"
    }
}

export default configuration