import { useState } from 'react';
import { Box, Modal, Card, CardHeader, CardContent, Divider, Avatar, Button } from '@mui/material';

function UpdateModal(props) {
  const [rankCounter, setRankCounter] = useState(12890);
  const [percentileCounter, setPercentileCounter] = useState(37);
  const [scoreCounter, setScoreCounter] = useState(7);
  
  const { open, handleOpen, handleClose, setRank, setPercentile, setScore } = props;
    
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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
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
              width: {
                lg: '50%',
                md: '70%',
                sm: '90%',
              },
              px: {
                lg: 6,
                md: 4,
                sm: 3,
                xs: 2
              },
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

export default UpdateModal;
