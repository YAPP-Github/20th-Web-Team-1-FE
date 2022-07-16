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

export const FRUIT_RENDER_POSITION = [
	{
		id: 1,
		position: { top: 9, left: 32 },
	},
	{
		id: 2,
		position: { top: 18, left: 62 },
	},
	{
		id: 3,
		position: { top: 37, left: 12 },
	},
	{
		id: 4,
		position: { top: 41, left: 42 },
	},
	{
		id: 5,
		position: { top: 46, left: 72 },
	},
	{
		id: 6,
		position: { top: 64, left: 22 },
	},
	{
		id: 7,
		position: { top: 71, left: 52 },
	},
];

export const TREE_SIZE_MAX = 4;

export const TREE_NAME_LENGTH_MAX = 10;
export const TREE_NAME_LENGTH_MIN = 1;
