import styled from 'styled-components';

export const Nav = styled.div`

background: #1E90FF;
display: flex;
justify-content: space-between;
align-items:center;

height: 70px;

h1{
    width: 350px;
    display:flex;
    justify-content:center;
    align-items: center;
    font-family: fantasy;

    font-size: 50px;

    color:#F0F8FF;
}


ul{
   display:flex;
   list-style:none;
   padding-right: 80px;

   color: #FFF;
}

ul .login{
    width: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bolder;
}


ul .btn{
    background: #363636;
    height: 30px;
    width: 170px;

    display:flex;
    justify-content: center;
    align-items: center;
    
    font-weight: bold;

    border-radius: 10px 10px;

}


`;


