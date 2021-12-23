function LoginBtn(props: any) {
  const { btnName } = props;
  return (
    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3">
      {btnName}
    </button>
  );
}

export default LoginBtn;
