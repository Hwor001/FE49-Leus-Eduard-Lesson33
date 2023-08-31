import React from 'react';
// import styled from 'styled-components';
import { Button } from '../button/button';
import { Button2 } from '../button/button2';
import image1 from './палец вверх.png';
import image2 from './палец вниз.png'
import { Button3 } from '../button/button3';
import image3 from './флажок.png'
import { Button4 } from '../button/button4';
import image4 from './три точки.png'

interface Props {
   
   }

   const Down: React.FC<Props> = () => {
      return (
        <div>
          <div>
            <Button onClick={() => console.log('clicked1')}>
              <img src={image1} alt="#" className="pic1" />
            </Button>
            <Button2 onClick={() => console.log('clicked2')}>
              <img src={image2} alt="#" className="pic1" />
            </Button2>
          </div>
          <div>
            <Button3 onClick={() => console.log('clicked3')}>
              <img src={image3} alt="#" className="pic1" />
            </Button3>
            <Button4 onClick={() => console.log('clicked4')}>
              <img src={image4} alt="#" className="pic1" />
            </Button4>
          </div>
        </div>
      );
    };
    
    export default Down;