import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CloudImageProps } from './Clouds.type';

const playCloud = keyframes`
    0% {
        transform: translateX(0);    
    }
    50% {
        transform: translateX(-20px);
    }
    100% {
        transform: translateX(0);
    }
`;
export const CloudImage = styled.img<CloudImageProps>`
	top: ${({ top }) => top};
	left: ${({ left }) => left};
	position: absolute;
	animation: ${playCloud} 7s linear infinite alternate;
`;
