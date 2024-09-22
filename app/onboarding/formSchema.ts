import * as z from "zod";

export const FormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  userName: z.string().min(4, "Username  must be at least 5 characters"),
  phone: z
    .number({ invalid_type_error: " must be a valid phone number" })
    .positive("Price must be a positive number"),
  email: z.string().email("Invalid email format"),
  storeName: z.string().min(5, "Store name must be at least 5 characters"),
  storeTag: z.string().min(3, "Store tag must be at least 3 characters"),
  storePhone: z.string().min(3, "Store phone must be at least 3 characters"),
  storeEmail: z.string().email("Invalid store email format"),
  category: z.string().min(3, "Category must be at least 3 characters"),
});
