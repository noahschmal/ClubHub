import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './logo.png'

interface ClubInfo {
    name: String;
    description: String;
    user: String | undefined;
}

export default function ClubCard({name, description, user}: ClubInfo) {
    const handleLeave = () => {
        console.log(name + " " + user)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
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