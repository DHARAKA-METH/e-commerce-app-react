import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="relative top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-[101]">
      <div className={style.loading_dots}></div>
    </div>
  );
};

export default Loading;
