
import mens1 from './Assets/mens/mens1.jpg'
import mens1alt from './Assets/mens/mens1alt.jpg'
import mens2 from './Assets/mens/mens2.jpg'
import mens2alt from './Assets/mens/mens2alt.jpg'
import mens3 from './Assets/mens/mens3.jpg'
import mens3alt from './Assets/mens/mens3alt.jpg'
import mens4 from './Assets/mens/mens4.jpg'
import mens4alt from './Assets/mens/mens4alt.jpg'
import mens5 from './Assets/mens/mens5.jpg'
import mens5alt from './Assets/mens/mens5alt.jpg'
import mens6 from './Assets/mens/mens6.jpg'
import mens6alt from './Assets/mens/mens6alt.jpg'
import mens7 from './Assets/mens/mens7.jpg'
import mens7alt from './Assets/mens/mens7alt.jpg'
import mens8 from './Assets/mens/mens8.jpg'
import mens8lt from './Assets/mens/mens8alt.jpg'
import womens1 from './Assets/womens/women1.jpeg'
import womens1alt from './Assets/womens/women1alt.jpeg'
import womens2 from './Assets/womens/women2.jpeg'
import womens2alt from './Assets/womens/women2alt.jpeg'
import womens3 from './Assets/womens/women3.jpeg'
import womens3alt from './Assets/womens/women3alt.jpeg'
import womens4 from './Assets/womens/women4.jpeg'
import womens4alt from './Assets/womens/women4alt.jpeg'
import womens5 from './Assets/womens/women5.jpg'
import womens5alt from './Assets/womens/women5alt.jpg'
import womens6 from './Assets/womens/women6.jpg'
import womens6alt from './Assets/womens/women6alt.jpg'
import womens7 from './Assets/womens/women7.jpg'
import womens7alt from './Assets/womens/women7alt.jpg'
import womens8 from './Assets/womens/women8.jpg'
import womens8alt from './Assets/womens/women8alt.jpg'
import furn1 from './Assets/furniture/furn1.jpg'
import furn1alt from './Assets/furniture/furn1alt.jpg'
import furn2 from './Assets/furniture/furn2.jpg'
import furn2alt from './Assets/furniture/furn2alt.jpg'
import furn3 from './Assets/furniture/furn3.jpg'
import furn3alt from './Assets/furniture/furn3alt.jpg'
import furn4 from './Assets/furniture/furn4.jpg'
import furn4alt from './Assets/furniture/furn4alt.jpg'
import furn5 from './Assets/furniture/furn5.jpg'
import furn5alt from './Assets/furniture/furn5alt.jpg'
import furn6 from './Assets/furniture/furn6.jpg'
import furn6alt from './Assets/furniture/furn6alt.jpg'
import furn7 from './Assets/furniture/furn7.jpg'
import furn7alt from './Assets/furniture/furn7alt.jpg'
import furn8 from './Assets/furniture/furn8.jpg'
import furn8alt from './Assets/furniture/furn8alt.jpg'
import uniqid from 'uniqid'

