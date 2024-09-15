"use client";
import { Context } from "@/AppContent/context";
import { useContext, useEffect, useState } from "react";
import VideoCard from "./components/VideoCard/page";

export default function Home() {
  const [data, setData] = useState([]);
  const context = useContext(Context);

  useEffect(() => {
    setData(context.data);
    console.log(context.data);
  }, [context.data]);

  return (
    <div className={`content videoListingPage${context.toggle === true ? ' expend' : ''} d-flex`}>
      {data.length !== 0 && data?.map((item, index) => (
        <VideoCard key={index} item={item} />
      ))}
    </div>
  );
}
