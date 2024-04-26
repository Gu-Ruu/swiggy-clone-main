import { useEffect,useState } from "react";

const useOnlineOfflineStatus = () => {
  //   const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Function to handle the connection status change event
  //   function handleConnectionChange() {
  //     setIsOnline(navigator.onLine);
  //   }

  // Attach the event listener for the network status changes
  //   useEffect(() => {
  //     window.addEventListener("offline", handleConnectionChange);
  //     window.addEventListener("online", handleConnectionChange);

  // Specify how to clean up when this effect is run (unmounted)
  // return () => {
  //   window.removeEventListener("offline", handleConnectionChange);
  //   window.removeEventListener("online", handleConnectionChange);
  // };
  //check If Online
  // useEffect(()=>{
  //     const onLineHandler = (event) => event.type === 'online' && console.log('You are now online!');
  //     window.addEventListener("offline", onLineHandler);
  //     window.addEventListener("online", onLineHandler);

  //     return () => {
  //         window.removeEventListener("offline", onLineHandler);
  //         window.removeEventListener("online", onLineHandler);
  //     };
  //   }, []);
  //   return isOnline;

  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => setIsOnline(false), false);
    window.addEventListener("online", () => setIsOnline(true), false);
  }, []);
  return isOnline;
};

export default useOnlineOfflineStatus;
