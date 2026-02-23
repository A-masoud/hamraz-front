"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

export default function ReservationModal({
  isOpen,
  onClose,
  slot,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("اطلاعات رزرو:", {
        ...data,
        timeslot: slot.id,
      });

      // اینجا بعداً API رزرو رو صدا میزنیم

      reset();
      onClose();
      alert("رزرو با موفقیت ثبت شد ✅");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog.Root open={isOpen}  onOpenChange={onClose}>
      <Dialog.Portal>

        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0  bg-black/40 backdrop-blur-sm" />

        {/* Content */}
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md 
                                   -translate-x-1/2 -translate-y-1/2 
                                   bg-black p-6 rounded-2xl shadow-xl">

          <Dialog.Title className="text-xl font-bold mb-4 text-center">
            رزرو تایم {slot?.start_time} - {slot?.end_time}
          </Dialog.Title>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="نام کامل"
                className="w-full border p-2 rounded-lg"
                {...register("full_name", {
                  required: "نام الزامی است",
                })}
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="شماره تماس"
                className="w-full border p-2 rounded-lg"
                {...register("phone", {
                  required: "شماره تماس الزامی است",
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="توضیحات"
                className="w-full border p-2 rounded-lg"
                {...register("description")}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              {isSubmitting ? "در حال ثبت..." : "ثبت رزرو"}
            </button>

            <Dialog.Close asChild>
              <button
                type="button"
                className="w-full mt-2 text-gray-500"
              >
                انصراف
              </button>
            </Dialog.Close>
          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
