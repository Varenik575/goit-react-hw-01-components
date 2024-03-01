import styled from "@emotion/styled";

// const setBgColor = (key) => {
//     switch (key) {
//         case 'id-1':
//             return 'var(--color-blue)';
//         case 'id-2':
//             return 'var(--color-rose)';
//         case 'id-3':
//             return 'var(--color-teal)';
//         case 'id-4':
//             return 'var(--color-beaver)';
//         default:
//             return 'var(--color-snow)';
//     };
// }

export const StatsSection = styled.section`
  grid-column: 1 / 3;
    grid-row: 2;

padding-top: 25px;
padding-left: 25px;
padding-right: 25px;
padding-bottom: 25px;
background-color: var(--color-naples-yellow);
width: fit-content;
height: fit-content;
text-align: center;
border: 5px dashed var(--color-blue);
border-radius: 10px;
`;

export const StatsSectionTitle = styled.h2`
font-size: 36px;
font-weight: 400;`;

export const StatList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
margin-top: 25px;
`;

export const Stat = styled.li`
width: 100px;
height: 100px;
padding-top: 10px;
border: 5px solid var(--color-blue);
border-radius: 50%;
background-color: var(--color-snow);

:hover, :focus {
    border-color: var(--color-blue-dark);
    background-color: var(--color-beaver-dark);
    color: var(--color-snow);
}
`;

export const StatLabel = styled.span``;

export const Percentage = styled.span`
display: block;
font-size: 36px;`;

