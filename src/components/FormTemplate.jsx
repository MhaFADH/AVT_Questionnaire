import clsx from "clsx";

const FormTemplate = ({ title, blurAnchor, ...otherProps }) => {
  return (
    <div
      className={clsx(
        "flex flex-col h-screen w-full text-center justify-center",
        blurAnchor ? " blur-sm" : "blur-none"
      )}
    >
      <div className=" flex flex-col bg-slate-100 p-7 rounded-2xl mx-10 shadow-2xl">
        <h1 className=" text-xl mb-9">{title}</h1>
        {otherProps.children}
      </div>
    </div>
  );
};

export default FormTemplate;
