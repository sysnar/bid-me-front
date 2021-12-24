import { type } from "os";
import { WrapperProps } from "../utils/wrapper.interface";

export function SignWrapper({ children }: WrapperProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SignHeading({ children }: WrapperProps) {
  return (
    <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
      {children}
    </h2>
  );
}

export function SignInput(porps: any) {
  const { label, placeholer, type = "text", id, name } = porps;
  return (
    <div className="relative mb-4">
      <label htmlFor={id} className="leading-7 text-sm text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder={placeholer}
      />
    </div>
  );
}
