import styled from "@emotion/styled";

export const ListItem = styled.li`
display: flex;
gap: 16px;
align-items: center;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 25px;
padding-right: 25px;
background-color: var(--color-naples-yellow);
margin-top: 8px;
border: 5px solid var(--color-blue);
border-radius: 10px;
`;

export const Status = styled.span`
width: 36px;
height: 36px;
background-color: var(--color-teal);
border-radius: 50%;
`;

export const AvatarContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100px;
height:100px;
border: 5px solid var(--color-blue);
border-radius: 50%;
background-color: var(--color-snow);
overflow: hidden;
`;

export const Avatar = styled.img`
width: 70px;
`;

export const FriendName = styled.p`
font-size: 24px;
`;

