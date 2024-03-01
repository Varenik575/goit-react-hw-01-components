import PropTypes from 'prop-types';
import { TblBody, TblCell, TblHead, TblHeader, TblRow, TransactionTbl } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTbl>
  <TblHead>
    <TblRow>
      <TblHeader>Type</TblHeader>
      <TblHeader>Amount</TblHeader>
      <TblHeader>Currency</TblHeader>
    </TblRow>
  </TblHead>
            <TblBody>
          {items.map(({ id, type, amount, currency }) => (
            <TblRow key={id}>
              <TblCell>{type}</TblCell>
              <TblCell>{amount}</TblCell>
              <TblCell>{currency}</TblCell>
                </TblRow>
          ))}      
  </TblBody>
</TransactionTbl>
    )
}