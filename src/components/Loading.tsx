import "./Loading.css";
const Loading = () => {
  return (
    <div className="fixed w-screen h-screen  bg-white bg-opacity-70">
      <div className="lds-roller absolute left-1/2 top-1/2 -translate-y-1/2">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
