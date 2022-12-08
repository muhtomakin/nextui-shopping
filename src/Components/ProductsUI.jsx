import React, { useState, useEffect } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';

export const ProductsUI = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log('useEffect');
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
  return (
    <Grid.Container gap={2} justify="flex-start">
      {products.map((item, index) => (
        <Grid xs={6} sm={3} key={index} css={{ color : '$green500' }}>
          <Card isPressable /*css={{ color : '$green500' }}*/ >
            <Card.Body css={{ p: 0 }} >
              <Card.Image
                src={item.thumbnail}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: 'flex-start' }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text
                  css={{
                    color: '$accents7',
                    fontWeight: '$semibold',
                    fontSize: '$sm',
                    paddingRight: '1.3rem',
                  }}
                >
                  $ {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
