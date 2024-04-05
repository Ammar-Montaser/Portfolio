function ToolStackIcons(props: { className: string }) {
  return (
    <div className="flex flex-col justify-center items-center xl:size-[5rem]  size-[3rem]  dark:bg-[#282828] bg-slate-200 hover:shadow-lg rounded-xl">
      <span className={props.className}></span>
    </div>
  );
}

export default ToolStackIcons;
