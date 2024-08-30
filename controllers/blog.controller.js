const asyncHandler = require("express-async-handler")

exports.createBlog = asyncHandler(async (req, res) => {
    res.json({ message: "createBlog Success" })
})
exports.readBlog = asyncHandler(async (req, res) => {
    res.json({ message: "readBlog Success" })
})
exports.updateBlog = asyncHandler(async (req, res) => {
    res.json({ message: "updateBlog Success" })
})
exports.deleteBlog = asyncHandler(async (req, res) => {
    res.json({ message: "deleteBlog Success" })
})