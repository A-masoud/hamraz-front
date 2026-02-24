"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function ReservationModal({ isOpen, onClose, slot }) {
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

      reset();
      onClose();
      alert("رزرو با موفقیت ثبت شد ✅");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!slot) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className="
            fixed inset-0 bg-black/40 backdrop-blur-sm
            data-[state=open]:animate-[overlayShow_200ms_ease-out]
            data-[state=closed]:animate-[overlayHide_150ms_ease-in]
          "
        />

        {/* Content */}
        <Dialog.Content
          dir="rtl"
          className="
            fixed left-1/2 top-1/2 w-full max-w-md
            -translate-x-1/2 -translate-y-1/2
            data-[state=open]:animate-[contentShow_300ms_cubic-bezier(0.16,1,0.3,1)]
            data-[state=closed]:animate-[contentHide_200ms_ease-in]
          "
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Header */}
            <div className="relative bg-gradient-to-r from-pink-500 to-blue-500 p-6 text-white">
              
              <Dialog.Close asChild>
                <button className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>

              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <Dialog.Title className="text-xl font-bold">
                    رزرو نوبت مشاوره
                  </Dialog.Title>
                  <p className="text-pink-100 text-sm">
                    لطفاً اطلاعات خود را وارد کنید
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm bg-white/10 rounded-xl p-3">
                <Clock className="w-4 h-4 text-pink-200" />
                <span>تایم انتخاب شده:</span>
                <span className="font-bold bg-white/20 px-3 py-1 rounded-lg">
                  {slot.start_time} - {slot.end_time}
                </span>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 space-y-5"
            >
              {/* نام */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User className="w-4 h-4 text-pink-500" />
                  نام و نام خانوادگی
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="مثال: علی احمدی"
                    className={`
                      w-full px-4 py-3 pr-11 rounded-xl border-2 transition outline-none
                      ${
                        errors.full_name
                          ? "border-red-300 bg-red-50 focus:border-red-500"
                          : "border-gray-200 focus:border-pink-400 focus:bg-pink-50/30"
                      }
                    `}
                    {...register("full_name", {
                      required: "نام الزامی است",
                      minLength: {
                        value: 3,
                        message: "حداقل ۳ کاراکتر",
                      },
                    })}
                  />
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                {errors.full_name && (
                  <p className="text-red-500 text-sm">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

              {/* شماره تماس */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4 text-blue-500" />
                  شماره تماس
                </label>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    className={`
                      w-full px-4 py-3 pr-11 rounded-xl border-2 transition outline-none text-left
                      ${
                        errors.phone
                          ? "border-red-300 bg-red-50 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-400 focus:bg-blue-50/30"
                      }
                    `}
                    {...register("phone", {
                      required: "شماره تماس الزامی است",
                      pattern: {
                        value: /^[0-9۰-۹]{11}$/,
                        message: "شماره معتبر نیست",
                      },
                    })}
                  />
                  <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* توضیحات */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <FileText className="w-4 h-4 text-purple-500" />
                  توضیحات
                </label>

                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 focus:bg-purple-50/30 outline-none resize-none"
                  {...register("description")}
                />
              </div>

              {/* دکمه‌ها */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition flex items-center justify-center gap-2
                    ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-[1.02]"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      در حال ثبت...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      درخواست رزرو
                    </>
                  )}
                </button>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full py-3.5 rounded-xl font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
                  >
                    انصراف
                  </button>
                </Dialog.Close>
              </div>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}