import React,{ Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


class AboutMeetup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstParagraph: "Come and meet other developers interested in JavaScript and its library in the Greater Jakarta area.",
            secondParagraph: "Twitter: @JakartaJS and we use the hastag #jakartajs",
        }
    }
    render(){
        let { firstParagraph, secondParagraph } = this.state
        return(
            <Fragment>
                <h2 style={{ marginLeft: '2%' }}>About Meetup</h2>
                <Typography style={{
                    maxWidth: 'auto',
                    marginLeft: '4%',
                    marginRight: '4%',
                    marginBottom: '4%',
                    maxHeight: '10%'}}>
                    <p>{firstParagraph}</p>
                    <p>{secondParagraph}</p>
                </Typography>
            </Fragment>

        )
    }
}

export default AboutMeetup;