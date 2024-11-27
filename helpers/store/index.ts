import useMain from "./mainStore";
import useAuth from "./authStore";
import useMember from "./memberStore";
import useEnquiry from "./enquiryStore";

const Store = {
  useMain,
  useAuth,
  useMember,
  useEnquiry,
};

export { useMain, useAuth, useMember, useEnquiry };

export default Store;
