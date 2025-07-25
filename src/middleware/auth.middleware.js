import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Acceso denegado, token no proporcionado' });

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        next();
    });
};