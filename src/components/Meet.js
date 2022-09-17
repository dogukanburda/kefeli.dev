import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from 'react'

function SetMeeting() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}}});
    })();
  }, [])
  return <Cal calLink="dogukan/quick-chat" style={{width:"125%",height:"100%",overflow:"hidden"}} />;
};

export default SetMeeting
