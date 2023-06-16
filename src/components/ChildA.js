import React from 'react';
import atomize from "@quarkly/atomize";
import { useAtom } from 'jotai';
import { uppercaseAtom } from './TestComponent';

const ChildA = props => {
	const [uppercase] = useAtom(uppercaseAtom);
	return <div {...props}>
		Say hello ChildA: 
		{uppercase}
	</div>;
};

export default atomize(ChildA)({
	name: "ChildA",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ChildA — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});