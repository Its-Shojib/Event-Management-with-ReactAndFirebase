import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Services = () => {
  let { id } = useParams();
  let [event, setEvent] = useState({});
  let { title, description, price, photo, day } = event;
  let data = useLoaderData();
  useEffect(() => {
    let findedItem = data?.find(item => item.id == id);
    setEvent(findedItem)
  }, [id, data])


  return (
    <div className="card">
      <figure className="px-10 pt-10">
        <img src={photo} alt="event item" className="rounded-xl h-[600px] w-4/6" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p>Details: {description}</p>
        <p>Price: {price}</p>
        <p>Day: {day}</p>
      </div>
      <h3>Hello</h3>
    </div>
  );
};

export default Services;