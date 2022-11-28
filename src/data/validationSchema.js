import * as Yup from "yup";

export const validationShema = Yup.object({
  name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Cannot contain any special symbols or numbers")
    .required("Name is required")
    .max(30, "cannot be more than 30 characters"),
  email: Yup.string()
    .email("Has to be a valid email")
    .required("Email is required")
    .max(25, "Cannot contain more than 25 characters"),
  message: Yup.string().required("Required"),
});
