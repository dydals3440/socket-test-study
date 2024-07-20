import User from "../models/user.model.js";

export const getUserForSidebar = async (req, res, next) => {
    try {
        console.log(req.user);
        const loggedInUserId = req.user.id;

        const allUserExceptLoggedIn = await User.find({
            // ne는 notEqual, login되지 않은 유저가 사이드바에 떠야 하므로.
            _id: {$ne: loggedInUserId}
        }).select("-password")

        res.status(200).json(allUserExceptLoggedIn);
    } catch (error) {
        next(error);
    }
}