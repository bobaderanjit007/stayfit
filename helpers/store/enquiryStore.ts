import { Enquiry } from "@/app/(main)/gym/enquiry/enquiryColumns";
import { getAllEnquiries } from "@/app/actions/gym/enquiryActions";
import { create } from "zustand";

interface EnquiryStore {
  gymAllEnquiryData: any[];

  enquiryTableData: Enquiry[];
  getGymAllEnquiryData: () => void;
}

const enquiryStore = create<EnquiryStore>((set) => ({
  gymAllEnquiryData: [],

  enquiryTableData: [],

  getGymAllEnquiryData: async () => {
    const response = await getAllEnquiries();
    const enquiryTableFormatData = response.data.map((enquiry: any) => {
      return {
        id: enquiry.id,
        name: `${enquiry.first_name} ${enquiry.last_name}`,
        gender: enquiry.gender,
        phone: enquiry.mobile_no,
        followUpDate: enquiry.follow_up_date,
        enqStatus: enquiry.enquiry_status,
        leadType: enquiry.lead_type,
        expectedJoining: enquiry.expected_joining,
        enqDate: enquiry.enquiry_date,
        lastUpdated: enquiry.updated_at,
        remark: enquiry.remark,
        lastCallStatus: enquiry.last_call_status,
        referenceType: enquiry.reference_type,
        reference: enquiry.reference,
        assignedTo: enquiry.assign_to,
        updatedBy: enquiry.updated_by,
      };
    });

    set({
      gymAllEnquiryData: response.data,
      enquiryTableData: enquiryTableFormatData,
    });
  },
}));

export default enquiryStore;
