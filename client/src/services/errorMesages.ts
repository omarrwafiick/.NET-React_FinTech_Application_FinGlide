export interface ErrorMessage {
  label: string;
  message: string;
}

export const ErrorMessages = (): ErrorMessage[] => [
  { 
    label: "userName", 
    message: "Username must be 3–30 characters.",
  },
  { 
    label: "email",
    message: "Enter a valid email.",
  },
  {
    label: "password",
    message: "Use 12+ chars, uppercase, number & symbol.",
  },
  { 
    label: "commentTitle",
    message: "Title must be 3–280 characters.",
  },
  {
    label: "commentContent",
    message: "Content must be 3–2080 characters.",
  },
  {
    label: "confirmPassword",
    message: "Passwords don't match.",
  },
];
