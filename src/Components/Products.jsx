import React, {useState, useEffect} from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [activate, setActivate] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.products);
        })
        .catch((err) => console.log(err));
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 12 }}>
                {products.map((item) => (
                    <Grid xs={6} sm={2} md={2} key={item.id}>
                        <Item>
                            <Product item={item} setActivate={setActivate} activate={activate} />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Products