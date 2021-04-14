import asyncHandler from 'express-async-handler';
import Quote from '../models/quoteModel.js';

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createQuote = asyncHandler(async (req, res) => {
  const quote = new Quote({
    name: req.user._id,
    address: 'Sample brand',
    residence: 'Sample brand',
    bedrooms: 'How Many Bedrooms',
    beds: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdQuote = await quote.save();
  res.status(201).json(createdQuote);
});
