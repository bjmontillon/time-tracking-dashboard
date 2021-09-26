import React from 'react';
import { Grid, Container } from '@material-ui/core'
import JsonData from "../data.json"

class Api extends React.Component {
    // constructor (props) {
    //     super(props)
    //     this.getData = this.getData.bind(this);
    // }
    // componentDidMountnt() {
    //     this.getData()
    // }
    // getData(){
    //     fetch('../../../data.json')
    //     .then(function (response){
    //         return response.json();
    //     }).then(function (data){
    //         console.log(data)
    //     })
    // }
    

    render() {

        return(
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        {JsonData.map((jsonDetail, index) => {
                            return<Grid item xs={4}>
                            <h1>{jsonDetail.title}</h1>
                            </Grid>
                        })}
                    </Grid>
                    <Grid item xs={9}>
                        {JsonData.map((jsonDetail, index) => {
                            return<Grid item xs={4}>
                            <h1>{jsonDetail.title}</h1>
                            </Grid>
                        })}
                    </Grid>  
                </Grid>

            </Container>
        )
    }
}

export default Api;