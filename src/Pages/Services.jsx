import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Services = () => {
  let { id } = useParams();
  let [event, setEvent] = useState({});
  let { title, description2, price, photo, day } = event;
  let data = useLoaderData();
  useEffect(() => {
    let findedItem = data?.find(item => item.id == id);
    setEvent(findedItem)
  }, [id, data])

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row bg-gray-300">
          <div className="flex-1">
            <img src={photo} className="w-full h-[500px] rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold">{title}</h1>

            <p className="text-lg py-3">{description2}</p>

            <p className="text-lg"><span className="text-2xl font-bold">Price:</span> {price}</p>
            <p className="text-lg"><span className="text-2xl font-bold">Day:</span> {day}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;