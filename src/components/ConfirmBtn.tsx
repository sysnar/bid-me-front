function ConfirmBtn(props: any) {
  const { name, btnName, onSubmitAccount } = props;

  return (
    <button
      name={name}
      className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3"
      onClick={onSubmitAccount}
    >
      {btnName}
    </button>
  );
}

export default ConfirmBtn;
