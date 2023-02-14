import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="text-[#ECECF1] flex justify-center items-center min-h-[100vh] flex-col px-2">
      {/* ChatGPT Name */}
      <h1 className="font-[600] text-5xl my-20">ChatGPT</h1>

      {/* Grid Section */}
      <div className="flex flex-col lg:flex-row items-center md:items-start justify-around w-full mb-20 ">
        <div>
          <div className="flex flex-col items-center justify-center my-5 ">
            <SunIcon className="w-8 h-8" />
            <p>Example</p>
          </div>
          <div className="space-y-2 md:p-5">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center my-5">
            <BoltIcon className="w-8 h-8" />
            <p>Capabilities</p>
          </div>
          <div className="space-y-2 md:p-5">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center my-5">
            <ExclamationTriangleIcon className="w-8 h-8" />
            <p>Limitations</p>
          </div>
          <div className="space-y-2 md:p-5">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
