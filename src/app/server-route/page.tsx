import { ImageSlider } from "@/components/image-slider";
import { serverSideFunction } from "../utils/server-utils";
// import { clientSideFunction } from "../utils/client-utils";

const ServerRoutePage = () => {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction(); // will throw an error
  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider/>
    </>
  );
}

export default ServerRoutePage;