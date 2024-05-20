import greyStar from "";
import redStar from "";

export default function Rating({ rate }) {
  let arrayStars = [];
  for (let i = 1; i <= 5; i++) {
    arrayStars.push(i <= rate ? redStar : greyStar);
  }
  return (
    <div>
      {arrayStars.map((star, index) => {
        return <img key={`star-${index}`} src={star} alt="star" />;
      })}
    </div>
  );
}
