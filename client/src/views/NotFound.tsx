import styled from 'styled-components';

export const NotFound = () => {
	return (
		<StyledBg>
			<h1>Results Not Found...</h1>
		</StyledBg>
	);
};

const StyledBg = styled.div`
	color: #6baac5;
	height: 70vh;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;
