import PropTypes from 'prop-types'; 
import { StatsSection, StatsSectionTitle, StatList, Stat, StatLabel, Percentage } from './Statistics.styled';


export const Statistics = ({ title, data }) => {
    return (
        <StatsSection>
            {title && <StatsSectionTitle>{title}</StatsSectionTitle>}
            
            <StatList>
                {data.map(({ id, label, percentage }) =>
                    (<Stat key = {id}>
                        <StatLabel>{label}</StatLabel>
                        <Percentage>{percentage}%</Percentage>
                    </Stat>))
               }
            </StatList>
        </StatsSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}