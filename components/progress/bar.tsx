export const Bar = ({ animationDuration, progress }: any) => {
  return (
    <div
      className="bg-pink-800 rounded-3xl h-1 w-full top-0 left-0 fixed z-50"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    ></div>
  );
};
