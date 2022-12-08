import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useEffect } from 'react';

const Product = ({item, setActivate, activate}) => {

    return (
        <Box sx={{ maxWidth: 400, border: 1, borderColor: activate === item.id ? "red" : "white" }}>
            <Card 
                raised 
                sx={{ maxWidth: 400 }} 
                onClick={() => setActivate(item.id)}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={item.thumbnail}
                    alt={item.title}
                />
                <CardContent 
                    sx={{ 
                        justifyItems: 'flex-start', 
                        display: 'flex', 
                        wrap:"wrap", 
                        align: 'center', 
                        justify: "space-between"
                    }}
                >
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    $ {item.price}
                </Typography>
            </CardContent>
        </Card>
        </Box>
        
    )
}

export default Product