const ReviewSection = () => {
  const reviews = [
    { id: 1, author: "Jane D.", rating: 5, text: "Exceptional work! Highly recommend." },
    { id: 2, author: "John M.", rating: 4, text: "Great quality and timely delivery." },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{r.author}</span>
              <span className="text-yellow-500">{'★'.repeat(r.rating)}</span>
            </div>
            <p className="text-gray-700 mt-1">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
