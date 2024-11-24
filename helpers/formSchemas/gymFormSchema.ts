import { z } from "zod";

// Plans
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

// Batch
export const batchFormSchema = z.object({
  batchName: z.string().min(1, "Batch Name is required"),
  trainer: z.string().optional(),
  startTime: z.string().min(1, "Start Time is required"), // Use HH:MM format validation if needed
  endTime: z.string().min(1, "End Time is required"),
  startDate: z.string().min(1, "Start Date is required"), // Consider date validation like YYYY-MM-DD
  endDate: z.string().optional(), // Optional field
  capacity: z
    .number()
    .min(1, "Capacity must be at least 1")
    .max(1000, "Capacity cannot exceed 1000"), // Adjust max based on requirements
  type: z.string().optional(),
  description: z.string().optional(),
});

export const batchDefaultValues = {
  batchName: "",
  trainer: "",
  startTime: "",
  endTime: "",
  startDate: "",
  endDate: "",
  capacity: 0,
  type: "active",
  description: "",
};

// Expense
export const expenseFormSchema = z.object({
  typeOfExpense: z.string().min(1, "Type of Expense is required"),
  nameOfExpense: z.string().optional(),
  partyName: z.string().min(1, "Party Name is required"),
  billNo: z.string().optional(), // "Bill No. / Voucher No."
  description: z.string().optional(),
  expenseDate: z.string().min(1, "Expense Date is required"), // Use YYYY-MM-DD format validation if needed
  billAmount: z
    .number()
    .min(0, "Bill Amount must be greater than or equal to 0")
    .optional(),
  paidAmount: z
    .number()
    .min(0, "Paid Amount must be greater than or equal to 0")
    .optional(),
  paymentType: z.string().optional(), // You can add other types
  paymentDetails: z.string().optional(),
  balance: z
    .number()
    .min(0, "Balance must be greater than or equal to 0")
    .optional(),
});

export const expenseDefaultValues = {
  typeOfExpense: "",
  nameOfExpense: "",
  partyName: "",
  billNo: "",
  description: "",
  expenseDate: "",
  billAmount: 0,
  paidAmount: 0,
  paymentType: "cash", // Default to 'cash', adjust as needed
  paymentDetails: "",
  balance: 0,
};
