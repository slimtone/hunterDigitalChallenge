import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

export default class SinglePizza extends Component {
  constructor(props){
    super(props);

    this.state = {
      pizzas: ['White Cheese Pizza', 'Pepperoni Pizza', 'Double Mushroom Pizza', 'Grilled Veggie Pizza', 'Hawaiian Pizza'],
      pizzaImgs: ['https://thumbs.dreamstime.com/z/cheese-pizza-white-background-79167.jpg',
      'https://assets.kraftfoods.com/recipe_images/opendeploy/204924-1bd98c79243057e7a8da5afe3ba5773cba4ce089_642x428.jpg',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Foh%2F13%2Foh-double-mushroom-pizza-x.jpg%3Fitok%3Di-soTLG6&w=450&c=sc&poi=face&q=85','https://www.tasteofhome.com/wp-content/uploads/2018/02/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b-696x696.jpg', 'https://cdn-us-ec.yottaa.net/55b635db0b5344273c002031/d1fd69005c1501336a81123dfe2baf36.yottaa.net/v~4b.487/1374-3-large.jpg?yocs=2u_&yoloc=us']
    };
  }

	render(){
    let { id } = this.props.match.params;
		return(
      <Card
        style={{margin: '5em'}}
        image={this.state.pizzaImgs[id-1]}
        header={this.state.pizzas[id-1]}
        description='Describe the pizza here'
      />
		);
	}
}
