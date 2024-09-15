import './style.css';
import VideoTimeDuration from'./duration';
import { FaCircleCheck } from "react-icons/fa6";
import { abbreviateNumber } from 'js-abbreviation-number';

const VideoCard = ({ item }) => {
  const thumbnailUrl = item?.video?.thumbnails[0]?.url;  // Access the first thumbnail URL
  const title = item?.video?.title;

  return (
    <>
      {item.type === "video" && (
        <div className="videoThumbnail cursor">
          <div className="imgWrapper position-relative">
            {thumbnailUrl ? (
              <img src={thumbnailUrl} className="thumImage" alt={title} />
            ) : (
              <p>Image not available</p>  // Fallback text
            )}
           <VideoTimeDuration time={item?.video?.lengthSeconds}/>
          </div>

          <div className="info">
            <div className="d-flex ">
              <div>
                <span className="rounded-circle authorImg">
                  <img
                    src={item?.video?.author?.avatar[0]?.url} width={60} height={60}alt="author image"/>
                </span>
              </div>

              <div className='px-3'>
                <h5 className="text-white">
                  {item?.video?.title.length > 50? item?.video?.title.substr(0, 50) + '...': item?.video?.title}
                </h5>
                <span className="channelName d-flex align-items-center">{item?.video?.author?.title}&nbsp;{item?.video?.author?.badges[0]?.type==="VERIFIED_CHANNEL"&&<FaCircleCheck />}
                </span>

                {
                  item?.video?.stats?.views!==undefined && item?.video?.stats?.views!==null &&
                  <span className="channelName d-flex align-items-center">
                  {`${abbreviateNumber(parseInt(item?.video?.stats?.views),2)}`}
                  &nbsp;{item?.video?.publishedTimeText!==""&& item?.video?.publishedTimeText!==undefined &&item?.video?.publishedTimeText}
                </span>
                }

{
                  item?.video?.stats?.viewers!==undefined && item?.video?.stats?.viewers!==null &&
                  <span className="channelName d-flex align-items-center">
                  {`${abbreviateNumber(parseInt(item?.video?.stats?.viewers),2)}`}
                  &nbsp;{item?.video?.publishedTimeText!==""&& item?.video?.publishedTimeText!==undefined &&item?.video?.publishedTimeText}
                </span>
                }
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
