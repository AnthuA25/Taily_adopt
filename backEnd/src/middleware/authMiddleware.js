const jwt = require('jsonwebtoken')

const isAuthenticated = (req, res, next) => {
    const authHeader = req.header('Authorization')
    if ( !authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({ success: false, error: 'Unauthorized'})
        return;
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded.user_id){
            res.status(401).json({ success: false, error: 'Unauthorized'})
            return;
        }

        req.user = decoded

    } catch (error) {
        console.log('error', error )
        res.status(401).json({ success: false, error: 'Unauthorized'})
        return;
    }
    
    next()
}

module.exports = { isAuthenticated }