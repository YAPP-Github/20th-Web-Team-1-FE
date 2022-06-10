import React, { useState } from 'react';
import * as S from './MySetting.styled';

type Props = {
	description: string;
	initialState: boolean;
	tooltip?: string;
	onActivate: () => void;
	onDeactivate: () => void;
};

const MySetting = ({ description, initialState, tooltip, onActivate, onDeactivate }: Props) => {
	const [isActivated, setIsActivated] = useState(initialState);

	const handleClickONButton = () => {
		setIsActivated(true);

		if (!isActivated) {
			onActivate();
		}
	};

	const handleClickOFFButton = () => {
		setIsActivated(false);

		if (isActivated) {
			onDeactivate();
		}
	};

	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const handleToggleTooltipButton = () => {
		setIsTooltipVisible((prev) => !prev);
	};

	return (
		<S.MySettingWrapper>
			<S.SettingDescription>
				<p>{description}</p>
				{tooltip && (
					<S.SettingDetails>
						<button type="button" onClick={handleToggleTooltipButton}>
							?
						</button>
						{isTooltipVisible && <S.SettingTooltip>{tooltip}</S.SettingTooltip>}
					</S.SettingDetails>
				)}
			</S.SettingDescription>

			<div>
				<S.SettingButton type="button" selected={!isActivated} onClick={handleClickOFFButton}>
					OFF
				</S.SettingButton>
				<S.SettingButton type="button" selected={isActivated} onClick={handleClickONButton}>
					ON
				</S.SettingButton>
			</div>
		</S.MySettingWrapper>
	);
};

export default MySetting;
