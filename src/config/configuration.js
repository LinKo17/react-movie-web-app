const configuration  = {
    main   : "https://api.themoviedb.org/3",

    key    : "b4844965f36533bdaa743f9f5bb77237",

    access_token : "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDg0NDk2NWYzNjUzM2JkYWE3NDNmOWY1YmI3NzIzNyIsInN1YiI6IjY2MDhlMjFiYTg5NGQ2MDE3YzY2NTU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ic63CrFWPzWVlkW9zW58wdY6QjfrXOGu0mppSAE64EU",

    movies : {
        movie   : "/movie",
        popular :"/popular?language=en-US",
        video:"/videos?language=en-US", //need movie id (video only)
        tags :"&append_to_response=videos",//need movie id (tag and video)
        top_rated : "/top_rated?language=en-US",
        similar:"/similar?language=en-US&page=1"//similar movies
    },

    tv : {
        tv : "/tv",
        popular :"/popular?language=en-US",
        top_rated:"/top_rated?language=en-US",
        similar:"/similar?language=en-US&page=1",//similar movies
        video:"/videos?language=en-US", //need movie id (video only)
    },

    image : {
        original : "https://image.tmdb.org/t/p/original/",
        w_500    : "https://image.tmdb.org/t/p/w500/"
    },

    trend: {
        trending : "/trending",

        all : "/all",
        movie: "/movie",
        tv : "/tv",
        person : "/person",


        day : "/day",
        week : "/week",

        others : "?language=en-US"
    },
    genres:{
        genre:"/genre",
        movies : "/movie/list?language=en",
        tv:"/tv/list?language=en"
    },
    discover:{
        movie:"/discover/movie?with_genres=",
        tv:"/discover/tv?with_genres="
    },
    details:{
       movie : "/movie/",
       tv:"/tv/"
    },
    search :"/search/multi?language=en-US&page=1&query=",
    actors :{
        movie: "/movie",
        tv: "/tv",
        credits : "/credits"
    }

}

export default configuration