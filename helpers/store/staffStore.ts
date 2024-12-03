import { staff } from "@/app/(main)/gym/staff/staffColumns";
import { getAllStaff } from "@/app/actions/gym/staffActions";
import { create } from "zustand";

interface StaffStore {
  gymAllStaffData: any[];

  staffTableData: staff[];
  getGymAllStaffData: () => void;
}

const staffStore = create<StaffStore>((set) => ({
  gymAllStaffData: [],

  staffTableData: [],

  getGymAllStaffData: async () => {
    const response = await getAllStaff();
    const staffTableFormatData = response.data.map((staff: any) => {
      return {
        id: staff.id,

        name: staff.first_name + " " + staff.last_name,
        phone_no: staff.mobile_no,

        gender: staff.gender,
        dob: staff.date_of_birth,
        role: staff.role,
        doj: staff.registration_date,
        email_id: staff.email,
        // login_status: string;
        // created_by: string;
      };
    });

    set({
      gymAllStaffData: response.data,
      staffTableData: staffTableFormatData,
    });
  },
}));

export default staffStore;
