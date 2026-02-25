"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reservationSchema } from "@/schemas/reservationSchema";
import {
  User,
  Phone,
  FileText,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function ReservationForm({ onSubmit, handleClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(reservationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
      
      {/* نام */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <User className="w-4 h-4 text-pink-500" />
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          placeholder="مثال: علی احمدی"
          className={`w-full px-4 py-3 rounded-xl border-2 transition outline-none
            ${
              errors.full_name
                ? "border-red-300 bg-red-50 focus:border-red-500"
                : "border-gray-200 focus:border-pink-400 focus:bg-pink-50/30"
            }`}
          {...register("full_name")}
        />
        {errors.full_name && (
          <p className="text-red-500 text-sm">{errors.full_name.message}</p>
        )}
      </div>

      {/* شماره تماس */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Phone className="w-4 h-4 text-blue-500" />
          شماره تماس
        </label>
        <input
          type="tel"
          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
          className={`w-full px-4 py-3 rounded-xl border-2 transition outline-none text-left
            ${
              errors.phone
                ? "border-red-300 bg-red-50 focus:border-red-500"
                : "border-gray-200 focus:border-blue-400 focus:bg-blue-50/30"
            }`}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
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
          className={`w-full py-3.5 rounded-xl font-bold text-white shadow-lg transition flex items-center justify-center gap-2
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-[1.02]"
            }`}
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

        <button
          type="button"
          onClick={handleClose}
          className="w-full py-3.5 rounded-xl font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}