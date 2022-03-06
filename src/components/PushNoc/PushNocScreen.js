import React, {useState, useEffect} from 'react';

const PushNocScreen = (props) => {

    const {mess} =props;
    const [alert, setAlert] = useState(true);
    useEffect(() => {
        // when the component is mounted, the alert is displayed for 3 seconds
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      }, []);     
        
  return <div class="PushNocScreen">
   {(alert)&&<div class="alert alert-success SN-alert-success" role="alert">
        {mess}
  </div>}
  </div>;
};

export default PushNocScreen;
