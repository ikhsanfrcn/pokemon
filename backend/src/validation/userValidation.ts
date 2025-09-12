import * as yup from "yup";

export const updateUserSchema = yup.object({
  name: yup.string().optional(),
});
