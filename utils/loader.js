import React from 'react'
import styled from 'styled-components'

const Screen = styled.div`
position: relative;
height:100vh;
width:100%;
opacity:0;
animation:fade .4s ease-in forwards;
background:white;

@keyframes fade {
0%{
    opacity: .4;

}
50%{
    opacity: .8;
    
}
100%{
    opacity: 1;
    
}
}
`




const Balls = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

.ball{
height: 20px;
width: 20px;
border-radius: 50%;
background:  #d05c14;
margin:0 6px 0 0 ;
animation:oscillate .7s ease-in forwards infinite;
}

.one{
    animation-delay:.5s;

}

.two{
      animation-delay:1s;
}
.three{
      animation-delay:2s;
}

@keyframes oscillate{
    0%{
        transform: translateY(0);
    }
       50%{
        transform: translateY(20px);
    }
       100%{
        transform: translateY(0);
    }
}

`


const LoadingScreen =  () => {
    return(
        <Screen>
<Balls>
    <div className="ball one"></div>
                <div className="ball two"></div>
                <div className="ball three"></div>
</Balls>


        </Screen>
    )
}

export default LoadingScreen