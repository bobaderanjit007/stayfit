import useMain from "./mainStore";
import useAuth from "./authStore";
import useMember from "./memberStore";
import useEnquiry from "./enquiryStore";
import useStaff from "./staffStore";

const Store = {
  useMain,
  useAuth,
  useMember,
  useEnquiry,
  useStaff,
};

export { useMain, useAuth, useMember, useEnquiry, useStaff };

export default Store;
