import logo from './logo.svg'
import logo_w from './logo_white_border.png'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import sample_img_3 from './sample_img_3.png'
import sample_img_4 from './sample_img_4.png'
import sample_img_5 from './sample_img_5.jpg'
import sample_img_6 from './sample_img_6.jpg'
import sample_img_7 from './sample_img_7.png'
import sample_img_8 from './sample_img_8.png'
import sample_img_9 from './sample_img_9.png'
import sample_img_10 from './sample_img_10.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.png'
import profile_icon from './profile_icon.png'
import user_icon from './user_icon.svg'

export const assets = {
    logo,
    logo_w,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    sample_img_3,
    sample_img_4,
    sample_img_5,
    sample_img_6,
    sample_img_7,
    sample_img_8,
    sample_img_9,
    sample_img_10,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    user_icon
}

export const stepsData = [
  {
    title: 'Express Your Idea',
    description: 'Enter a phrase, sentence, or paragraph that captures the image you wish to generate.',
    icon: step_icon_1,
  },
  {
    title: 'Experience the Transformation',
    description: 'Our AI-powered system will quickly turn your text into a one-of-a-kind, high-quality image.',
    icon: step_icon_2,
  },
  {
    title: 'Save & Share',
    description: 'Download your image instantly or share it directly from our platform with ease.',
    icon: step_icon_3,
  },
];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:'Graphic Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:profile_img_2,
        name:'Richard Nelson',
        role:'Content Creator',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:profile_img_1,
        name:'Donald Jackman',
        role:' Graphic Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]