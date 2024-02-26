import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
   const {roomId} = useParams()
   const meeting = async(element) => {
       const appID = 1215307997;
       const serverSecret = "d885bd28a30c9ef3cdc7974f56f80c58";
       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString() , "Welcome😊" )
       const zp = ZegoUIKitPrebuilt.create(kitToken);
       zp.joinRoom({
        container: element,
        
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


   }
    return (
    <div ref={meeting} style={{ width: '100vw', height: '100vh'}}>

    </div>
  )
}

export default Room