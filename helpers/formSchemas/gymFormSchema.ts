import { z } from "zod";

export const planFormSchema = z.object({
  planDetails: z.object({
    planName: z.string().min(1, "Plan Name is required"),
    category: z.string().min(1, "Category is required"),
    planType: z.string().optional(), // Optional field for dropdown
    planFor: z.string().optional(), // Optional field for dropdown
    showPlanOnline: z.boolean().optional(), // Toggle or checkbox
    description: z.string().optional(), // Optional text area
  }),
  packageDetails: z.object({
    packageType: z.string().min(1, "Package Name is required"),
    durationInDays: z
      .number()
      .positive("Duration must be a positive number")
      .int("Duration must be an integer"),
    sessions: z
      .number()
      .nonnegative("Sessions cannot be negative")
      .int("Sessions must be an integer"),
    priceInRupees: z.number().positive("Price must be a positive number"),
    discountInRupees: z
      .number()
      .nonnegative("Discount cannot be negative")
      .default(0), // Default value
  }),
});

export const planFormDefaultValues: z.infer<typeof planFormSchema> = {
  planDetails: {
    planName: "",
    category: "gym",
    planType: "",
    planFor: "",
    showPlanOnline: false,
    description: "",
  },
  packageDetails: {
    packageType: "",
    durationInDays: 0,
    sessions: 0,
    priceInRupees: 0,
    discountInRupees: 0,
  },
};
