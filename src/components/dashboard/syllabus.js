import { Bar } from 'react-chartjs-2';
import { chartBar } from './charts/chartBar.js'
import { Box, Card, CardContent, CardHeader } from '@mui/material';

export const Syllabus = (props) => {
  return (
    <Card>
      <CardHeader
        title="Syllabus wise Analysis"
      />
      <CardContent sx={{pt: 0}}>
        <Box
          sx={{
            height: 200,
            position: 'relative'
          }}
        >
          <Bar
            data={chartBar.data}
            options={chartBar.options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
