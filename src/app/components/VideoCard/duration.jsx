import moment from "moment";
import { useEffect, useState } from "react";

const VideoTimeDuration=({time})=>{

    const[timeDuration,setTimeDuration]=useState();

    useEffect(()=>{
        if(time!==null){
            var duration=moment.utc(time*1000).format("HH:mm:ss");
            setTimeDuration(duration);
        }
    },[]);

    return(
        <span className="duration">{timeDuration}</span>
)
}
export default VideoTimeDuration;