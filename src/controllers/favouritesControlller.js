
export const fetchFavouritesByIdController = (req, res, next) => {
    try {
        const userId = req.params?.id
        if(!userId) {
            return res.status(400).send({
                status: "FAILED",
                message: "BAD USER INPUT, User ID missing"
            })
        }

        // below logic to findOne in favourites collection by userId

    } catch {
        return res.status(500).send({
            status: "FAILED",
            message: "Internal server error"
        })
    }
}

export const addFavouritesController = (req, res, next) => {
    try {
        const { userId, movieId } = req.body
        if(!userId || !movieId) {
            return res.status(400).send({
                status: "FAILED",
                message: "BAD USER INPUT"
            })
        }

        // logic to add movieid and userid into favourites collection

    } catch {

    }
}