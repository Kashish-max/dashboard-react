import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

export const Question = (props) => {
  const chartPie = {
      data: {
          datasets: [
              {
                  data: [(((props.score)/15)*100),100-(((props.score)/15)*100)],
                  backgroundColor: ['#438AF6', 'rgba(67, 138, 246, 0.1)'],
              }
          ],
          borderWidth: 0,
          labels: ['Score','']
      },
      options: {

          cutoutPercentage: 0,
          layout: { padding: 0 },
          plugins: {
              datalabels: {
                display: false
              },
              legend: {
                  display: false
              },
          },
          maintainAspectRatio: false,
          responsive: true,
      }
  }

  return (
    <Card>
      <CardHeader
        title="Question Analysis"
        sx={{pb: 0}}
        action={(
          <Box
            size="small"
            sx={{ color: '#438AF6', fontWeight: '600'}}
          >
            {props.score}/15
          </Box>
        )}
      />
      <CardContent>
        <Typography sx={{
          fontSize: 16,
          color: 'rgba(86, 100, 116, 1)',
          pb: 7,
        }}>
          <span style={{fontWeight: '600'}}>You scored {props.score} question correct out of 15.</span> However it
          still needs some improvements          
        </Typography>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 40,
            }}
          >
            🎯
          </Box>
          <Doughnut
            data={chartPie.data}
            options={chartPie.options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
