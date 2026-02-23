export default function DaySlots({ slots, loading, onSlotClick }) {
  if (loading) return <p>در حال دریافت تایم‌ها...</p>;
  if (!slots.length) return <p className="text-gray-800">تایمی وجود ندارد</p>;

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {slots.map((slot) => (
        <div
          key={slot.id}
          onClick={() => {
            if (slot.status !== "reserved") {
              onSlotClick(slot);
            }
          }}
          className={`${
            slot.status === "reserved"
              ? "bg-red-700 cursor-not-allowed"
              : "bg-green-700 cursor-pointer hover:bg-green-600"
          } text-white rounded-lg p-3 text-center transition`}
        >
          {slot.start_time} - {slot.end_time}
        </div>
      ))}
    </div>
  );
}
