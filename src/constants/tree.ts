import AppleIcon from '@/assets/images/trees/apple.svg';
import StrawberryIcon from '@/assets/images/trees/strawberry.svg';
import OrangeIcon from '@/assets/images/trees/orange.svg';
import LemonIcon from '@/assets/images/trees/lemon.svg';
import BlueberryIcon from '@/assets/images/trees/blueberry.svg';
import GrapeIcon from '@/assets/images/trees/grape.svg';

export const FRUITS = [
	{
		id: 1,
		name: '사과',
		value: 'APPLE',
		imgSrc: AppleIcon,
	},
	{
		id: 2,
		name: '딸기',
		value: 'STRAWBERRY',
		imgSrc: StrawberryIcon,
	},
	{
		id: 3,
		name: '오렌지',
		value: 'ORANGE',
		imgSrc: OrangeIcon,
	},
	{
		id: 4,
		name: '레몬',
		value: 'LEMON',
		imgSrc: LemonIcon,
	},
	{
		id: 5,
		name: '블루베리',
		value: 'BLUEBERRY',
		imgSrc: BlueberryIcon,
	},
	{
		id: 6,
		name: '포도',
		value: 'GRAPE',
		imgSrc: GrapeIcon,
	},
];

export const FRUIT_RENDER_POSITION = {
	TREE_EDIT: [
		{ top: 10, left: 33 },
		{ top: 19, left: 63 },
		{ top: 38, left: 13 },
		{ top: 42, left: 43 },
		{ top: 47, left: 73 },
		{ top: 68, left: 23 },
		{ top: 72, left: 53 },
	],
	TREE_FOREST: [
		{ top: 10, left: 33 },
		{ top: 19, left: 63 },
		{ top: 38, left: 13 },
		{ top: 42, left: 43 },
		{ top: 47, left: 73 },
		{ top: 68, left: 23 },
		{ top: 72, left: 53 },
	],
};
