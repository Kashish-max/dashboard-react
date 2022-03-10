import { Box, Card, CardContent, Grid, Typography, Button } from '@mui/material';

export function Skill (props) {
  return (
    <Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item sx={{display: 'flex'}}>
            <Box
              sx={{
                height: 50,
                width: 50
              }}
            >
              <a title={"W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons"} href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg">
                <img width={50} alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" />
              </a>
            </Box>          
            <Box sx={{ml: 2}}>
              <Typography
                color="textPrimary"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                }}
                gutterBottom
              >
                Hypertext Markup Language
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: 12,
                }}
              >
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Button variant="contained" color="info" onClick={props.handleOpen}>
              Update
            </Button>
          </Grid>
        </Grid>
      </CardContent>
  </Card>
  )
}
