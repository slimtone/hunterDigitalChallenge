import React, { Component } from 'react';
import { Image, Grid, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class Pizza extends Component {
  constructor(props){
    super(props);

    this.state = {
      pizzas: ['White Cheese Pizza', 'Pepperoni Pizza', 'Double Mushroom Pizza', 'Grilled Veggie Pizza', 'Hawaiian Pizza'],
      pizzaImgs: ['https://thumbs.dreamstime.com/z/cheese-pizza-white-background-79167.jpg',
      'https://assets.kraftfoods.com/recipe_images/opendeploy/204924-1bd98c79243057e7a8da5afe3ba5773cba4ce089_642x428.jpg',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Foh%2F13%2Foh-double-mushroom-pizza-x.jpg%3Fitok%3Di-soTLG6&w=450&c=sc&poi=face&q=85','https://www.tasteofhome.com/wp-content/uploads/2018/02/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b-696x696.jpg', 'https://cdn-us-ec.yottaa.net/55b635db0b5344273c002031/d1fd69005c1501336a81123dfe2baf36.yottaa.net/v~4b.487/1374-3-large.jpg?yocs=2u_&yoloc=us']
    };
  }

  render() {
      return (
          <Grid.Column>
            <Container textAlign="center">
              <Grid columns={4}>
              {this.state.pizzaImgs.map((img,i) => {
                return (
                  <Grid.Column>
                    <Link to={`/pizza/${i+1}`}>
                      <h3>{this.state.pizzas[i]}</h3>
                      <Image src={img} width={'160px'} height={'160px'} rounded bordered centered />
                    </Link>
                  </Grid.Column>
                  );
                })}
                </Grid>
              </Container>
            </Grid.Column>
      );
    }
  }

