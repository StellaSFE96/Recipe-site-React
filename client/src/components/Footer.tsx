import styled from 'styled-components';

const StyledFooter = styled.div`
	background-color: #719cc1;
	color: azure;
	/* color: #a372a0; */
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	height: 4rem;

	& p {
		margin: 0;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>DESSERTS & COCKTAILS</p>
			<p>All Rights Reserved. &reg;</p>
		</StyledFooter>
	);
};

export default Footer;
