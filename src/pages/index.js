import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Skill } from '../components/dashboard/skill';
import { Syllabus } from '../components/dashboard/syllabus';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { Question } from '../components/dashboard/question';
import { DashboardLayout } from '../components/dashboard-layout';
import { Comparison } from '../components/dashboard/comparison'
import UpdateModal from '../components/dashboard/modal';


function Dashboard() {
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [score, setScore] = useState(7);

  const [rankCounter, setRankCounter] = useState(12890);
  const [percentileCounter, setPercentileCounter] = useState(37);
  const [scoreCounter, setScoreCounter] = useState(7);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);  
  };

  const SaveModalValues = () => {
    setRank(rankCounter)
    setPercentile(percentileCounter)
    setScore(scoreCounter)
    handleClose();
  }

  const ModalList = [
    {
      title: "rank",
      value: rankCounter,
      increment: () => setRankCounter(rankCounter + 1),
      decrement: () => {
        if(rankCounter>1) setRankCounter(rankCounter - 1)
      },
    },
    {
      title: "percentile",
      value: percentileCounter,
      increment: () => {
        if(percentileCounter<100) setPercentileCounter(percentileCounter + 1)
      },
      decrement: () => {
        if(percentileCounter>0) setPercentileCounter(percentileCounter - 1)
      }
    },
    {
      title: "current score",
      value: scoreCounter,
      increment: () => {
        if(scoreCounter<15) setScoreCounter(scoreCounter + 1)
      },
      decrement: () => {
        if(scoreCounter>0) setScoreCounter(scoreCounter - 1)
      },
    }
  ]

  return (
    <>
      <Head>
        <title>
          Dashboard | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              color: '#566474',
              fontSize: 12,
              py: 2
            }}
          >
            Skill Test
          </Box>
          <Grid
            container
            spacing={3}
          >
            <Grid
              container
              spacing={3}
              item lg={7}
              xs={12}
            >
              <Grid
                item
                xs={12}
              >
                <Skill handleOpen={handleOpen} sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TasksProgress sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} progressValue={[rank, percentile, score]} />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Comparison sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} percentile={percentile} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              item lg={5}
              xs={12}
            >
              <Grid
                item
                xs={12}
              >
                <Syllabus sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Question sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} score={score} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <UpdateModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setRank={setRank}
          setPercentile={setPercentile}
          setScore={setScore}
        />
      </Box>
    </>
  );
}

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
)

export default Dashboard;
