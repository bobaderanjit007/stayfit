import { z } from "zod";

export const addEnquiryFormSchema = z.object({
  // Personal Details
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Mobile number must be exactly 10 digits" }),
  dateOfBirth: z.date().optional(),
  gender: z.enum(["male", "female"], { message: "Gender is required" }),
  reference: z.enum(["walk-in", "reference", "promotion", "stayfit"], {
    message: "Reference type is required",
  }),

  // Assign to Staff
  staffName: z.string().optional(),

  // Plan Details
  category: z.array(z.enum(["Gym", "Yoga"])).optional(),
  plan: z.string().optional(),
  package: z.string().optional(),
  price: z.number().optional(),
  negotiatedAmount: z.number().optional(),

  // Address Details
  searchAddress: z.string().optional(),
  locality: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  address: z.string().optional(),
  pincode: z
    .string()
    .regex(/^\d{6}$/, { message: "Pincode must be exactly 6 digits" })
    .optional(),
});

export const addEnquiryDefaultValues: z.infer<typeof addEnquiryFormSchema> = {
  // Personal Details
  name: "",
  email: "",
  mobileNumber: "",
  dateOfBirth: new Date(),
  gender: "male", // Defaulting to "MALE"
  reference: "walk-in", // Defaulting to "WALK-IN"

  // Assign to Staff
  staffName: "",

  // Plan Details
  category: ["Gym"], // Empty array for categories
  plan: "",
  package: "",
  price: undefined, // Optional fields can be undefined
  negotiatedAmount: undefined,

  // Address Details
  searchAddress: "",
  locality: "",
  state: "",
  country: "",
  address: "",
  pincode: "",
};
