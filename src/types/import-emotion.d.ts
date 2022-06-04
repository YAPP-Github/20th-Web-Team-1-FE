import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		colors: {
			bt_black: string;
			bt_deepGray: string;
			bt_lightGray: string;
			bt_gray: string;
			bt_green: string;
			bt_lightGreen: string;
			bt_yellow: string;
			bt_white: string;
			bt_lightBlue: string;
		};
		fontSize: {
			f10: string;
			f12: string;
			f13: string;
			f14: string;
			f15: string;
			f16: string;
			f20: string;
		};
		fontWeight: {
			light: number;
			normal: number;
			medium: number;
			semiBold: number;
			bold: number;
		};
		lineHeight: {
			lh10: string;
			lh12: string;
			lh13: string;
			lh14: string;
			lh15: string;
			lh16: string;
			lh20: string;
		};
	}
}
