import { z } from "zod";

export const planFormSchema = z.object({
  planDetails: z.object({
    planName: z.string().min(1, "Plan Name is required"),
    category: z.string().min(1, "Category is required"),
    planType: z.string().min(1, "Plan Type is required"), // Optional field for dropdown
    planFor: z.string().min(1, "Plan For is required"), // Optional field for dropdown
    showPlanOnline: z.boolean().optional(), // Toggle or checkbox
    description: z.string().optional(), // Optional text area
  }),
  packageDetails: z.object({
    packageType: z.string().optional(),
    durationInDays: z
      .number()
      .nonnegative("Duration must be a positive number")
      .int("Duration must be an integer")
      .optional(),
    sessions: z
      .number()
      .nonnegative("Sessions cannot be negative")
      .int("Sessions must be an integer")
      .optional(),
    priceInRupees: z
      .number()
      .nonnegative("Price must be a positive number")
      .optional(),
    discountInRupees: z
      .number()
      .nonnegative("Discount cannot be negative")
      .default(0)
      .optional(), // Default value
  }),
});

export const planFormDefaultValues: z.infer<typeof planFormSchema> = {
  planDetails: {
    planName: "",
    category: "",
    planType: "",
    planFor: "",
    showPlanOnline: true,
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
