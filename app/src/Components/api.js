import React from 'react';
import { useState } from 'react';
import { Grid, Container } from '@material-ui/core'
import JsonData from "../data.json"
import { makeStyles } from '@material-ui/styles'
import "./api.css"

const Api= () => {

        const useStyle = makeStyles({
            mainContainer: {
                border: '1px solid black',
                padding: '0',
                maxWidth: '80vw',
            },
            contentWrapper: {
               
            },
            firstInnerContainer: {
                border: '1px solid blue',
                display: 'flex'
            },
            secondInnerContainer: {
                border: '1px solid green'
            },
            items: {
                border: '1px solid red',
                borderRadius: '5px',
                padding: '10px'    
            },
        })

        const classes = useStyle()

        
        const jsonData = JsonData;
        
        

        let daily = jsonData.map((data, index) => {
             return <Grid className={classes.items} item xs={12} md={4}>
                        <h1>{data.title}</h1>
                        <p>{data.timeframes.daily.current}</p>
                        <p>{data.timeframes.daily.previous}</p>
                    </Grid>
                        })

        let weekly= jsonData.map((data, index) => { return <Grid item xs={12} md={4}>
                        <h1>{data.title}</h1>
                        <p>{data.timeframes.weekly.current}</p>
                        <p>{data.timeframes.weekly.previous}</p>
                        </Grid>})

        let monthly = jsonData.map((data, index) => { return <Grid item xs={12} md={4}>
                        <h1>{data.title}</h1>
                        <p>{data.timeframes.monthly.current}</p>
                        <p>{data.timeframes.monthly.previous}</p>
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
                <Grid container className={classes.contentWrapper}>
                    <Grid container className={classes.firstInnerContainer} item xs={12} md={3}>
                            
                        <Grid item lg={12}>
                         <img src='../images/image-jeremy.png' alt='profilepic' width="500" height="600" />
                        <button onClick={changeDaily}>Daily</button>
                        <button onClick={changeWeekly}>Weekly</button>
                        <button onClick={changeMonthly}>Monthly</button>
                        </Grid>
                    </Grid>
                    <Grid classname={classes.secondInnerContainer} container xs={12} md={9} spacingg={2}>
                        { newPeriodical }
                        
                        
                    </Grid> 
                    
                </Grid>

            </Container>
        )
    
}

export default Api;