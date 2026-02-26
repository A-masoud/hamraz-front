"use client";

import * as Dialog from "@radix-ui/react-dialog";
import ReservationHeader from "./ReservationHeader";
import ReservationForm from "./ReservationForm";
import { useReservationForm } from "@/hooks/reservationModal/useReservationForm";

export default function ReservationModal({ isOpen, onClose, slot }) {
  const form = useReservationForm(slot, onClose);

  if (!slot) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

        <Dialog.Content
          dir="rtl"
          className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <ReservationHeader slot={slot} />

            <ReservationForm {...form} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}