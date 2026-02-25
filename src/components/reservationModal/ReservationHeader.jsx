
import * as Dialog from "@radix-ui/react-dialog";
import { Calendar, Clock, X } from "lucide-react";

export default function ReservationHeader({ slot }) {
  return (
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
  );
}