export const ShimmerButton = (props: {
  content: string;
  ClassName: string;
}) => {
  return (
    <button
      className={
        props.ClassName +
        "inline-flex  animate-shimmer items-center justify-center rounded-md border border-BG bg-[linear-gradient(110deg,#E2E7E9,45%,#fff,55%,#E2E7E9)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      }
    >
      {props.content}
    </button>
  );
};
