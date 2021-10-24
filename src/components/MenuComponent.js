import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// class Menu extends Component {
//     // constructor(props) {
//     //     super(props);
        

//     //     // console.log('Menu component constructed');
//     // }


//     render() {
//         // console.log('renders menu component');

//         const menu = this.props.dishes.map((dish) => {
//             return (
//               <div key={dish.id} className="col-12 col-md-5 m-1">
//                 <Card onClick={()=> this.props.onClick(dish.id)}>
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />              
//                   <CardImgOverlay>
//                     <CardTitle heading>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                 </Card>
//               </div>
//             );
//         });

//         return (
//           <div className="container">
//             <div className="row">
//               {menu}
//             </div>
//           </div>
//         );
//     }

//     // componentDidMount(){
//     //   console.log('Menu component componentDidMounbt is invoked');  
//     // }
// }
function RenderMenuItem ({dish, onClick}) {
  return (
      <Card
          onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
      </Card>
  );
}

const Menu = (props) => {

  const menu = props.dishes.map((dish) => {
      return (
          <div className="col-12 col-md-5 m-1"  key={dish.id}>
              <RenderMenuItem dish={dish} onClick={props.onClick} />
          </div>
      );
  });

  return (
      <div className="container">
          <div className="row">
              {menu}
          </div>
      </div>
  );
}

export default Menu;