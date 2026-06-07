import { useState } from "react";
import CustomButton from "../../components/common/CustomButton";

const BookingForm = () => {
  const [form, setForm] = useState({ date: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit booking
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow">
      <div>
        <label className="block text-sm font-medium mb-1">Preferred Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full border rounded-lg px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Project Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full border rounded-lg px-3 py-2"
          rows={4}
          required
        />
      </div>
      <CustomButton type="submit">Submit Booking Request</CustomButton>
    </form>
  );
};

export default BookingForm;
