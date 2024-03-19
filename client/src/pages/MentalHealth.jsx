import PHQ9Survey from "../components/PHQ9Survey";
const MentalHealth = () => {
  return (
    <div className="min-h-screen">
      <p className="text-4xl font-bold text-center mt-4">Mental Health</p>

      <div>
        <PHQ9Survey />
      </div>
    </div>
  );
};

export default MentalHealth;
