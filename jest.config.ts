module.exports = {
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	testRegex: '/tests/.*\\.(ts|tsx)$',
	transformIgnorePatterns: ['/node_modules/'],
	clearMocks: true,
	moduleNameMapper: {
		'\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/__mocks__/fileMock.ts',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'@/(.*)': '<rootDir>/src/$1',
	},
};
