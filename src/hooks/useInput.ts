import { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes = [string, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string>>];

const useInput = (initialValue: string): ReturnTypes => {
	const [value, setValue] = useState(initialValue);
	const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	return [value, handler, setValue];
};

export default useInput;
