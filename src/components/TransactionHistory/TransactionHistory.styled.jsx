import styled from "@emotion/styled";

export const TransactionTbl = styled.table`
 grid-column: 3 ;
    grid-row: 1 / 3;

background-color: var(--color-naples-yellow);
width: 500px;
border: 5px dashed var(--color-blue);
border-radius: 10px;
`;

export const TblHead = styled.thead`
font-size: 24px;
color: var(--color-blue);
background-color: var(--color-snow);
`;

export const TblRow = styled.tr`
border-radius: 10px;
`;

export const TblHeader = styled.th`
padding-top: 8px;
padding-bottom: 8px;
border-radius: 10px;`;

export const TblBody = styled.tbody`
text-align: center;
font-size: 20px;
border-radius: 10px;
`;

export const TblCell = styled.td`
padding-top: 4px;
padding-bottom: 4px;
background-color: var(--color-naples-yellow);
border-radius: 10px;
`;
