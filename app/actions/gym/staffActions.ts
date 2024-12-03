"use server";

import { staffFormSchema } from "@/helpers/formSchemas/gymFormSchema";
import axios from "axios";
import { z } from "zod";
import { staffapi } from "../api";

export async function addNewStaff(values: z.infer<typeof staffFormSchema>) {
  try {
    const staffData = {
      gym_id: 1,
      //     "enquiry_id": 101,
      //     "plan_id": 5,
      // role: values.role,
      //     "profile_picture": "profile.jpg",
      first_name: values.name,
      //     "last_name": "Doe",
      date_of_birth: values.dateOfBirth,
      mobile_no: values.mobileNumber,
      email: values.email,
      gender: values.gender,
      address_info: {
        // address1: 123,
        // address2:  ,
        locality: values.locality,
        city: values.city,
        state: values.state,
        country: values.country,
        pincode: values.pincode,
      },
      //     "assign_to": "Group Training",
      //     "emergency_contact_person": "Jane Doe",
      //     "emergency_contact_no": "1234567890",
      //     "registration_date": "2024-12-01",
      //     "member_gst": "GST1234",
      //     "reference_details": "Referred by XYZ",
      //     "batch_details": "Morning Batch",
      //     "height": 175.5,
      //     "weight": 70.2,
      // //     "fitness_aspiration": "Weight Loss",
      // category: values.category,
      // //     "activity": "Yoga",
      // //     "health_condition": "None",
      // //     "add_on_services": "Diet Plan",
      // specialisation: values.specialization,
      // experience: values.experience,
      // trainer_for: values.trainerFor,
      salary_details: values.salary,
      salary_deduction: values.absentDeduction,
      late_mark_allow_per_month: values.lateMarkAllowed,
      late_coming_deduction: values.lateMarkDeduction,
      // //     "created_by": 1,
      // //     "updated_by": 1
      // //   }
    };

    const response = await axios.post(`${staffapi}/add-staff`, staffData);

    return response.data;
  } catch (error: unknown) {
    console.error("Error creating new staff:");
    return error;
  }
}

export async function getAllStaff() {
  try {
    const response = await axios.post(`${staffapi}/get-staff-info`);

    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching all staff:");
    return error;
  }
}
