import express from 'express';
const router = express.Router();
import { createQuote, getQuoteById } from '../controllers/quoteController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/quote').get(getQuotes).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getQuoteById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
