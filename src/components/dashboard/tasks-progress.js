import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';

export function TasksProgress(props) {
  const taskData = [
    {
      icon: '🏆',
      title: 'YOUR RANK',
      value: props.progressValue[0],
    },
    {
      icon: '📋',
      title: 'PERCENTILE',
      value: props.progressValue[1]+'%',
    },
    {
      icon: '✅',
      title: 'CORRECT ANSWERS',
      value: props.progressValue[2]+'/15',
    }
  ]

  return (
    <Card {...props}>
      <CardContent>
        <Box sx={{
          fontSize: 16,
          fontWeight: '600',
          mb: 2,
        }}>
          Quick Statistics
        </Box>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          {taskData.map((el) => {
            return (
              <Grid item lg={4} sx={{ display: 'flex' }}>
                <Avatar
                  sx={{
                    backgroundColor: '#F7F8FA',
                    height: 56,
                    width: 56
                  }}
                >
                  {el.icon}
                </Avatar>
                <Box sx={{ ml: 2 }}>
                  <Typography
                    color="textPrimary"
                    sx={{
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    {el.value}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    {el.title}
                  </Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </CardContent>
    </Card>
  )
}