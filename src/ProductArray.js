
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
import uniqid from 'uniqid'

export const productArray = [
  {
    id: uniqid(),
    text: 'Washed Corduroy Bucket Hat',
    price: 12.00,
    pic: mens8,
    altPic: mens8lt,
    sectionId: ['men']
  },
  {
    id: uniqid(),
    text: 'Rolla’s Relaxo Straight Leg Jean – Stone Wash',
    price: 99.99,
    pic: mens7,
    altPic: mens7alt,
    sectionId: ['men', 'sale']
  },
  {
    id: uniqid(),
    text: 'Birkenstock Arizona EVA Sandal',
    price: 44.99,
    pic: mens6,
    altPic: mens6alt,
    sectionId: ['men', 'sale']
  },
  {
    id: uniqid(),
    text: 'Wide Wale Corduroy Beach Pant',
    price: 59.99,
    pic: mens5,
    altPic: mens5alt,
    sectionId: ['men']
  },
  {
    id: uniqid(),
    text: 'Converse Chuck 70 Core High Top Sneaker',
    price: 54.99,
    pic: mens4,
    altPic: mens4alt,
    sectionId: ['men', 'sale']
  },
  {
    id: uniqid(),
    text: 'Smile Ankle Sock',
    price: 10.99,
    pic: mens3,
    altPic: mens3alt,
    sectionId: ['men']
  },
  {
    id: uniqid(),
    text: 'Vintage Sun Bleach Crew Neck Sweatshirt',
    price: 84.99,
    pic: mens2,
    altPic: mens2alt,
    sectionId: ['men']
  },
  {
    id: uniqid(),
    text: 'Metallica Distressed Washed Crew Neck Sweatshirt',
    price: 89.99,
    pic: mens1,
    altPic: mens1alt,
    sectionId: ['men', 'sale']
  },

]
