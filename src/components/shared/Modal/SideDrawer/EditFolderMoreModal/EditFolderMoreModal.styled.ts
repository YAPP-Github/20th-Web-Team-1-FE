import styled from '@emotion/styled';
import { ModalContainer } from '../../ModalFrame.styled';
import { StyledProps } from './EditFolderMoreModal.type';

export const MenuMoreModalContainer = styled(ModalContainer)<StyledProps>`
	top: ${({ position }) => position.top + 46 + 'px'};
	left: ${({ position }) => position.left - 47 + 'px'};
`;

export const MenuMoreModalWrapper = styled.div`
	& > ul {
		max-width: 100px;
		padding: 12px 0;
		border-radius: 5px;
		background-color: ${({ theme }) => theme.colors.bt_primary[150]};
	}

	& > ul > li > button,
	a {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 5px;
		margin: 0 10px;
		border: 0;
		border-radius: 5px;
		background-color: transparent;
		font-size: ${({ theme }) => theme.fontSize.f12};
		font-weight: ${({ theme }) => theme.fontWeight.normal};
		line-height: ${({ theme }) => theme.lineHeight.lh12};
		letter-spacing: -0.02em;
		color: ${({ theme }) => theme.colors.bt_grey[120]};

		&:hover {
			background-color: ${({ theme }) => theme.colors.bt_white};
		}
	}
`;
