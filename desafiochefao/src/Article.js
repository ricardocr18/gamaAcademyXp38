import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
//import {ReactComponent as DeleteSVG} from './assets/img/'

class Active extends Component {
    render() {
        return (

            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100" 
                src= "https://s3-alpha-sig.figma.com/img/5718/7931/5344ca85f6616b2b9812588ff6ea55b3?Expires=1634515200&Signature=IVwfKqzs2-wyuBJDB-vLUNiAxMe1rIbVqdujkIZ4fs2c9UfE0ChI20FkF0WDh8ngo2hsPQeqIaukEO86RqA6x5qW-xZMcbuN-bbfSrlSocLuAHjysw0LNrWVnNpFWROmuXIPwByz7jIm~7iOEAypYwmPsBq8ZKRMyXCRlQxhnOzGSSzc9x6wsFNjUGzXL5DPo3XSkWOJzDUWKP7O76uUYGwm76NkvcRihwXVANEw0uT2ijP-66CaxOq4LUoDGB9Dz~S1XT0YElncXWSboPNQ9E4okkJHaLZnaEL5w5zGCh1gypxU3~Iw4-gCpj6UgcBjy49UknVP-VI4BPqvRUxEog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />
          
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        )
    }
}

export default Active;