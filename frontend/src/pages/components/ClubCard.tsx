import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './logo.png'
import { removeFromClub } from "../../slices/clubSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useState } from "react";

interface ClubInfo {
    name: string;
    description: string;
    id: string;
}

export default function ClubCard({name, description, id}: ClubInfo) {
    const dispatch = useAppDispatch();

    const [Count, setCount] = useState(0);
    const handleLeave = () => {
        dispatch(removeFromClub({clubName: name, userId: id}));
        window.location.reload();
    }

    return (
        <Card sx={{ width: 245 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={logo}
            title="club logo"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">View</Button>
            <Button size="small" onClick={handleLeave} color="error">Leave</Button>
        </CardActions>
        </Card>
    );
}