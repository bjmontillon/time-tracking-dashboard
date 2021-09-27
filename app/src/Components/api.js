import React from 'react';
import { useState } from 'react';
import { Grid, Container } from '@material-ui/core'
import JsonData from "../data.json"
import { makeStyles } from '@material-ui/styles'
import "./api.css"

const Api= () => {

        const useStyle = makeStyles({
            mainContainer: {
               
                padding: '0',
                maxWidth: '60vw',
            },
            contentWrapper: {
               
            },
            firstInnerContainer: {
                
                display: 'flex',
                height: "60vh",
                
            },
            secondInnerContainer: {
                border: '1px solid green',
                margin: "0",
            },
            avatarContainer: {
                backgroundColor: "hsl(235, 46%, 20%)",
                borderRadius: "13px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "space-between",
            },
            cardAvatar: {
                backgroundColor: "hsl(246, 80%, 60%)",
                height: "60%",
                borderRadius: "13px",
                padding: "15px"
            },
            uiButton: {
                color: "hsl(236, 100%, 87%)",
                backgroundColor: "transparent",
                border: "0",
                "&:hover": {
                    color: "hsl(0, 0%, 100%)",
                },
            },
            buttonContainer: {
                height: "25%",
                display: "flex",
                padding: "15px",
                flexWrap: "wrap",
                alignContent: "flex-start",
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: "space-around",
            }
        })

        const classes = useStyle()

        
        const jsonData = JsonData;
        
      

        let daily = jsonData.map((data, index) => {
             return <Grid item xs={12} md={4}>
                        <div>
                            <div>
                                <h1>{data.title}</h1>
                                <p>{data.timeframes.daily.current}</p>
                                <p>{data.timeframes.daily.previous}</p>
                            </div>
                        </div>
                    </Grid>
                        })

        let weekly= jsonData.map((data, index) => { return <Grid item xs={12} md={4}>
                        <div><div>
                        <h1>{data.title}</h1>
                        <p>{data.timeframes.weekly.current}</p>
                        <p>{data.timeframes.weekly.previous}</p>
                        </div></div>
                        </Grid>})
                        

        let monthly = jsonData.map((data, index) => { return <Grid item xs={12} md={4}>
            <div><div>
                        <h1>{data.title}</h1>
                        <p>{data.timeframes.monthly.current}</p>
                        <p>{data.timeframes.monthly.previous}</p>
                        </div></div>
                        </Grid>})
                       
        
                        
                        const [newPeriodical, setNewPeriodical] = useState(
                            daily
                            )
                
                        const changeDaily = () => {
                            setNewPeriodical(daily)
                        }
                        const changeWeekly = () => {
                            setNewPeriodical(weekly)
                        }
                
                        const changeMonthly = () => {
                            setNewPeriodical(monthly)
                        }

        
                       
        return(
            

            <Container className={classes.mainContainer}>

                <Grid container className={classes.contentWrapper} spacing={2}>

                    <Grid container className={classes.firstInnerContainer} item xs={12} md={3} lg={3}>
                            
                        <Grid item md={12}lg={12} className={classes.avatarContainer}>
                            <div className={classes.cardAvatar}>
                            
                                <img src='./images/image-jeremy.png' alt='profilepic' width="500" height="600" />
                            </div>
                            <div className={classes.buttonContainer}>
                                <button className={classes.uiButton} onClick={changeDaily}>Daily</button >
                                <button className={classes.uiButton} onClick={changeWeekly}>Weekly</button >
                                <button className={classes.uiButton} onClick={changeMonthly}>Monthly</button >
                            </div>
                        </Grid>
                        
                    </Grid>

                    <Grid classname={classes.secondInnerContainer} container xs={12} md={9} spacing={2}>
                        { newPeriodical }
                        
                        
                    </Grid> 
                    
                </Grid>

            </Container>
        )
    
}

export default Api;