import React from 'react';
import atomize from "@quarkly/atomize";
import { useAtom } from "jotai";
import { textAtom } from './TestComponent';

const Child = ({
	children,
	...props
}) => {
	const [text, setText] = useAtom(textAtom);
	return <input value={text} onChange={e => setText(e.target.value)} {...props} />;
};

export default atomize(Child)({
	name: "Child",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Child — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});