import styled from 'styled-components';


const DropMenu = styled.ul`
position: absolute;
background-color: #f1f1f1;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
padding-left: 0;
margin-left:0;
`
const DropMenuItem = styled.li`
list-style-type: none;
`

const DropMenuLink = styled.a`
color: green;
padding: 12px 16px;
text-decoration: none;
display: block;
&:hover {
    text-decoration: none;
}
`

export const CheckboxUnchecked = styled.div`
width:85px;
height:85px;
border:2px solid black;
background-color:red;
color:#c0c0c0;
text-align:center;
padding:5px
`

export const CheckboxChecked = styled.div`
width:85px;
height:85px;
border:2px solid black;
background-color:green;
color:#c0c0c0;
text-align:center;
padding:5px
`


DropMenu.Item =DropMenuItem;
DropMenu.Link = DropMenuLink;

export default DropMenu;

