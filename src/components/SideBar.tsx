import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-full">
      SideBar
      <div>
        <div>
          {/* NewChat */}
          <NewChat/>

          <div>{/* ModelSelection */}</div>

          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
