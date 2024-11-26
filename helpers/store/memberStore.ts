import { Member } from "@/app/(main)/gym/members/memberColumns";
import { getAllMembers } from "@/app/actions/gym/memberActions";
import { create } from "zustand";

interface MemberStore {
  gymAllMembersData: any[];
  //   setGymAllMembersData: (value: any[]) => void;

  membersTableData: Member[];

  getGymAllMembersData: () => void;
}

const memberStore = create<MemberStore>((set) => ({
  gymAllMembersData: [],
  //   setGymAllMembersData: (value: any[]) => set({ gymAllMembersData: value }),

  membersTableData: [],

  getGymAllMembersData: async () => {
    const response = await getAllMembers();
    const membersTableFormatData = response.data.map((member: any) => {
      return {
        id: member.id,
        name: `${member.first_name} ${member.last_name}`,
        gender: member.gender,
        regnDate: member.registration_date,
        emailId: member.email,
        dob: member.date_of_birth,
        assignedTo: member.assign_to,
      };
    });
    set({
      gymAllMembersData: response.data,
      membersTableData: membersTableFormatData,
    });
  },
}));
export default memberStore;
