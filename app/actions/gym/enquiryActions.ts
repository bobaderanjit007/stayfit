"use server";

import { addEnquiryFormSchema } from "@/helpers/formSchemas/memberFromSchema";
import axios from "axios";
import { z } from "zod";
import { enquiryapi } from "../api";

// get all enquiries data
export async function getAllEnquiries() {
  try {
    const response = await axios.post(`${enquiryapi}/get-enquiry-info`);

    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching all enquires data:");
    return error;
  }
}

// get enquiry data by id
export async function getEnquiryById(id: number) {
  try {
    const response = await axios.post(
      `${enquiryapi}/get-enquiry-info?id=${id}`
    );
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching enquiry data by id:");
    return error;
  }
}

// create new enquiry
export async function addNewEnquiry(
  values: z.infer<typeof addEnquiryFormSchema>
) {
  try {
    const enquiryData = {
      //   "plan_id": 1,
      first_name: values.first_name,
        last_name: values.last_name,
      email: values.email,
      address_info: {
        // address1: values.address,
        address2: values.address,
        locality: values.locality,
        city: values.city,
        state: values.state,
        country: values.country,
        pincode: values.pincode,
      },
      // //   assign_to: Trainer A,
      date_of_birth: values.dateOfBirth,
      gender: values.gender,
      registration_date: new Date(),
      // emergency_contact_person: values.emergencyContactPerson,
      // emergency_contact: values.emergencyContact,
      // //     profile_picture: profile.jpg,
      reference_details: values.reference,
      // batch_details: values.batchDetails.assignBatch,
      // height: values.fitnessDetails.height,
      // weight: values.fitnessDetails.weight,
      // fitness_aspiration: values.fitnessDetails.fitnessAspiration,
      // category: values.fitnessDetails.category,
      // activities: values.fitnessDetails.activities,
      // health_condition: values.fitnessDetails.medicalConditions,
      // blood_group: values.fitnessDetails.bloodGroup,
    };

    const response = await axios.post(`${enquiryapi}/add-enquiry`, enquiryData);

    return response.data;
  } catch (error: unknown) {
    console.error("Error creating enquiry:");
    return error;
  }
}

// delete enquiry
export async function deleteEnquiryById(id: number) {
  try {
    const response = await axios.post(`${enquiryapi}/delete-member?id=${id}`);
    return response;
  } catch (error: unknown) {
    console.error("Error deleting enquiry data by id:");
    return error;
  }
}
