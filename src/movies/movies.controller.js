const service = require("./movies.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function movieExists(req, res, next) {
    const { movieId } = req.params;
    const movie = await service.readMovie(movieId)
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    return next({ status: 404, message: "Movie cannot be found." });
}

async function list(req, res) {
    const data = await service.list(req.query.is_showing)
    res.json({ data })
}

async function readMovie(req, res) {
    res.json({ data: res.locals.movie })
}

async function readTheaters(req, res) {
    const data = await service.readTheaters(res.locals.movie.movie_id)
    res.json({ data })
}

async function readReviews(req, res) {
    const data = await service.readReviews(res.locals.movie.movie_id)
    res.json({ data })
}

module.exports = {
    list: asyncErrorBoundary(list),
    readMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readMovie)],
    readTheaters: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readTheaters)],
    readReviews: [asyncErrorBoundary(movieExists), asyncErrorBoundary(readReviews)]

}