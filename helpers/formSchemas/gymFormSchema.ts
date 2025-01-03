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

// Trainer
export const trainerFormSchema = z.object({
  // Personal Details
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  mobileNumber: z.string().min(10, "Invalid mobile number").optional(),
  dateOfJoining: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  specialization: z.string().optional(),
  experience: z.number().min(0, "Experience must be a positive number"),
  category: z.string().optional(),
  trainerFor: z.string().optional(),

  // Salary Details
  salary: z.number().min(0, "Salary must be a positive number"),
  absentDeduction: z
    .number()
    .min(0, "Absent deduction must be a positive number")
    .optional(),
  lateMarkAllowedPerMonth: z
    .number()
    .min(0, "Late mark allowed must be a positive number")
    .optional(),
  lateComingDeduction: z
    .number()
    .min(0, "Late coming deduction must be a positive number")
    .optional(),

  // Shift Details
  shifts: z
    .array(
      z.object({
        inTime: z.string().optional(),
        outTime: z.string().optional(),
      })
    )
    .optional(),

  // Working Hours
  workingHours: z.string().optional(),
  holidays: z.string().optional(),

  // Address Details
  searchAddress: z.string().optional(),
  locality: z.string().optional(),
  state: z.string().optional(),
  roomNumber: z.string().optional(),
  country: z.string().optional(),
  pincode: z.string().optional(),
});

export const trainerDefaultValues = {
  // Personal Details
  name: "",
  email: "",
  mobileNumber: "",
  dateOfJoining: "",
  dateOfBirth: "",
  gender: "male",
  specialization: "",
  experience: 0,
  category: "gym",
  trainerFor: "both",

  // Salary Details
  salary: 0,
  absentDeduction: 0,
  lateMarkAllowedPerMonth: 0,
  lateComingDeduction: 0,

  // Shift Details
  shifts: [
    { inTime: "", outTime: "" }, // Shift 1
    { inTime: "", outTime: "" }, // Shift 2
  ],

  // Working Hours
  workingHours: "",
  holidays: "",

  // Address Details
  searchAddress: "",
  locality: "",
  state: "",
  roomNumber: "",
  country: "",
  pincode: "",
};

// Staff
export const staffFormSchema = z.object({
  // Personal Details
  // center: z.string().optional(),
  // branch: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be 10 digits")
    .min(1, "Mobile number is required"),
  email: z.string().email("Invalid email format"),
  dateOfJoining: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.string().optional(),
  // specialization: z.string().optional(),
  // experience: z.number().min(0, "Experience must be a positive number"),
  // category: z.string().optional(),
  // trainerFor: z.string().optional(),

  // // Shift Details
  shifts: z
    .array(
      z.object({
        inTime: z.string().optional(),
        outTime: z.string().optional(),
      })
    )
    .length(2), // Assuming 2 shifts: Shift 01 and Shift 02
  role: z.string().min(1, "Role is required"),
  workingHours: z.string().optional(),
  holidays: z.string().optional(),
  // allowLogin: z.boolean(),
  // allowAppLogin: z.boolean(),

  // // Salary Details
  salary: z.number().min(0, "Salary must be a positive number"),
  absentDeduction: z
    .number()
    .min(0, "Absent deduction must be positive")
    .optional(),
  lateMarkAllowed: z
    .number()
    .min(0, "Late mark allowed must be positive")
    .optional(),
  lateMarkDeduction: z
    .number()
    .min(0, "Late mark deduction must be positive")
    .optional(),
  // leavesAllowedInMonth: z
  //   .number()
  //   .min(0, "Leaves allowed must be positive")
  //   .optional(),

  // Address Details
  searchAddress: z.string().optional(),
  locality: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  roomNumber: z.string().optional(),
  country: z.string().optional(),
  pincode: z.string().optional(),
});

