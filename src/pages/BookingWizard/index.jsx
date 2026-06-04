import BookingForm from "./BookingForm";

const BookingWizardPage = () => {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book an Artisan</h1>
      <BookingForm />
    </main>
  );
};

export default BookingWizardPage;
