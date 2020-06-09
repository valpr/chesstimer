import React from 'react';
import { Button } from 'semantic-ui-react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

const App = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
        Lorem Ipsum        </p>
        <p>
        Lorem Ipsum        </p>
        <p>
        Lorem Ipsum        </p>
        <p>
        Lorem Ipsum        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
          Lorem Ipsum
        </p>
        <p>
        Lorem Ipsum
        </p>
        <p>
        Lorem Ipsum        </p>
        <p>
        Lorem Ipsum        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)




export default App;
