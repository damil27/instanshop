import * as z from 'zod';

export const FormSchema = z.object({
  // Basic Details Section
  productTitle: z.string().min(1, 'Product title is required'),
  productDescription: z.string().min(1, 'Product description is required'),
  price: z
    .number({ invalid_type_error: 'Price must be a valid number' })
    .positive('Price must be a positive number'),
  oldPrice: z
    .number({ invalid_type_error: 'Old price must be a valid number' })
    .nonnegative('Old price cannot be negative')
    .optional(), // Old price can be optional
  productCollection: z.string().min(1, 'Product collection is required'),
  inventoryStocks: z
    .number({ invalid_type_error: 'Inventory stocks must be a valid number' })
    .nonnegative('Inventory stocks cannot be negative'),

  // Product Images Section
  picture: z
    .any()
    .refine(files => files instanceof FileList && files.length > 0, {
      message: 'At least one product image is required',
    }),

  // Inventory Variations Section
  inventoryVariation: z.boolean().optional(),

  // Shipping Section
  selfShipping: z.boolean().optional(),
  instaShopShipping: z.boolean().optional(),
});
