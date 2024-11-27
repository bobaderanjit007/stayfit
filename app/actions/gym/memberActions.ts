"use server";
import { memberFormSchema } from "@/helpers/formSchemas/memberFromSchema";
import axios from "axios";
import { z } from "zod";
import { membersapi } from "../api";

// get all members data
export async function getAllMembers() {
  try {
    const response = await axios.post(`${membersapi}/get-member-info`);

    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching all members data:");
    return error;
  }
}

// get member data by id
export async function getMemberById(id: number) {
  try {
    const response = await axios.post(`${membersapi}/get-member-info?id=${id}`);
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching member data by id:");
    return error;
  }
}

// create new member
export async function addNewMember(values: z.infer<typeof memberFormSchema>) {
  try {
    const memberData = {
      //   "plan_id": 1,
      first_name: values.personalDetails.first_name,
      last_name: values.personalDetails.last_name,
      email: values.personalDetails.email,
      address_info: {
        // address1: values.addressDetails.address,
        address2: values.addressDetails.address,
        locality: values.addressDetails.locality,
        city: values.addressDetails.city,
        state: values.addressDetails.state,
        country: values.addressDetails.country,
        pincode: values.addressDetails.pincode,
      },
      // //   assign_to: Trainer A,
      date_of_birth: values.personalDetails.dateOfBirth,
      gender: values.personalDetails.gender,
      registration_date: new Date(),
      // emergency_contact_person: values.personalDetails.emergencyContactPerson,
      // emergency_contact: values.personalDetails.emergencyContact,
      // //     profile_picture: profile.jpg,
      reference_details: values.referenceDetails.reference,
      // batch_details: values.batchDetails.assignBatch,
      // height: values.fitnessDetails.height,
      // weight: values.fitnessDetails.weight,
      // fitness_aspiration: values.fitnessDetails.fitnessAspiration,
      // category: values.fitnessDetails.category,
      // activities: values.fitnessDetails.activities,
      // health_condition: values.fitnessDetails.medicalConditions,
      // blood_group: values.fitnessDetails.bloodGroup,
    };

    const response = await axios.post(`${membersapi}/add-member`, memberData);

    return response.data;
  } catch (error: unknown) {
    console.error("Error creating member:");
    return error;
  }
}

// delete member
export async function deleteMemberById(id: number) {
  try {
    const response = await axios.post(`${membersapi}/delete-member?id=${id}`);
    return response;
  } catch (error: unknown) {
    console.error("Error deleting member data by id:");
    return error;
  }
}
