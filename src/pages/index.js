import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Modal, Card, CardHeader, CardContent, Divider, Avatar, Button } from '@mui/material';
import { Skill } from '../components/dashboard/skill';
import { Syllabus } from '../components/dashboard/syllabus';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { Question } from '../components/dashboard/question';
import { DashboardLayout } from '../components/dashboard-layout';
import { Comparison } from '../components/dashboard/comparison'

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [score, setScore] = useState(7);
  const [rankCounter, setRankCounter] = useState(12890);
  const [percentileCounter, setPercentileCounter] = useState(37);
  const [scoreCounter, setScoreCounter] = useState(7);
  
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
              item lg={7} md={12}
              sm={12}
              xs={12}
            >
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Skill handleOpen={handleOpen} sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <TasksProgress sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} progressValue={[rank, percentile, score]} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Comparison sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} percentile={percentile} />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={3}
              item lg={5} md={12}
              sm={12}
              xs={12}
            >
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Syllabus sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
              >
                <Question sx={{ boxShadow: 'unset', border: '1px solid #EBF0F5' }} score={score} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
          <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',          
          }}>
            <Card sx={{
              width: '50%',
              px: 6,
              py: 1,
            }}>
              <CardHeader
                sx={{px:0}}
                title={<h1>Update Skill Scores</h1>}
                action={
                  <a title={"W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons"} href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg">
                    <img width={50} alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" />
                  </a>
                }
              />
              <Divider />
              <CardContent sx={{ px: 0 }}>
                <Box>
                  <ol style={{ listStyle: 'none' }}>
                    {ModalList.map((el,index) => {
                      return (
                      <li style={{ display: "flex", justifyContent: "space-between", margin: "30px 0" }}>
                        <Box sx={{ display: "flex" }}>
                          <Avatar
                            sx={{
                              backgroundColor: '#142683',
                              height: 26,
                              width: 26,
                              mr: 3,
                            }}
                          >
                           {index+1}
                          </Avatar>
                          <div>Update your <span>{el.title}</span></div>
                        </Box>
                        <Box sx={{
                          border: "1px solid rgba(20, 38, 131, 1)",
                          borderRadius: 1,
                          width: 160,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",  
                        }}>
                          <Button style={{minWidth: "unset"}} onClick={el.decrement}>-</Button>
                          <span style={{
                            color: "rgba(20, 38, 131, 1)",
                            fontWeight: 600,
                          }}>
                            {el.value}
                          </span>
                          <Button style={{minWidth: "unset"}} onClick={el.increment}>+</Button>
                        </Box>
                      </li>
                      )
                    })}
                  </ol>
                </Box>
              </CardContent>
              <Divider />
              <Box sx={{ width:"100%", display: "flex", justifyContent: "flex-end", py: 4}}>
                <Button variant="outlined" color="info" sx={{ borderRadius: 0.4 }} onClick={handleClose}>Cancel</Button>
                <Button variant="contained" color="info" sx={{ borderRadius: 0.4, mx: 4 }} onClick={SaveModalValues}>
                  Save
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33325 8.28415H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 3.61751L12.6667 8.28417L8 12.9508" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </Button>                
              </Box>
            </Card>
          </Box>
        </Modal>
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
