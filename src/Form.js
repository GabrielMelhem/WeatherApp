import react from "react";

export const Form = ({ getWeather }) => {
  return (
    <form onSubmit={getWeather}>
      <input type="text" placeholder="City..." name="city" />
      <input type="text" placeholder="Country..." name="country" />
      <button>Get Weather</button>
    </form>
  );
};
