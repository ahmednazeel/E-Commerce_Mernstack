import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { JustProductDB } from './../JustProductDB';
import { lightGreen } from '@mui/material/colors';
import {Card, Col, Container, Image, ListGroup, Row} from 'react-bootstrap'
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import RatingProduct from '../components/rating/Rating';
const ProductPage = () => {
  const {id} = useParams();
  const product = JustProductDB.find( pro => pro.id === Number(id))

  return (
    <div className='margin-y'>
      <Container>
      <NavLink to={"/"} style={{backgroundColor:"skyblue",color:"white",fontSize:"16px",width:"fit-content",borderRadius:"8px",padding:"8px 15px"}}>GO Back to home</NavLink>

      <Row className='mt-3'>
        <Col md={6} xs={12} lg={4}>
          <Image style={{width:"100%",maxHeight:"500px"}} src={product.Image}/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3 className='c-first'>{product.proDesc}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 className='c-gray'>the Price is : <span style={{color:"green"}}>{product.price}</span></h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 className='c-gray'><RatingProduct rating={product.rating}/></h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <p className='c-gray fs_16'>the Price is : <span style={{color:"green"}}>{product.price}</span></p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className='c-gray fs_16 '>status : {product.countInStock > 0? "in stock":"out of stock"}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button disabled={product.countInStock === 0} sx={{fontSize:"16px"}}>Add to cart</Button>
            </ListGroup.Item>
          </ListGroup>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default ProductPage