export const staffDefaultValues = {
  // Personal Details
  // centre: "",
  // branch: "",
  name: "",
  mobileNumber: "",
  email: "",
  dateOfJoining: "",
  dateOfBirth: "",
  gender: "male",

  // // Shift Details
  shifts: [
    { inTime: "", outTime: "" }, // Shift 01
    { inTime: "", outTime: "" }, // Shift 02
  ],
  role: "",
  workingHours: "",
  holidays: "",
  // allowLogin: false,
  // allowAppLogin: false,

  // // Salary Details
  salary: 0,
  absentDeduction: 0,
  lateMarkAllowed: 0,
  lateMarkDeduction: 0,
  // leavesAllowedInMonth: 0,

  // Address Details
  searchAddress: "",
  locality: "",
  state: "",
  roomNumber: "",
  country: "",
  pincode: "",
};

// Equipment Details
export const equipmentFormSchema = z.object({
  equipmentName: z.string().min(1, "Equipment Name is required"),
  equipmentType: z.string().optional(),
  equipmentNumber: z.string().optional(),
  quantity: z.number().min(1, "Quantity must be at least 1").optional(),
  color: z.string().optional(),
  purpose: z.string().optional(),
  purchaseDate: z.string().optional(), // Use Date or string based on your setup
  vendorName: z.string().optional(),
  cost: z.number().optional(),
  nextServiceDate: z.string().optional(), // Use Date or string based on your setup
  manufacturerName: z.string().optional(),
  equipmentStatus: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  length: z.number().optional(),
  width: z.number().optional(),
  height: z.number().optional(),
  weight: z.number().optional(),
  image: z.any().optional(), // Optional image upload
});

export const equipmentDefaultValues = {
  equipmentName: "",
  equipmentType: "",
  equipmentNumber: "",
  quantity: 1,
  color: "",
  purpose: "",
  purchaseDate: "",
  vendorName: "",
  cost: 0,
  nextServiceDate: "",
  manufacturerName: "",
  equipmentStatus: "",
  category: "",
  description: "",
  length: 0,
  width: 0,
  height: 0,
  weight: 0,
  image: null,
};

// Custom Bill
export const customBillFormSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone Number must be at least 10 digits")
    .optional(),
  nameOnBill: z.string().optional(),
  emailAddress: z.string().email("Invalid email address").optional(),
  billFor: z.string().min(1, "Bill For is required"),
  billAmount: z.number().positive("Bill Amount must be a positive number"),
  note: z.string().optional(),
  address: z.string().optional(),
  locality: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
});

export const customBillDefaultValues = {
  phoneNumber: "",
  nameOnBill: "",
  emailAddress: "",
  billFor: "",
  billAmount: 0,
  note: "",
  address: "",
  locality: "",
  city: "",
  state: "",
};

// Service
export const serviceFormSchema = z.object({
  serviceName: z.string().min(1, "Service Name is required"),
  type: z.string().min(1, "Type is required"),
  price: z.number().positive("Price must be a positive number"),
  status: z.string().min(1, "Status is required"),
  description: z.string().optional(),
});

export const serviceDefaultValues = {
  serviceName: "",
  type: "",
  price: 0,
  status: "",
  description: "",
};

// Product
export const productFormSchema = z.object({
  productName: z.string().min(1, "Product Name is required"),
  category: z.string().min(1, "Category is required"),
  quantity: z.number().positive("Quantity must be a positive number"),
  status: z.string().min(1, "Status is required"),
  price: z.number().positive("Price must be a positive number"),
  description: z.string().optional(),
});

export const productDefaultValues = {
  productName: "",
  category: "",
  quantity: 0,
  status: "",
  price: 0,
  description: "",
};

// Workout Plan
export const workoutPlanFormSchema = z.object({
  scheduleName: z.string().min(1, "Schedule name is required"),
  description: z.string().optional(),
});

export const workoutPlanDefaultValues = {
  scheduleName: "",
  description: "",
};
