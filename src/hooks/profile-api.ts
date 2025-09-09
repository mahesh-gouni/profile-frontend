import { useMutation } from "@tanstack/react-query";
import { User } from "../types";
import axios from "axios";

export const useStoreContactDetails = () => {
  return useMutation<User, Error, User>({
    mutationFn: async (payload: User) => {
      const { data } = await axios.post<User>(
        "https://profile-backend-1-6wi0.onrender.com/api/profile/sendEmail",
        payload
      );
      return data;
    },
  });
};