import { z } from "zod";

// Enquiry Form Schema
export const addEnquiryFormSchema = z.object({
  // Personal Details
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().optional(),
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
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  address: z.string().optional(),
  pincode: z.string().optional(),
});

// Enquiry Form Default values
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
  city: "",
  state: "",
  country: "",
  address: "",
  pincode: "",
};

// Enquiry Follow Up Form
export const enquirFollowUpFormSchema = z.object({
  remark: z.string().min(1).max(500),
  nextFollowUpDate: z.string().optional(),
  time: z.string().optional(),
  actionTaken: z.enum(["call", "sms", "mail", "visit", "closed", "free-trial"]),
  trialStartDate: z.string().optional(),
  trialEndDate: z.string().optional(),
  userApproach: z.enum(["hot", "warm", "cold", "free-trial"]),
});

// Enquiry Follow Up Form Default values
export const enquirFollowUpDefaultValues: z.infer<
  typeof enquirFollowUpFormSchema
> = {
  remark: "",
  nextFollowUpDate: "",
  time: "",
  trialStartDate: "",
  trialEndDate: "",
  actionTaken: "call",
  userApproach: "warm",
};

// Member Form Schema
export const memberFormSchema = z.object({
  personalDetails: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address").optional(),
    assignToStaff: z.string().optional(),
    mobileNumber: z.string().regex(/^\d{10}$/, "Invalid mobile number"),
    dateOfBirth: z.string().optional(), // Can be a date string
    gender: z.enum(["male", "female"], { message: "Gender is required" }),
    // registrationDate: z.string().optional(),
    // emergencyContact: z.string().regex(/^\d{10}$/, "Invalid contact number"),
    // emergencyContactPerson: z.string().optional(),
    // memberGSTNumber: z.string().optional(),
    // manualReceiptNumber: z.string().optional(),
  }),
  referenceDetails: z.object({
    reference: z.enum(["walk-in", "reference", "promotion", "stayfit"], {
      message: "Reference type is required",
    }),
  }),
  // batchDetails: z.object({
  //   assignBatch: z.string().optional(), // Batch selection dropdown
  // }),
  // fitnessDetails: z.object({
  //   height: z.number().positive("Height must be a positive value").optional(),
  //   weight: z.number().positive("Weight must be a positive value").optional(),
  //   fitnessAspiration: z.string().optional(),
  //   activities: z.string().optional(), // Select Activities
  //   medicalConditions: z.string().optional(),
  //   bloodGroup: z.string().optional(),
  //   category: z.string().optional(), // Dropdown
  // }),
  // plans: z.object({
  //   membershipPlan: z.boolean().optional(),
  //   assignTrainer: z.boolean().optional(),
  //   addOnServices: z.boolean().optional(),
  // }),
  // workoutDietSchedule: z.object({
  //   workoutSchedule: z.string().optional(),
  //   dietSchedule: z.string().optional(),
  //   workoutStartDate: z.string().optional(),
  //   workoutEndDate: z.string().optional(),
  //   dietStartDate: z.string().optional(),
  //   dietEndDate: z.string().optional(),
  // }),
  addressDetails: z.object({
    searchAddress: z.string().optional(),
    address: z.string().optional(),
    locality: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    roomNoBuildingNo: z.string().optional(),
    country: z.string().optional(),
    pincode: z
      .string()
      .regex(/^\d{6}$/, "Invalid PIN code")
      .optional(),
  }),
});

export const memberFormDefaultValues: z.infer<typeof memberFormSchema> = {
  personalDetails: {
    name: "",
    email: "",
    assignToStaff: "",
    mobileNumber: "",
    dateOfBirth: "",
    gender: "male", // Default gender option
    // registrationDate: "",
    // emergencyContact: "",
    // emergencyContactPerson: "",
    // memberGSTNumber: "",
    // manualReceiptNumber: "",
  },
  referenceDetails: {
    reference: "walk-in", // Default reference value
  },
  // batchDetails: {
  //   assignBatch: "",
  // },
  // fitnessDetails: {
  //   height: 0, // Default numeric value
  //   weight: 0,
  //   fitnessAspiration: "",
  //   activities: "",
  //   medicalConditions: "",
  //   bloodGroup: "",
  //   category: "",
  // },
  // plans: {
  //   membershipPlan: false, // Default boolean value
  //   assignTrainer: false,
  //   addOnServices: false,
  // },
  // workoutDietSchedule: {
  //   workoutSchedule: "",
  //   dietSchedule: "",
  //   workoutStartDate: "",
  //   workoutEndDate: "",
  //   dietStartDate: "",
  //   dietEndDate: "",
  // },
  addressDetails: {
    searchAddress: "",
    locality: "",
    state: "",
    roomNoBuildingNo: "",
    country: "",
    pincode: "",
  },
};
