import styled from "styled-components";

const HeaderStyle = styled.header`

@media screen and (max-width: 768px) {
    margin-top: 20px;
    height: 70px;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x:hidden;
    overflow-y:hidden;
    padding:20px;
    border-bottom: 1px solid #ccc;
    img{
        width:150px;
        height: auto;
        padding-bottom:20px;
    }
}
    
`
export default HeaderStyle