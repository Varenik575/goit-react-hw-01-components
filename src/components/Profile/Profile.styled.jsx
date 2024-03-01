import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
 grid-column: 1 ;
    grid-row: 1 ;

width: 300px;
height: 500px;
padding-top: 25px;
padding-bottom: 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--color-naples-yellow);
border: 5px dashed var(--color-blue);
border-radius: 10px;
`;

export const ProfileDesc = styled.div`
width: 250px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ProfileImgContainer = styled.div`
width: 250px;
height:250px;
padding-top: 25px;
padding-left: 12.5px;
padding-right: 12.5px;
background-color:  var(--color-snow); 
border: 5px solid var(--color-blue);
border-radius: 50%;
overflow: hidden;
`;

export const ProfileImg = styled.img`
width: 225px;
object-fit: contain
`;

export const ProfileName = styled.p`
margin: 0px;
font-size: 36px;
`;

export const ProfileTag = styled.p`
opacity: 0.5;
color: var(--color-blue);
font-size: 20px;
margin-top: 8px;
margin-bottom: 0px;

:hover, :focus {
    opacity: 1;
    color: var(--color-blue-dark);
}
`;

export const ProfileLocation = styled.p`
margin-top: 8px;
margin-bottom: 0px;
font-size: 24px;
color: var(--color-blue);
display: flex;
align-items: center;

svg{
    margin-right: 8px;
}
`;

export const ProfileStats = styled.ul`
margin-top: 20px;
display: flex;
justify-content: space-around;
`;

export const Stat = styled.li`
width: 100px;
text-align: center;`;

export const StatLabel = styled.span`
font-size: 16px;
color: var(--color-blue) `;

export const StatQuantity = styled.span`
display: block;
margin-top: 8px;
font-size: 20px;
`;

