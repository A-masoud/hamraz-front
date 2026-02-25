import { z } from "zod";

export const reservationSchema = z.object({
  full_name: z
    .string()
    .min(3, { message: "حداقل ۳ کاراکتر" })
    .nonempty({ message: "نام الزامی است" }),
  phone: z
    .string()
    .regex(/^[0-9۰-۹]{11}$/, { message: "شماره معتبر نیست" }),
  description: z.string().optional(),
});