type ButtonPropsType = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    // НУЖНО ДОПИСАТЬ
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.children}
    </button>
  );
};
