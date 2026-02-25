"use client";

import { useState } from "react";

export function useReservation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const openReservation = (slot) => {
    setSelectedSlot(slot);
    setIsOpen(true);
  };

  const closeReservation = () => {
    setIsOpen(false);
    setSelectedSlot(null);
  };

  return {
    isOpen,
    selectedSlot,
    openReservation,
    closeReservation,
  };
}
