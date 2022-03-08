import { Line } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

export const Comparison = (props) => {
  const lineData = [5, 15, 30, 50, 25, 40, 30, 35, 10, 15, 0];
  let activeLineData = new Array(11).fill(NaN);
  let startIndex = Math.floor(props.percentile / 20) * 2;
  activeLineData[startIndex] = lineData[startIndex];
  activeLineData[startIndex+1] = lineData[startIndex+1];
  activeLineData[startIndex+2] = lineData[startIndex+2];
  
  const chartLine = {
      data: {
          labels: ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
          datasets: [
              {
                  label: '',
                  data: activeLineData,
                  fill: true,
                  tension: 0.3,
                  borderColor: '#2168D4',
                  backgroundColor: ['rgba(67, 138, 246, 0.1)'],
                  pointBackgroundColor: '#438AF6',
                  pointBorderColor: '#438AF6',
                  borderWidth: 2,
                  color: '#fff',
              },

              {
                  label: 'No. of Students',
                  data: lineData,
                  fill: false,
                  tension: 0.3,
                  borderColor: '#C8D6E5',
                  // pointBackgroundColor: '#438AF6',
                  // pointBorderColor: '#438AF6',
                  pointBackgroundColor: 'transparent',
                  pointBorderColor: 'transparent',
                  borderWidth: 2,
                  color: '#fff',
              },
          ],
        
        },
        options: {
          plugins: {
              datalabels: {
                display: false
              },
              legend: {
                  display: false,
              },
              tooltip: {
                  callbacks: {
                      label: function(tooltipItem) {
                          return Number(tooltipItem.parsed.x)*10 + "% Percentile";
                      }
                  }
              },
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
              // title: {
              //     position: 'top',
      
              // },
              y: {
                  beginAtZero: true,
                  min: 0,
                  max: 80,
                  grid: {
                      color: '#fff',
                      borderColor: "#fff",
                  },
                  ticks: {
                      display: false,
                  }
              },
              x: {
                  grid: {
                      // color: '#EBF0F5',
                      color: '#fff',
                      tickColor: '#fff',
                      // borderDash: [8, 4],
                  },
                  ticks: {
                      color: 'rgba(158, 170, 183, 1)',
                      // align: 'start',
                      font: {
                          family: 'DM Sans',
                          weight: '400',
                          size: 12,
                      },
                      callback: function(val, index) {
                          // Hide every 2nd tick label
                          return index % 2 === 0 ? this.getLabelForValue(val) : '';
                      },
                  }
              },
          },
      },
  }

  return (
    <Card>
      <CardHeader
        title="Comparison Graph"
        sx={{pb: 0}}
        action={(
          <Avatar
            sx={{
              backgroundColor: '#F7F8FA',
              height: 56,
              width: 56
            }}
            >
              📈
          </Avatar>
        )}
      />
      <CardContent>
        <Typography sx={{
          fontSize: 16,
          color: 'rgba(86, 100, 116, 1)',
          pb: 7,
        }}>
          <span style={{fontWeight: '600'}}>You scored 37% percentile</span> which is lower than the<br />
        average percentile 72% of all the engineers who took this assessment     
        </Typography>
        <Box
          sx={{
            height: 300,
            width: '100%',
            position: 'relative',
            border: '1px solid #F7F8FA',
          }}
        >
          <Line
            data={chartLine.data}
            options={chartLine.options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
