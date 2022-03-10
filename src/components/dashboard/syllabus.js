import { Box, Card, CardContent, CardHeader } from '@mui/material';
import LinearWithValueLabel from '../progressive-bar';

export const Syllabus = (props) => {
  const BarValues = [
    {
    title: 'HTML Tools, Forms, History',
    color: '#438AF6',
    value: 80,
    },
    {
    title: 'Tags & References in HTML',
    color: '#FF9142',
    value: 60,
    },
    {
    title: 'Tables & CSS Basics',
    color: '#FB5E5E',
    value: 24,
    },
    {
    title: 'Tables & CSS Basics',
    color: '#2EC971',
    value: 96,
    }
  ]
  return (
    <Card {...props}>
      <CardHeader
        title="Syllabus wise Analysis"
      />
      <CardContent sx={{ pt: 0 }}>
        {BarValues.map((el) => {
          return (
            <Box  sx={{mb: 4}}>
              <LinearWithValueLabel title={el.title} color={el.color} value={el.value} />                    
            </Box>
          )          
        })}
      </CardContent>
    </Card>
  );
};