export const productArray = [
  // Mens Products
  {
    id: uniqid(),
    text: 'Washed Corduroy Bucket Hat',
    price: 12.00,
    pic: mens8,
    altPic: mens8lt,
    sectionId: ['men'],
    sizes: ['One Size'],
    available: 9
  },
  {
    id: uniqid(),
    text: 'Rolla’s Relaxo Straight Leg Jean – Stone Wash',
    price: 99.99,
    pic: mens7,
    altPic: mens7alt,
    sectionId: ['men',  'new'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Birkenstock Arizona EVA Sandal',
    price: 44.99,
    pic: mens6,
    altPic: mens6alt,
    sectionId: ['men', ],
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12',],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Wide Wale Corduroy Beach Pant',
    price: 59.99,
    pic: mens5,
    altPic: mens5alt,
    sectionId: ['men', 'new'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Converse Chuck 70 Core High Top Sneaker',
    price: 54.99,
    pic: mens4,
    altPic: mens4alt,
    sectionId: ['men',],
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12',],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Smile Ankle Sock',
    price: 10.99,
    pic: mens3,
    altPic: mens3alt,
    sectionId: ['men'],
    sizes: ['Small', 'Medium', 'Large'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Vintage Sun Bleach Crew Neck Sweatshirt',
    price: 84.99,
    pic: mens2,
    altPic: mens2alt,
    sectionId: ['men'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Metallica Crew Neck Sweatshirt',
    price: 89.99,
    pic: mens1,
    altPic: mens1alt,
    sectionId: ['men', 'sale'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  // Womens Products
  {
    id: uniqid(),
    text: 'Project Social T Rose Infused Oversized Tee',
    price: 39.00,
    pic: womens1,
    altPic: womens1alt,
    sectionId: ['women', 'new'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Lucia Corduroy Shirt Jacket',
    price: 89.00,
    pic: womens2,
    altPic: womens2alt,
    sectionId: ['women', 'sale'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Reebok Club C Double Sneaker',
    price: 80.00,
    pic: womens3,
    altPic: womens3alt,
    sectionId: ['women', 'new'],
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Out From Under Drew Seamless Ribbed Bra Top',
    price: 18.00,
    pic: womens4,
    altPic: womens4alt,
    
    sectionId: ['women'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Beyond Yoga Space-Dye Slim Racerback Tank Top',
    price: 66.00,
    pic: womens5,
    altPic: womens5alt,
    sectionId: ['women', 'sale'],
    sizes: ['8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'High & Wide Corduroy Pant',
    price: 69.00,
    pic: womens6,
    altPic: womens6alt,
    sectionId: ['women'],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Fjallraven Kånken Mini Backpack',
    price: 70.00,
    pic: womens7,
    altPic: womens7alt,
    sectionId: ['women'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Anne Smocked Waist Midi Dress',
    price: 69.99,
    pic: womens8,
    altPic: womens8alt,
    sectionId: ['women',],
    sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
    available: 6
  },
  //home
  {
    id: uniqid(),
    text: 'Linnea Bed',
    price: 899.00,
    pic: furn1,
    altPic: furn1alt,
    sectionId: ['home'],
    sizes: ['Queen', 'King'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Grayson Low Media Console',
    price: 299.99,
    pic: furn2,
    altPic: furn2alt,
    sectionId: ['home', 'sale'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Marienne Storage Cabinet',
    price: 1599.99,
    pic: furn3,
    altPic: furn3alt,
    sectionId: ['home'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Roma Rattan Chair',
    price: 459.99,
    pic: furn4,
    altPic: furn4alt,
    sectionId: ['home', 'new'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Clara Low Credenza',
    price: 599.99,
    pic: furn5,
    altPic: furn5alt,
    sectionId: ['home', 'new'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Carter Triangle Bracket Wall Shelf',
    price: 16.99,
    pic: furn6,
    altPic: furn6alt,
    sectionId: ['home'],
    sizes: ['Small', 'Large', 'XL'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Deco Sun Headboard',
    price: 299.99,
    pic: furn7,
    altPic: furn7alt,
    sectionId: ['home'],
    sizes: ['One Size'],
    available: 6
  },
  {
    id: uniqid(),
    text: 'Floria Velvet Chair',
    price: 369.99,
    pic: furn8,
    altPic: furn8alt,
    sectionId: ['home', 'new'],
    sizes: ['One Size'],
    available: 6
  },
  //lifestyle
  // {
  //   id: uniqid(),
  //   text: 'Washed Corduroy Bucket Hat',
  //   price: 12.00,
  //   pic: mens8,
  //   altPic: mens8lt,
  //   sectionId: ['lifestyle', 'new'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Rolla’s Relaxo Straight Leg Jean – Stone Wash',
  //   price: 99.99,
  //   pic: mens7,
  //   altPic: mens7alt,
  //   sectionId: ['lifestyle', 'sale'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Birkenstock Arizona EVA Sandal',
  //   price: 44.99,
  //   pic: mens6,
  //   altPic: mens6alt,
  //   sectionId: ['lifestyle', 'sale'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Wide Wale Corduroy Beach Pant',
  //   price: 59.99,
  //   pic: mens5,
  //   altPic: mens5alt,
  //   sectionId: ['lifestyle'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Converse Chuck 70 Core High Top Sneaker',
  //   price: 54.99,
  //   pic: mens4,
  //   altPic: mens4alt,
  //   sectionId: ['lifestyle', 'sale'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Smile Ankle Sock',
  //   price: 10.99,
  //   pic: mens3,
  //   altPic: mens3alt,
  //   sectionId: ['lifestyle'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Vintage Sun Bleach Crew Neck Sweatshirt',
  //   price: 84.99,
  //   pic: mens2,
  //   altPic: mens2alt,
  //   sectionId: ['lifestyle'],
  //   sizes: ['One Size'],
  //   available: 6
  // },
  // {
  //   id: uniqid(),
  //   text: 'Metallica Crew Neck Sweatshirt',
  //   price: 89.99,
  //   pic: mens1,
  //   altPic: mens1alt,
  //   sectionId: ['lifestyle', 'sale'],
  //   sizes: ['One Size'],
  //   available: 6
  // },


  

]
