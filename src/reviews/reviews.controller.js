const service = require("./reviews.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await service.read(reviewId);
    if (review) {
        res.locals.review = review
        return next()
    }
    return next({ status: 404, message: "Review cannot be found." })
}

async function update(req, res) {
    const time = new Date().toISOString()
    const reviewId = res.locals.review.review_id
    const updatedReview = {
        ...req.body.data,
        review_id: reviewId,

    }
    await service.update(updatedReview)
    const rawData = await service.updateCritic(reviewId)
    const data = { ...rawData[0], created_at: time, updated_at: time }
    res.json({ data })
}

async function destroy(req, res) {
    const data = await service.delete(res.locals.review.review_id);
    res.sendStatus(204);
}

module.exports = {
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)]
}