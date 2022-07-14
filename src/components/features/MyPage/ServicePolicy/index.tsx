import React from 'react';
import * as S from './ServicePolicy.styled';

const ServicePolicy = () => {
	return (
		<S.ServicePolicyWrapper>
			<p>Copyright © Betree All rights reserved.</p>
			<div>
				<a
					href="https://resonant-somersault-b26.notion.site/Betree-8724caa8b0b44bce8335801297cbe7a7"
					target="_blank"
					rel="noreferrer"
				>
					이용약관
				</a>
				<a
					href="https://resonant-somersault-b26.notion.site/Betree-27342ef442b64c18b638daa6a4c2a835"
					target="_blank"
					rel="noreferrer"
				>
					개인정보취급방침
				</a>
			</div>
		</S.ServicePolicyWrapper>
	);
};

export default ServicePolicy;
