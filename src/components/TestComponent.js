import React from 'react';
import atomize from "@quarkly/atomize";
import { Provider, atom } from 'jotai';
export const textAtom = atom('hello');
export const textLenAtom = atom(get => get(textAtom).length);
export const uppercaseAtom = atom(get => get(textAtom).toUpperCase());

const TestComponent = ({
	children,
	...props
}) => <div {...props}>
	  
	<Provider>
		    
		{children}
		  
	</Provider>
</div>;

export default atomize(TestComponent)({
	name: "TestComponent",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "TestComponent — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});