import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'enterprise-fallback-secret-opt-out';

// Mock User Data for Auth Demo
const MOCK_USERS = [
  { id: '1', email: 'admin@enterprise.com', password: 'password123', role: 'admin' },
  { id: '2', email: 'editor@enterprise.com', password: 'password123', role: 'editor' },
  { id: '3', email: 'customer@enterprise.com', password: 'password123', role: 'customer' },
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = MOCK_USERS.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '8h' }
  );

  res.json({
    token,
    user: { id: user.id, email: user.email, role: user.role }
  });
});

export default router;
