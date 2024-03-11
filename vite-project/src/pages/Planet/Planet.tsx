import data from "../../data.json";

interface Props {
  planet: string;
}

const Planet = ({ planet }: Props) => {
  const planetData = data.destinations.find(
    (destination) => destination.name === planet
  );

  console.log(planetData);
  return (
    <div>
      <img src={planetData?.images.png} />
      <div>
        <h1>{planetData?.name}</h1>
        <p>{planetData?.description}</p>
      </div>
    </div>
  );
};

export default Planet;
