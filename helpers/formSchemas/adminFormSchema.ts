import { z } from "zod";

// edit admin profile form
export const adminProfileFormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  mobileNumber: z.string(),
  date_of_birth: z.string(),
});

export const adminProfileFormDefaultValues: z.infer<
  typeof adminProfileFormSchema
> = {
  first_name: "",
  last_name: "",
  email: "",
  mobileNumber: "",
  date_of_birth: "",
};

// brand form
export const brandDetailsFormSchema = z.object({
  brand_name: z.string().min(1, "Brand name is required"),

  // company details
  company_name: z.string().min(1, "Company name is required"),
  established_date: z.string().optional(),
  address: z.string().optional(),
  pan_number: z.string().optional(),
  website: z.string().optional(),

  // bank details
  bank_name: z.string().optional(),
  bank_branch: z.string().optional(),
  account_number: z.string().optional(),
  ifsc: z.string().optional(),

  // gst details
  gst_charged_on: z.string().optional(),
  gst_number: z.string().optional(),
  gst_applicable: z.string().optional(),
  cgst: z.string().optional(),
  sgst: z.string().optional(),
  igst: z.string().optional(),
});

export const brandDetailsFormDefaultValues: z.infer<
  typeof brandDetailsFormSchema
> = {
  brand_name: "",
  company_name: "",
  established_date: "",
  address: "",
  pan_number: "",
  website: "",
  bank_name: "",
  bank_branch: "",
  account_number: "",
  ifsc: "",
  gst_charged_on: "",
  gst_number: "",
  gst_applicable: "true",
  cgst: "",
  sgst: "",
  igst: "",
};


// branch form
export const branchFormSchema = z.object({
  // Branch
  established_date: z.string().min(1, "Established date is required"),
  branch_name: z.string().min(1, "Branch Name is required"),
  branch_type: z.string().min(1, "Branch type is required"),
  branch_for: z.string().min(1, "Branch for is required"),
  carpet_area: z.string().optional(),
  amenities: z.array(z.string()).optional(),

  // GST
  gst_charged_on: z.string().optional(),
  gst_number: z.string().optional(),
  gst_applicable: z.boolean(),
  cgst: z.string().optional(),
  sgst: z.string().optional(),
  igst: z.string().optional(),

  // Address
  address: z.object({
    address: z.string().optional(),
    room_no: z.string().optional(),
    locality: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    country: z.string().optional(),
    pincode: z.string().optional(),
  }),
});

export const branchFormDefaultValues: z.infer<typeof branchFormSchema> = {
  established_date: "",
  branch_name: "",
  branch_type: "",
  branch_for: "",
  carpet_area: "",
  amenities: [],
  gst_charged_on: "",
  gst_number: "",
  gst_applicable: false,
  cgst: "",
  sgst: "",
  igst: "",
  address: {
    address: "",
    room_no: "",
    locality: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
};
