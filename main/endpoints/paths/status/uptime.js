module.exports = async function uptime(req, res) {
    return res.json({uptime: process.uptime()})
}