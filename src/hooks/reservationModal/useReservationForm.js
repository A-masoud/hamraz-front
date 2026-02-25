import { useForm } from "react-hook-form";

export function useReservationForm(slot, onClose) {
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

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    handleClose,
  };
}