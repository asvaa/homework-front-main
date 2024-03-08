import React, { ChangeEvent } from "react";

type InputPropsType = {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: React.FC<InputPropsType> = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.onChange(event);
	};

	return (
		<input id={'hw04-input'} type="text" value={props.value} onChange={onChangeHandler} />
	);
};
