import React from "react";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-primary-default">
      <div className="flex items-center flex-col bg-background-default border border-solid py-4 px-12">
        <h1 className="text-base">Sign in</h1>
        <h2 className="text-sm font-light">to continue to LamaTube</h2>
        <input
          className="border border-solid p-2.5 rounded bg-transparent w-full text-primary-default"
          placeholder="username"
        />
        <input
          className="border border-solid p-2.5 rounded bg-transparent w-full text-primary-default"
          type="password"
          placeholder="password"
        />
        <button className="rounded border-none px-2.5 p-4 font-normal cursor-pointer bg-background-default text-primary-default">
          Sign in
        </button>
        <h1 className="text-2xl">or</h1>
        <input
          className="border border-solid p-2.5 rounded bg-transparent w-full text-primary-default"
          placeholder="username"
        />
        <input
          className="border border-solid p-2.5 rounded bg-transparent w-full text-primary-default"
          placeholder="email"
        />
        <input
          className="border border-solid p-2.5 rounded bg-transparent w-full text-primary-default"
          type="password"
          placeholder="password"
        />
        <button className="rounded border-none px-2.5 p-4 font-normal cursor-pointer bg-background-default text-primary-default">
          Sign up
        </button>
      </div>
      <div className="flex mt-2.5 text-xs text-primary-default">
        English(USA)
        <div className="ml-12">
          <span className="ml-8">Help</span>
          <span className="ml-8">Privacy</span>
          <span className="ml-8">Terms</span>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
