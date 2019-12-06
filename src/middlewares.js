export const notFound = (req, res) => {
  res
    .status(404)
    .json({
      messages: ['Not Found']
    })
}